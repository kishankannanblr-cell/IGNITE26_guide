class IgniteVideoPlayer {
  constructor() {
    this.videos = window.IGNITE_DATA.videos;
    this.currentVideo = this.videos[0];
    this.isPlaying = false;
    this.currentTime = 0; // seconds
    this.duration = 28; // 7 seconds per scene default
    this.speed = 1;
    this.voiceEnabled = false;
    this.lastSpokenScene = -1;
    this.lastFrameTime = performance.now();

    this.canvas = document.getElementById('video-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.streamVideoEl = document.getElementById('live-video-stream');

    this.initDOM();
    this.loadVideo(this.videos[0].id, false);
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initDOM() {
    if (this.canvas && this.streamVideoEl && typeof this.canvas.captureStream === 'function') {
      try {
        const stream = this.canvas.captureStream(30);
        this.streamVideoEl.srcObject = stream;
        this.streamVideoEl.muted = true;
        this.streamVideoEl.play().catch(() => {});
      } catch (e) {
        // Fallback to direct canvas rendering
      }
    }

    const playBtn = document.getElementById('vid-play-btn');
    const scrubber = document.getElementById('vid-scrubber');
    const speedBtn = document.getElementById('vid-speed-btn');
    const voiceBtn = document.getElementById('vid-voice-btn');
    const pipBtn = document.getElementById('vid-pip-btn');

    if (playBtn) {
      playBtn.addEventListener('click', () => this.togglePlay());
    }
    if (this.canvas) {
      this.canvas.addEventListener('click', () => this.togglePlay());
    }
    if (scrubber) {
      scrubber.addEventListener('input', (e) => {
        const pct = parseFloat(e.target.value) / 100;
        this.currentTime = pct * this.duration;
        this.lastSpokenScene = -1;
        this.updateUI();
      });
    }
    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        const speeds = [1, 1.5, 2];
        const nextIdx = (speeds.indexOf(this.speed) + 1) % speeds.length;
        this.speed = speeds[nextIdx];
        speedBtn.textContent = `${this.speed}x`;
      });
    }
    if (voiceBtn) {
      voiceBtn.addEventListener('click', () => {
        this.voiceEnabled = !this.voiceEnabled;
        voiceBtn.classList.toggle('active', this.voiceEnabled);
        voiceBtn.innerHTML = this.voiceEnabled ? '🔊 Voice: ON' : '🔇 Voice: OFF';
        if (!this.voiceEnabled && window.speechSynthesis) {
          window.speechSynthesis.cancel();
        } else {
          this.lastSpokenScene = -1;
        }
      });
    }
    if (pipBtn) {
      pipBtn.addEventListener('click', async () => {
        try {
          if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
          } else if (this.streamVideoEl && this.streamVideoEl.requestPictureInPicture) {
            await this.streamVideoEl.play();
            await this.streamVideoEl.requestPictureInPicture();
          }
        } catch (err) {
          console.warn('PiP not supported:', err);
        }
      });
    }
  }

  loadVideo(videoId, autoPlay = true) {
    const found = this.videos.find(v => v.id === videoId) || this.videos[0];
    this.currentVideo = found;
    this.duration = found.scenes.length * 7;
    this.currentTime = 0;
    this.lastSpokenScene = -1;
    this.isPlaying = autoPlay;

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // Highlight playlist item
    document.querySelectorAll('.video-playlist-item').forEach(el => {
      el.classList.toggle('active', el.dataset.videoId === found.id);
    });

    // Render scene chapters
    const chaptersEl = document.getElementById('vid-chapters');
    if (chaptersEl) {
      chaptersEl.innerHTML = found.scenes.map((sc, idx) => `
        <button class="chapter-pill" data-scene-idx="${idx}">
          <span class="chapter-num">Step ${idx + 1}</span>
          <span>${sc.title.replace(/^Step \d+:\s*/, '')}</span>
        </button>
      `).join('');

      chaptersEl.querySelectorAll('.chapter-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.sceneIdx, 10);
          this.currentTime = idx * 7 + 0.05;
          this.lastSpokenScene = -1;
          this.isPlaying = true;
          this.updateUI();
        });
      });
    }

    // Update header & YouTube link
    const titleEl = document.getElementById('vid-active-title');
    const summaryEl = document.getElementById('vid-active-summary');
    const ytLinkEl = document.getElementById('vid-yt-link');
    if (titleEl) titleEl.textContent = found.title;
    if (summaryEl) summaryEl.textContent = found.summary;
    if (ytLinkEl) ytLinkEl.href = found.youtubeSearch;

    this.updateUI();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (!this.isPlaying && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.updateUI();
  }

  speakScene(scene) {
    if (!this.voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(`${scene.title}. ${scene.caption}`);
    utter.rate = Math.min(1.35, Math.max(0.9, this.speed));
    window.speechSynthesis.speak(utter);
  }

  formatTime(sec) {
    const s = Math.max(0, Math.floor(sec));
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  }

  updateUI() {
    const playBtn = document.getElementById('vid-play-btn');
    const scrubber = document.getElementById('vid-scrubber');
    const timeEl = document.getElementById('vid-time-label');
    const sceneIdx = Math.min(
      this.currentVideo.scenes.length - 1,
      Math.floor(this.currentTime / 7)
    );

    if (playBtn) {
      playBtn.innerHTML = this.isPlaying ? '⏸ Pause Video' : '▶ Play Video';
    }
    if (scrubber) {
      scrubber.value = ((this.currentTime / this.duration) * 100).toFixed(1);
    }
    if (timeEl) {
      timeEl.textContent = `${this.formatTime(this.currentTime)} / ${this.formatTime(this.duration)}`;
    }

    document.querySelectorAll('.chapter-pill').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === sceneIdx);
    });
  }

  animate(now) {
    const dt = (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;

    if (this.isPlaying) {
      this.currentTime += dt * this.speed;
      if (this.currentTime >= this.duration) {
        this.currentTime = 0;
        this.lastSpokenScene = -1;
      }
      this.updateUI();
    }

    this.drawFrame(now);
    requestAnimationFrame(this.animate);
  }

  drawFrame(now) {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;

    const sceneCount = this.currentVideo.scenes.length;
    const sceneIdx = Math.min(sceneCount - 1, Math.floor(this.currentTime / 7));
    const sceneProgress = (this.currentTime % 7) / 7; // 0..1
    const scene = this.currentVideo.scenes[sceneIdx];

    if (this.isPlaying && this.voiceEnabled && this.lastSpokenScene !== sceneIdx) {
      this.lastSpokenScene = sceneIdx;
      this.speakScene(scene);
    }

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#090d16');
    grad.addColorStop(0.5, '#111827');
    grad.addColorStop(1, '#1e1b4b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Subtle tech grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Top HUD Banner
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.fillRect(0, 0, W, 54);
    ctx.fillStyle = '#f43f5e';
    ctx.fillRect(0, 52, W * ((this.currentTime / this.duration) || 0), 3);

    // Badge & Title
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 13px system-ui, -apple-system, sans-serif';
    ctx.fillText(`IGNITE 2026 VIDEO GUIDE  •  STEP ${sceneIdx + 1} OF ${sceneCount}`, 24, 23);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px system-ui, -apple-system, sans-serif';
    ctx.fillText(scene.title, 24, 44);

    // Draw interactive schematic based on video type & scene
    this.drawSchematic(ctx, W, H, this.currentVideo.id, sceneIdx, sceneProgress, now);

    // Bottom Subtitle / Caption Box
    ctx.fillStyle = 'rgba(9, 13, 22, 0.92)';
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.45)';
    ctx.lineWidth = 1.5;
    this.roundRect(ctx, 24, H - 102, W - 48, 84, 12, true, true);

    ctx.fillStyle = '#f8fafc';
    ctx.font = '15.5px system-ui, -apple-system, sans-serif';
    this.wrapText(ctx, scene.caption, 42, H - 72, W - 84, 22);

    // Play overlay if paused at t=0
    if (!this.isPlaying) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
      ctx.fillRect(0, 55, W, H - 160);
      ctx.fillStyle = 'rgba(244, 63, 94, 0.95)';
      ctx.beginPath();
      ctx.arc(W / 2, H / 2 - 20, 36, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(W / 2 - 10, H / 2 - 36);
      ctx.lineTo(W / 2 - 10, H / 2 - 4);
      ctx.lineTo(W / 2 + 18, H / 2 - 20);
      ctx.closePath();
      ctx.fill();
    }
  }

  drawSchematic(ctx, W, H, videoId, sceneIdx, prog, now) {
    const pulse = (Math.sin(now / 180) + 1) / 2;
    const cableAnim = Math.min(1, prog * 1.8);

    if (videoId === 'xbox-setup') {
      // Draw Xbox Rear & Monitor & Controllers
      this.drawBox(ctx, 70, 95, 340, 170, '#1e293b', '#38bdf8', 'XBOX CONSOLE (REAR / FRONT)');
      // Ports
      this.drawBox(ctx, 90, 145, 70, 42, '#0f172a', sceneIdx === 0 ? '#fbbf24' : '#475569', 'AC IN');
      this.drawBox(ctx, 175, 145, 95, 42, '#0f172a', sceneIdx === 1 ? '#10b981' : '#10b981', 'HDMI OUT ✓');
      this.drawBox(ctx, 285, 145, 95, 42, '#450a0a', '#ef4444', 'HDMI IN ✗');

      // Monitor
      this.drawBox(ctx, 510, 85, 310, 185, '#0f172a', '#10b981', 'GAMING MONITOR (HDMI 1 • GAME MODE)');

      // Animated Power Line
      if (sceneIdx >= 0) {
        this.drawAnimatedCable(ctx, 125, 295, 125, 187, sceneIdx === 0 ? cableAnim : 1, '#fbbf24', 'UPS / Surge Power');
      }
      // Animated HDMI Line
      if (sceneIdx >= 1) {
        this.drawAnimatedCable(ctx, 222, 187, 510, 175, sceneIdx === 1 ? cableAnim : 1, '#10b981', 'High-Speed HDMI');
      }

      // Monitor Content
      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 14px system-ui, sans-serif';
      if (sceneIdx === 0) {
        ctx.fillText('1. Connect Figure-8 AC Cord firmly', 535, 145);
        ctx.fillText('2. Keep 15cm airflow around top exhaust', 535, 175);
      } else if (sceneIdx === 1) {
        ctx.fillStyle = '#4ade80';
        ctx.fillText('✓ Plugged into HDMI OUT TO TV', 535, 145);
        ctx.fillStyle = '#f87171';
        ctx.fillText('✗ NEVER plug into HDMI IN!', 535, 175);
      } else if (sceneIdx === 2) {
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('Sync Button (Console) -> Sync (Controller)', 535, 145);
        ctx.fillText('Or plug in USB-C / Micro-USB cable!', 535, 175);
        // Blinking controller icon
        ctx.beginPath();
        ctx.arc(665, 220, 14 + pulse * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.4 + pulse * 0.5})`;
        ctx.fill();
      } else {
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('EA SPORTS FC / FIFA 1v1 READY', 535, 140);
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('Controller 1: Main Profile', 535, 170);
        ctx.fillStyle = '#4ade80';
        ctx.fillText('Controller 2: Add or Switch -> Add Guest!', 535, 200);
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('Settings > Auto-Updates: OFF', 535, 230);
      }
    } else if (videoId === 'ps4-setup') {
      this.drawBox(ctx, 65, 95, 340, 175, '#0f172a', '#60a5fa', 'PLAYSTATION 4 (ARRIVING TOMORROW)');
      // Light bar simulation
      const barColor = sceneIdx === 0 && prog < 0.5 ? '#3b82f6' : '#ffffff';
      ctx.fillStyle = barColor;
      ctx.fillRect(85, 128, 300, 6);
      ctx.font = '12px system-ui, sans-serif';
      ctx.fillText(barColor === '#3b82f6' ? 'Light Bar: Blue (Booting) -> Solid White (Ready)' : 'Light Bar: SOLID WHITE (HDMI Signal Active)', 85, 150);

      this.drawBox(ctx, 85, 170, 90, 42, '#1e293b', '#fbbf24', 'AC IN');
      this.drawBox(ctx, 195, 170, 95, 42, '#1e293b', '#10b981', 'HDMI OUT');
      this.drawBox(ctx, 305, 170, 80, 42, '#1e293b', '#38bdf8', 'USB (x2)');

      this.drawBox(ctx, 470, 95, 360, 175, '#1e1b4b', '#818cf8', 'DUALSHOCK 4 & 2-PLAYER FIFA SETUP');

      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 14px system-ui, sans-serif';
      if (sceneIdx === 0) {
        this.drawAnimatedCable(ctx, 240, 212, 470, 180, cableAnim, '#10b981', 'HDMI OUT -> Monitor');
        ctx.fillText('• Plug AC Cord into AC IN', 490, 145);
        ctx.fillText('• Plug HDMI into HDMI OUT', 490, 175);
        ctx.fillText('• Disable HDCP if using Splitter', 490, 205);
      } else if (sceneIdx === 1) {
        this.drawAnimatedCable(ctx, 345, 212, 470, 180, cableAnim, '#38bdf8', 'Micro-USB DATA Cable');
        ctx.fillText('• Wired: Plug Micro-USB DATA cable + Press PS', 490, 145);
        ctx.fillText('• Wireless: Hold SHARE + PS for 4 seconds', 490, 175);
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('  (Rapid White Strobe = Bluetooth Pairing Mode)', 490, 205);
      } else if (sceneIdx === 2) {
        ctx.fillStyle = '#f87171';
        ctx.fillText('✗ NEVER pick Player 1 on Controller 2!', 490, 140);
        ctx.fillStyle = '#4ade80';
        ctx.fillText('✓ Scroll Left -> + New User', 490, 170);
        ctx.fillText('✓ Click "Play as a Guest" -> "Do Not Sign In"', 490, 200);
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('P1 Bar = BLUE  |  P2 Bar = RED (Both Active!)', 490, 230);
      } else {
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('EMERGENCY PS4 REPAIRS:', 490, 140);
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('1. Controller Frozen? Paperclip in L2 back pinhole (5s)', 490, 170);
        ctx.fillText('2. Monitor Black Screen? Hold PS4 Power 7s (2nd Beep)', 490, 200);
        ctx.fillText('   -> Boots Safe Mode -> Select "Change Resolution"', 490, 228);
      }
    } else if (videoId === 'lan-setup') {
      // 4 Laptops + Switch
      this.drawBox(ctx, 330, 80, 220, 60, '#0f172a', '#38bdf8', 'LAB GIGABIT SWITCH / 5GHz AP');
      const coords = [
        [70, 195, 'PC 1 (HOST): 192.168.1.45'],
        [280, 195, 'PC 2: Direct Connect'],
        [490, 195, 'PC 3: Direct Connect'],
        [680, 195, 'PC 4: Direct Connect']
      ];
      coords.forEach(([x, y, label], i) => {
        this.drawBox(ctx, x, y, 175, 80, '#1e293b', i === 0 ? '#fbbf24' : '#10b981', label);
        this.drawAnimatedCable(ctx, x + 87, y, 440, 140, cableAnim, i === 0 ? '#fbbf24' : '#10b981', '');
      });
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('Host CMD > ipconfig -> 192.168.1.45   |   Join -> 192.168.1.45:54321   |   Firewall: Allow javaw.exe', 85, 305);
    } else if (videoId === 'pa-setup') {
      // Stage Sources -> DI -> Mixer -> Speakers
      this.drawBox(ctx, 50, 110, 170, 140, '#1e293b', '#38bdf8', '1. STAGE SOURCES');
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText('• Vocal Mics (SM58)', 65, 155);
      ctx.fillText('• Digital Piano (DI Box)', 65, 180);
      ctx.fillText('• Guitar/Bass Amps', 65, 205);
      ctx.fillStyle = '#4ade80';
      ctx.fillText('POWER ON: FIRST (1st)', 65, 232);

      this.drawBox(ctx, 320, 110, 220, 140, '#0f172a', '#fbbf24', '2. PA MIXING CONSOLE');
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText('• Set Gain (Green/Yellow)', 335, 155);
      ctx.fillText('• 80Hz Low-Cut ON for Vocals', 335, 180);
      ctx.fillText('• MUTE before unplugging!', 335, 205);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('POWER ON: SECOND (2nd)', 335, 232);

      this.drawBox(ctx, 640, 110, 195, 140, '#1e293b', '#ef4444', '3. MAIN PA SPEAKERS');
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText('• Place ahead of Mics', 655, 155);
      ctx.fillText('• Floor Monitors on AUX 1', 655, 180);
      ctx.fillStyle = '#f87171';
      ctx.fillText('POWER ON: LAST (3rd)!', 655, 215);
      ctx.fillText('POWER OFF: FIRST!', 655, 235);

      this.drawAnimatedCable(ctx, 220, 180, 320, 180, cableAnim, '#38bdf8', 'XLR / DI');
      this.drawAnimatedCable(ctx, 540, 180, 640, 180, cableAnim, '#10b981', 'Main L/R XLR');
    } else if (videoId === 'projector-setup') {
      // Laptop -> Video (HDMI) & Audio (3.5mm to Mixer)
      this.drawBox(ctx, 60, 115, 220, 145, '#1e293b', '#38bdf8', 'SCREENING / TICKER LAPTOP');
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText('• Win + P: Duplicate / Extend', 75, 160);
      ctx.fillText('• Res: 1920x1080 @ 60Hz', 75, 185);
      ctx.fillText('• VLC Player + Airplane Mode', 75, 210);

      this.drawBox(ctx, 540, 80, 270, 95, '#0f172a', '#fbbf24', 'AUDITORIUM PROJECTOR (VIDEO ONLY)');
      ctx.fillStyle = '#fde68a';
      ctx.fillText('Input: HDMI 1 (Video Signal)', 560, 130);

      this.drawBox(ctx, 540, 190, 270, 95, '#0f172a', '#10b981', 'AUDITORIUM PA MIXER (SOUND)');
      ctx.fillStyle = '#4ade80';
      ctx.fillText('Windows Sound -> Headphones/Mixer!', 560, 240);

      this.drawAnimatedCable(ctx, 280, 150, 540, 125, cableAnim, '#fbbf24', 'HDMI Cable (Video)');
      this.drawAnimatedCable(ctx, 280, 220, 540, 235, cableAnim, '#10b981', '3.5mm Aux / DI (Audio)');
    } else {
      // Sports Setup
      this.drawBox(ctx, 60, 105, 240, 160, '#1e293b', '#f43f5e', 'BASKETBALL (FIBA)');
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText('• 4x 10-Min Quarters Clock', 75, 150);
      ctx.fillText('• 24s & 14s Shot Clock Reset', 75, 180);
      ctx.fillText('• Connect DIN cables BEFORE boot', 75, 210);
      ctx.fillText('• Keep Manual Flip-Board Backup', 75, 240);

      this.drawBox(ctx, 330, 105, 240, 160, '#1e293b', '#38bdf8', '10m SHOOTING RANGE (ISSF)');
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText('• Range Server -> Switch -> Lanes', 345, 150);
      ctx.fillText('• 15m Sighting + 45m Match Clock', 345, 180);
      ctx.fillText('• Never cross firing line!', 345, 210);
      ctx.fillText('• Keep 1 Spare Target Lane Ready', 345, 240);

      this.drawBox(ctx, 600, 105, 235, 160, '#1e293b', '#10b981', 'ASTROTURF & COURTS');
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText('• Pre-warm Floodlights @ 4:30 PM', 615, 150);
      ctx.fillText('• Weatherproof Canopy for PA', 615, 180);
      ctx.fillText('• Wireless Mic < 25m to Receiver', 615, 210);
      ctx.fillText('• Volleyball Remote = Channel 2', 615, 240);
    }
  }

  drawBox(ctx, x, y, w, h, fill, stroke, title) {
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    this.roundRect(ctx, x, y, w, h, 10, true, true);
    if (title) {
      ctx.fillStyle = stroke;
      ctx.font = 'bold 12px system-ui, -apple-system, sans-serif';
      ctx.fillText(title, x + 12, y + 22);
    }
  }

  drawAnimatedCable(ctx, x1, y1, x2, y2, prog, color, label) {
    const curX = x1 + (x2 - x1) * prog;
    const curY = y1 + (y2 - y1) * prog;

    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(curX, curY);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(curX, curY, 6, 0, Math.PI * 2);
    ctx.fill();

    if (label) {
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 11.5px system-ui, sans-serif';
      ctx.fillText(label, (x1 + x2) / 2 - 45, (y1 + y2) / 2 - 10);
    }
  }

  roundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, curY);
  }
}

window.IgniteVideoPlayer = IgniteVideoPlayer;
