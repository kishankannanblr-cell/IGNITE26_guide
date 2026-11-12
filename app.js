document.addEventListener('DOMContentLoaded', () => {
  const data = window.IGNITE_DATA;
  const videoPlayer = new window.IgniteVideoPlayer();

  // Unified Tab Navigation (Desktop Top Bar + Mobile Bottom Bar)
  const navTabs = document.querySelectorAll('.nav-tab, .mob-nav-item');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function switchTab(tabId) {
    navTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    tabPanels.forEach(p => p.classList.toggle('active', p.id === `panel-${tabId}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.switchMainTab = switchTab;

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Helper to jump straight to a video walkthrough
  window.watchGuideVideo = function(videoId) {
    switchTab('videos');
    videoPlayer.loadVideo(videoId, true);
  };

  // Toggle Setup vs Repair inside a console card (great for narrow phone screens)
  window.setConsoleMode = function(key, mode, btnEl) {
    const sec = document.getElementById(`section-${key}`);
    if (!sec) return;
    sec.setAttribute('data-view-mode', mode);
    sec.querySelectorAll('.mode-pill-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
  };

  // Render Respawn (Gaming) Console Sub-Tabs & Content
  function renderRespawnPanel() {
    const overviewEl = document.getElementById('respawn-games-grid');
    if (overviewEl) {
      overviewEl.innerHTML = data.respawnGuide.overview.games.map(g => `
        <div class="game-card">
          <div class="game-card-title">${g.name}</div>
          <div class="game-card-format">${g.format}</div>
          <div class="game-card-tech"><strong>Tech Focus:</strong> ${g.techSummary}</div>
        </div>
      `).join('');
    }

    const consolesContainer = document.getElementById('respawn-consoles-container');
    if (!consolesContainer) return;

    const blocks = [
      { key: 'xbox', icon: '🟢', colorClass: 'xbox-theme' },
      { key: 'ps4', icon: '🔵', colorClass: 'ps4-theme' },
      { key: 'pcNetwork', icon: '🌐', colorClass: 'pc-theme' }
    ];

    consolesContainer.innerHTML = blocks.map(({ key, icon, colorClass }) => {
      const item = data.respawnGuide.consoles[key];
      return `
        <div class="console-section ${colorClass}" id="section-${key}" data-console-key="${key}" data-view-mode="both">
          <div class="console-header">
            <div class="console-heading-group">
              <span class="badge-pill">${item.badge}</span>
              <h3>${icon} ${item.name}</h3>
            </div>
            <div class="console-actions">
              <button class="btn-primary" onclick="window.watchGuideVideo('${item.videoId}')">
                ▶ Setup Video
              </button>
              <a class="btn-secondary" href="${item.youtubeQuery}" target="_blank" rel="noopener">
                📺 YouTube ↗
              </a>
            </div>
          </div>

          <!-- Mobile Sub-Mode Toggle (Setup vs Repairs) -->
          <div class="mobile-mode-bar">
            <button class="mode-pill-btn active" onclick="window.setConsoleMode('${key}', 'both', this)">All</button>
            <button class="mode-pill-btn" onclick="window.setConsoleMode('${key}', 'setup', this)">⚡ Setup (${item.steps.length})</button>
            <button class="mode-pill-btn" onclick="window.setConsoleMode('${key}', 'repair', this)">🔧 Repairs (${item.repairs.length})</button>
          </div>

          <div class="two-col-grid">
            <div class="steps-column">
              <h4 class="sub-col-heading">⚡ Step-by-Step Setup (Power → HDMI → Wi-Fi → Game)</h4>
              <div class="step-list">
                ${item.steps.map((s, idx) => `
                  <label class="interactive-step">
                    <input type="checkbox" class="persist-check" data-check-id="respawn-${key}-step-${idx}">
                    <div class="step-body">
                      <div class="step-title">${s.step}</div>
                      <div class="step-detail">${s.detail}</div>
                    </div>
                  </label>
                `).join('')}
              </div>
            </div>

            <div class="repairs-column">
              <h4 class="sub-col-heading">🔧 Instant On-Site Repair &amp; Troubleshooting</h4>
              <div class="repair-list">
                ${item.repairs.map(r => `
                  <div class="repair-card">
                    <div class="repair-symptom">⚠️ <strong>If:</strong> ${r.symptom}</div>
                    <div class="repair-fix">✅ <strong>Fix:</strong> ${r.fix}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Console platform filter buttons (All / Xbox / PS4 / PC)
    const filterBtns = document.querySelectorAll('.console-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.consoleFilter;
        document.querySelectorAll('.console-section').forEach(sec => {
          sec.style.display = (target === 'all' || sec.dataset.consoleKey === target) ? '' : 'none';
        });
      });
    });
  }

  // Render Video Playlist & Interactive Port Trainer
  function renderVideoAndHardwarePanel() {
    const playlistEl = document.getElementById('video-playlist');
    if (playlistEl) {
      playlistEl.innerHTML = data.videos.map(v => `
        <div class="video-playlist-item ${v.id === data.videos[0].id ? 'active' : ''}" data-video-id="${v.id}">
          <div class="vp-top">
            <span class="vp-badge">${v.badge}</span>
            <span class="vp-duration">⏱ ${v.duration}</span>
          </div>
          <div class="vp-title">${v.title}</div>
          <div class="vp-cat">${v.category}</div>
        </div>
      `).join('');

      playlistEl.querySelectorAll('.video-playlist-item').forEach(item => {
        item.addEventListener('click', () => {
          videoPlayer.loadVideo(item.dataset.videoId, true);
          if (window.innerWidth <= 768) {
            const playerCard = document.querySelector('.video-player-card');
            if (playerCard) playerCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }

    // Hardware Port Inspector
    const hwSelector = document.querySelectorAll('.hw-select-btn');
    const hwCanvasArea = document.getElementById('hw-diagram-area');
    const hwDetailBox = document.getElementById('hw-port-detail');

    function loadHardwareDiagram(hwKey) {
      hwSelector.forEach(b => b.classList.toggle('active', b.dataset.hw === hwKey));
      const diag = data.hardwareDiagrams[hwKey];
      if (!diag || !hwCanvasArea) return;

      hwCanvasArea.innerHTML = `
        <div class="hw-board">
          <div class="hw-board-header">
            <h4>${diag.title}</h4>
            <p>${diag.subtitle}</p>
          </div>
          <div class="hw-ports-row">
            ${diag.ports.map((p, idx) => `
              <button class="hw-port-btn ${idx === 0 ? 'selected' : ''}" data-port-idx="${idx}" style="--port-color: ${p.color}">
                <span class="port-top-line">
                  <span class="port-led"></span>
                  <span class="port-click-hint">Tap to inspect</span>
                </span>
                <span class="port-name">${p.label}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;

      function showPortDetail(idx, fromUserClick = false) {
        const port = diag.ports[idx];
        hwCanvasArea.querySelectorAll('.hw-port-btn').forEach((b, i) => {
          b.classList.toggle('selected', i === idx);
        });
        if (hwDetailBox) {
          hwDetailBox.innerHTML = `
            <div class="port-detail-card" style="border-left: 4px solid ${port.color}">
              <div class="pd-title" style="color: ${port.color}">${port.label}</div>
              <div class="pd-row"><strong>🔌 Cable:</strong> ${port.cable}</div>
              <div class="pd-row"><strong>📋 Action:</strong> ${port.instruction}</div>
              <div class="pd-row pd-warn"><strong>🚫 Avoid:</strong> ${port.mistake}</div>
            </div>
          `;
          if (fromUserClick && window.innerWidth <= 768) {
            hwDetailBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      }

      hwCanvasArea.querySelectorAll('.hw-port-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          showPortDetail(parseInt(btn.dataset.portIdx, 10), true);
        });
      });

      showPortDetail(0, false);
    }

    hwSelector.forEach(btn => {
      btn.addEventListener('click', () => loadHardwareDiagram(btn.dataset.hw));
    });
    loadHardwareDiagram('xbox');
  }

  // Render All 12 Cultural Events
  function renderCulturalEvents(filter = 'ALL', search = '') {
    const grid = document.getElementById('cultural-events-grid');
    if (!grid) return;

    const q = search.trim().toLowerCase();
    const filtered = data.culturalEvents.filter(ev => {
      const matchesFilter =
        filter === 'ALL' ||
        ev.techLevel === filter ||
        (filter === 'MEDIUM' && (ev.techLevel === 'MEDIUM' || ev.techLevel === 'LOW'));
      const matchesSearch = !q ||
        ev.name.toLowerCase().includes(q) ||
        ev.venue.toLowerCase().includes(q) ||
        ev.summary.toLowerCase().includes(q) ||
        ev.hardwareList.join(' ').toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });

    grid.innerHTML = filtered.map(ev => `
      <div class="event-card tech-${ev.techLevel.toLowerCase()}">
        <div class="event-card-top">
          <span class="tech-badge level-${ev.techLevel.toLowerCase()}">${ev.techLevel} TECH</span>
          <span class="venue-badge">📍 ${ev.venue}</span>
        </div>

        <h3 class="event-title">${ev.name}</h3>
        <div class="sched-badge">🕒 ${ev.schedule}</div>
        <div class="event-heads">👤 <strong>Heads:</strong> ${ev.heads}</div>
        <p class="event-summary">${ev.summary}</p>

        <div class="event-hw-box">
          <strong>🧰 Tech Gear:</strong>
          <div class="hw-tags">
            ${ev.hardwareList.map(h => `<span class="hw-tag">${h}</span>`).join('')}
          </div>
        </div>

        <div class="event-steps-box">
          <strong>⚙️ Setup Checklist:</strong>
          <ul>
            ${ev.setupSteps.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="event-fix-box">
          <strong>🚑 Quick Fix:</strong> ${ev.quickFix}
        </div>
      </div>
    `).join('');
  }

  const cultFilterBtns = document.querySelectorAll('.cult-filter-btn');
  const cultSearchInput = document.getElementById('cultural-search');
  let currentCultFilter = 'ALL';

  cultFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cultFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCultFilter = btn.dataset.filter;
      renderCulturalEvents(currentCultFilter, cultSearchInput ? cultSearchInput.value : '');
    });
  });

  if (cultSearchInput) {
    cultSearchInput.addEventListener('input', () => {
      renderCulturalEvents(currentCultFilter, cultSearchInput.value);
    });
  }

  // Render All 8 Sporting Events
  function renderSportsEvents() {
    const grid = document.getElementById('sports-events-grid');
    if (!grid) return;

    grid.innerHTML = data.sportsEvents.map(sp => `
      <div class="event-card tech-${sp.techLevel.toLowerCase()}">
        <div class="event-card-top">
          <span class="tech-badge level-${sp.techLevel.toLowerCase()}">${sp.techLevel} TECH</span>
          <span class="venue-badge">📍 ${sp.venue}</span>
        </div>
        <h3 class="event-title">${sp.name}</h3>
        <div class="event-heads">👤 <strong>Heads:</strong> ${sp.heads}</div>
        <div class="sched-badge">🏅 ${sp.format}</div>
        <div class="event-hw-box">
          <strong>🔌 Sports Tech &amp; Scoreboard Gear:</strong>
          <div class="hw-plain-text">${sp.hardware}</div>
        </div>
        <div class="event-steps-box">
          <strong>🛠️ Setup &amp; Repair Protocol:</strong>
          <ul>
            ${sp.setupAndRepair.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // Render Emergency Fix-It Wizard & Volunteer Packing Kit
  function renderEmergencyFixes(search = '') {
    const container = document.getElementById('emergency-fixes-grid');
    if (!container) return;

    const q = search.trim().toLowerCase();
    const list = data.emergencyFixes.filter(f =>
      !q ||
      f.symptom.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q) ||
      f.cause.toLowerCase().includes(q) ||
      f.steps.join(' ').toLowerCase().includes(q)
    );

    container.innerHTML = list.map(f => `
      <div class="panic-card">
        <div class="panic-cat">${f.category}</div>
        <h4 class="panic-symptom">🚨 "${f.symptom}"</h4>
        <div class="panic-cause"><strong>Cause:</strong> ${f.cause}</div>
        <ol class="panic-steps">
          ${f.steps.map(st => `<li>${st}</li>`).join('')}
        </ol>
      </div>
    `).join('');
  }

  function renderPackingList() {
    const packGrid = document.getElementById('volunteer-pack-grid');
    if (!packGrid) return;

    const items = [
      { id: 'sim-pin', cat: 'Pocket Lifesaver', name: 'SIM Ejector / Paperclip', desc: 'Presses the recessed reset pinhole on back of PS4 DualShock 4 (near L2 screw).' },
      { id: 'usb-drive', cat: 'Pocket Lifesaver', name: '32GB+ exFAT USB Flash Drive', desc: 'Pre-load VLC Media Player installer (.exe & .dmg) + backup slides/films.' },
      { id: 'micro-usb', cat: 'Respawn Cables', name: 'Micro-USB DATA Cable + USB-C Cable', desc: 'Pairs PS4 DualShock 4 & Xbox controllers instantly without batteries.' },
      { id: 'hdmi-cable', cat: 'Respawn & AV', name: 'Spare High-Speed HDMI Cable + USB-C Hub', desc: 'Fixes 80% of projector/monitor "No Signal" errors and connects MacBooks.' },
      { id: 'aux-dongle', cat: 'Stage Audio', name: '3.5mm Aux Cable + Phone Aux Dongle', desc: 'Connects laptops/phones (in Airplane Mode) to Amphitheatre & Auditorium mixers.' },
      { id: 'aa-batts', cat: 'Power & Tape', name: '4–6 AA Batteries + Electrical Tape + Marker', desc: 'For Xbox controllers, wireless stage mics, and taping over Xbox HDMI IN.' },
      { id: 'power-bank', cat: 'Power & Network', name: 'Power Bank (10,000mAh+) + Phone Hotspot', desc: 'Powers dead controllers mid-match and bypasses school Wi-Fi blocks.' },
      { id: 'sd-reader', cat: 'Media & ID', name: 'SD Card Reader + School Uniform & ID Card', desc: 'Fast photo ingestion for Through the Lens + mandatory campus accreditation.' }
    ];

    packGrid.innerHTML = items.map(it => `
      <label class="interactive-step pack-item">
        <input type="checkbox" class="persist-check" data-check-id="pack-${it.id}">
        <div class="step-body">
          <div class="pack-cat-tag">${it.cat}</div>
          <div class="step-title">${it.name}</div>
          <div class="step-detail">${it.desc}</div>
        </div>
      </label>
    `).join('');
  }

  const panicSearch = document.getElementById('panic-search');
  if (panicSearch) {
    panicSearch.addEventListener('input', () => renderEmergencyFixes(panicSearch.value));
  }

  // Restore & Save Checkboxes in LocalStorage
  function bindCheckboxes() {
    document.querySelectorAll('.persist-check').forEach(chk => {
      const key = `ignite_chk_${chk.dataset.checkId}`;
      chk.checked = localStorage.getItem(key) === '1';
      chk.addEventListener('change', () => {
        localStorage.setItem(key, chk.checked ? '1' : '0');
        updateChecklistProgress();
      });
    });
    updateChecklistProgress();
  }

  function updateChecklistProgress() {
    const all = document.querySelectorAll('.persist-check');
    const done = Array.from(all).filter(c => c.checked).length;
    const progEl = document.getElementById('readiness-progress-text');
    if (progEl && all.length > 0) {
      const pct = Math.round((done / all.length) * 100);
      progEl.textContent = `${done}/${all.length} Ready (${pct}%)`;
    }
  }

  renderRespawnPanel();
  renderVideoAndHardwarePanel();
  renderCulturalEvents();
  renderSportsEvents();
  renderEmergencyFixes();
  renderPackingList();
  bindCheckboxes();
});
