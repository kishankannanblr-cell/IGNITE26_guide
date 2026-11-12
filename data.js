window.IGNITE_DATA = {
  meta: {
    eventName: "IGNITE 2026",
    school: "Greenwood High International School, Chikkawadavalli, Varthur Sarjapur Road, Bangalore",
    dates: "Friday, 13 Nov & Saturday, 14 Nov 2026",
    mascot: "Scarlett the Phoenix",
    website: "https://gwhignite.in/",
    facultyInCharge: ["Ms. Saheli Gupta (Sahelig@greenwoodhigh.edu.in)", "Ms. Sowmya S (sowmyas@greenwoodhigh.edu.in)"],
    culturalHeads: ["Suhani Singh", "Koshika Goel"],
    sportsHeads: ["Hiba Gabriel", "Rishabh Kamani", "Akshita Rai", "Nivaan Abraham"],
    ceremonies: [
      {
        name: "Opening Ceremony",
        time: "Day 1 (Fri, 13 Nov) · 08:30 AM – 09:15 AM",
        venue: "IB Amphitheatre",
        techFocus: "Main PA line array check, 4 wireless handheld mics (fresh AA batteries), podium mic, walk-on ceremonial audio track, LED backdrop/projector."
      },
      {
        name: "Valedictory & Awards Ceremony",
        time: "Day 2 (Sat, 14 Nov) · 02:45 PM – 03:30 PM",
        venue: "IB Amphitheatre (Rain Backup: ICSE Old Auditorium)",
        techFocus: "Winner slides HDMI feed, drumroll/fanfare audio stingers on laptop (Airplane mode ON), 2 wireless mics for emcees."
      }
    ]
  },

  respawnGuide: {
    overview: {
      title: "RESPAWN — Flagship E-Sports Tournament",
      venue: "Senior IT Lab 1 & Senior IT Lab 2",
      schedule: "Day 1: 09:30 AM – 03:00 PM | Day 2: 09:00 AM – 01:30 PM",
      eventHeads: "Vivaan Srivastava, Arpit Kumar & Tabashmi Bhattacharya",
      games: [
        {
          name: "EA Sports FC / FIFA (Xbox & PS4 + PC)",
          format: "1v1 Solo Knockout Bracket · Random Club Draw assigned before each knockout round",
          techSummary: "Console HDMI to low-latency monitor/TV, 2 synced controllers per station (Player 1 + Guest profile), Offline Kick-Off mode ready after squad update."
        },
        {
          name: "Minecraft (Squad of 4 Co-op)",
          format: "4-Player Squads · 5 Custom Mini-Game Challenges (Survival trials, Parkour, Obstacle courses, Tactical building)",
          techSummary: "4 participant laptops on same wired LAN switch or non-isolated 5GHz VLAN. Local server IP static binding + Windows Firewall javaw.exe allowed."
        },
        {
          name: "Roblox (Solo Time-Trial & Game Design)",
          format: "Day 1: Precision Checkpoint Obby Time-Trial Runs · Day 2: Creative Runway / Game Design Showcase",
          techSummary: "Internet access required (UDP ports 49152–65535 open). Connect to 5GHz Wi-Fi or Ethernet for <40ms ping; projector HDMI ready on Day 2 for Showcase."
        }
      ]
    },

    consoles: {
      xbox: {
        name: "Xbox Setup & Repair (Xbox One / Xbox Series S|X)",
        badge: "Active Console",
        videoId: "xbox-setup",
        youtubeQuery: "https://www.youtube.com/results?search_query=how+to+set+up+xbox+one+series+x+hdmi+sync+controller",
        youtubeEmbedId: "twu8_oACN9E",
        steps: [
          {
            step: "1. Power & Surge Strip Setup",
            detail: "Plug the Figure-8 (C7) power cord firmly into the back of the Xbox until it clicks. Plug into a surge-protected power strip or lab UPS socket. Keep at least 15 cm of open airflow around the top/side exhaust vents—never stack a laptop or box on top of the Xbox."
          },
          {
            step: "2. The #1 HDMI Port Trap (HDMI OUT vs HDMI IN)",
            detail: "Look carefully at the back of the Xbox. Xbox One consoles have TWO HDMI ports: 'HDMI OUT TO TV' and 'HDMI IN FROM SAT/CABLE'. You MUST plug your HDMI cable into 'HDMI OUT TO TV'. Connect the other end to the Monitor/TV HDMI 1 port, and switch the monitor input to HDMI 1 (enable 'Game Mode' on the display for zero input lag)."
          },
          {
            step: "3. Syncing 2 Wireless Controllers (Fast 20-Second Method)",
            detail: "Insert 2 fresh AA batteries into each Xbox controller and hold the glowing Center Xbox Button to turn it on. Press the small circular PAIR/SYNC button on the console (front-right above USB on Series X, front-left on Series S/One S, or left side near disc slot on original Xbox One). Within 20 seconds, hold the small Pair button on the TOP EDGE of the controller (between LB and RB) until the Xbox logo flashes rapidly, then stays solid."
          },
          {
            step: "4. Instant Wired Controller Fallback (Zero Battery / Zero Interference)",
            detail: "In a noisy computer lab with 40+ Bluetooth devices, wireless controllers can lag or batteries can die mid-match. Keep 2 long Micro-USB (Xbox One) or USB-C (Series X/S) data cables plugged into the front/back USB ports. Plugging a cable into any controller immediately pairs it and powers it without batteries!"
          },
          {
            step: "5. Wi-Fi & Pre-Match Network Lock (Your Wi-Fi Superpower)",
            detail: "Go to Settings > General > Network Settings > Set up wireless network (5GHz band preferred). If school Wi-Fi has a captive login page, open Microsoft Edge on Xbox to sign in, OR connect Xbox to your phone hotspot for 2 minutes to authenticate EA FC squad updates. CRITICAL: Once FIFA loads to the main menu, go to Settings > System > Updates and UNCHECK 'Keep my games & apps up to date' so a 30GB update never interrupts a match!"
          },
          {
            step: "6. Launching EA Sports FC / FIFA 1v1 Local Match (Guest Profile Rule)",
            detail: "Turn on Controller 1 (logged into primary Xbox profile). Turn on Controller 2 -> Press the Xbox Guide button -> Navigate right to 'Profile & System' -> Select 'Add or switch' -> Scroll down and click 'Add guest'. This creates 'Gamertag(1)'. Now enter Play > Kick Off > Classic Match, move Controller 1 left and Controller 2 right, and run the random club draw!"
          }
        ],
        repairs: [
          {
            symptom: "Monitor says 'No Signal' even though Xbox white light is ON",
            fix: "1) Check back of Xbox: make sure cable is in 'HDMI OUT TO TV', not 'HDMI IN'. 2) Low-Res Video Reset: Hold the EJECT button (or Pair button on Series S) + POWER button together for 10 seconds until you hear TWO beeps. This forces 640x480 safe output so any monitor can display it, then set 1080p in Settings."
          },
          {
            symptom: "Controller blinks twice and turns off immediately",
            fix: "Dead AA batteries! Don't hunt for batteries during a match—grab a Micro-USB / USB-C cable and plug the controller directly into the Xbox USB port."
          },
          {
            symptom: "EA FC / FIFA freezes on 'Connecting to EA Servers' at launch",
            fix: "School firewall is blocking EA telemetry. Go to Xbox Settings > General > Network Settings > Hit 'Go Offline'. Return to FIFA—it will immediately bypass server checks and go straight to Local Kick-Off mode!"
          }
        ]
      },

      ps4: {
        name: "PS4 Setup & Repair (Arriving Tomorrow for Respawn)",
        badge: "Arriving Tomorrow",
        videoId: "ps4-setup",
        youtubeQuery: "https://www.youtube.com/results?search_query=how+to+set+up+ps4+connect+hdmi+pair+dualshock+4+controller",
        youtubeEmbedId: "tvbJ9L3c9X8",
        steps: [
          {
            step: "1. Power & HDMI Connection",
            detail: "Plug the Figure-8 AC power cord into 'AC IN' on the PS4 rear panel and into the surge protector. Plug a high-speed HDMI cable into the PS4 'HDMI OUT' port and into the Monitor/TV. Note: PS4 HDMI ports are sensitive—always insert straight without wiggling."
          },
          {
            step: "2. Power On & Light Bar Color Codes",
            detail: "Press the physical Power button on the front of the PS4 (one beep). The light strip will glow BLUE first (booting up), then turn SOLID WHITE (HDMI handshake succeeded, signal is on screen). Note: Pulsing ORANGE means it's in Rest Mode."
          },
          {
            step: "3. Pairing DualShock 4 Controllers (USB Method vs Bluetooth Strobe Method)",
            detail: "Method A (Easiest): Plug the DualShock 4 into the PS4 front USB port using a Micro-USB DATA cable (many cheap power-bank cables have no data wires!) and press the center PS button. Method B (Wireless Bluetooth): Hold down SHARE + PS Button together for 4 seconds until the controller light bar flashes rapid white double-blinks. Using an already connected controller (or USB keyboard), go to Settings > Devices > Bluetooth Devices and click the flashing 'DUALSHOCK 4'."
          },
          {
            step: "4. CRITICAL: How to Add Player 2 in PS4 FIFA Without Kicking Out Player 1!",
            detail: "This is the #1 PS4 tournament mistake! When Player 1 is on the dashboard (Blue light bar), turn on Controller 2 by pressing the PS button. A 'Who is using this controller?' screen pops up. DO NOT select Player 1's profile (that steals Controller 1!). Instead, scroll left to '+ New User' -> Select 'Play as a Guest' -> Select 'Do Not Sign In'. Controller 2's light bar will turn RED, and both controllers will work in FIFA Kick-Off!"
          },
          {
            step: "5. Wi-Fi & Disabling HDCP / Auto-Downloads",
            detail: "Go to Settings > Network > Set Up Internet Connection > Use Wi-Fi > Easy. Once FIFA is updated and tested, go to Settings > System > Automatic Downloads and UNCHECK everything. Also go to Settings > System and UNCHECK 'Enable HDCP' if you are splitting the PS4 screen to a projector or capture card."
          }
        ],
        repairs: [
          {
            symptom: "PS4 Controller flashes white once/twice or glows orange and won't connect",
            fix: "Flip the DualShock 4 controller over. Next to the top-right screw (near the L2 shoulder button), there is a tiny recessed pinhole. Push a straightened paperclip inside and hold the button for 5 seconds to hard-reset the controller's Bluetooth chip. Then connect via Micro-USB cable and press the PS button."
          },
          {
            symptom: "PS4 light is Solid White, but Monitor says 'Out of Range' or Black Screen",
            fix: "PS4 is set to 4K or 1080p Deep Color on a monitor that only supports standard 1080p/720p. Boot into PS4 SAFE MODE: Turn PS4 completely off. Press and HOLD the Power button on the console—it beeps once immediately; keep holding for 7 seconds until you hear a SECOND beep, then release. Plug controller in via USB and select Option 2: 'Change Resolution'."
          },
          {
            symptom: "Game disc won't insert or PS4 keeps beeping and ejecting disc",
            fix: "Tighten the manual eject screw or unplug the PS4 power cord completely from the wall for 60 seconds (drains static charge on the capacitive eject button), place the front edge of the PS4 slightly overhanging the desk so the rubber foot doesn't press the eject sensor, and power back on."
          }
        ]
      },

      pcNetwork: {
        name: "IT Lab PC, Minecraft LAN & Roblox Wi-Fi Setup",
        badge: "Your Wi-Fi Specialty",
        videoId: "lan-setup",
        youtubeQuery: "https://www.youtube.com/results?search_query=minecraft+lan+not+working+windows+firewall+fix+tutorial",
        youtubeEmbedId: "7p0R4aH8E0w",
        steps: [
          {
            step: "1. Minecraft 4-Player Co-Op LAN Setup (Senior IT Lab 1 & 2)",
            detail: "All 4 squad members must be on the exact same subnet (e.g., 192.168.1.x) with AP Client Isolation OFF (or plugged into the same unmanaged Gigabit Ethernet switch). On the Host PC, open the custom challenge map -> Esc -> 'Open to LAN' -> Note the 5-digit Port number printed in chat (e.g., 54321)."
          },
          {
            step: "2. Fixing 'Minecraft LAN World Not Showing Up' in 15 Seconds",
            detail: "Never wait for automatic multicast discovery on school networks! On the Host PC, open Command Prompt and type `ipconfig` to get its IPv4 address (e.g., `192.168.1.45`). On the other 3 laptops, go to Multiplayer > 'Direct Connection' and type `192.168.1.45:54321` (IP + colon + LAN port). Works 100% of the time!"
          },
          {
            step: "3. Windows Firewall Fix for Minecraft (`javaw.exe`)",
            detail: "If Direct Connection gives 'Connection Timed Out', press Windows Key -> type 'Allow an app through Windows Firewall' on the Host PC -> Find all entries named `Java(TM) Platform SE binary` or `javaw.exe` -> Check BOTH 'Private' and 'Public' boxes!"
          },
          {
            step: "4. Roblox Obby Time-Trial & Day 2 Showcase Optimization",
            detail: "Roblox requires live internet connectivity (UDP ports 49152–65535). Put Roblox players on the 5GHz Wi-Fi SSID or wired lab Ethernet so packet loss doesn't ruin checkpoint jumps. Set Windows Power Plan to 'High Performance' and ensure gaming laptops are plugged into AC chargers (laptops throttle GPU FPS by 60% on battery!)."
          }
        ],
        repairs: [
          {
            symptom: "Participant's gaming laptop has 15 FPS in Minecraft / Roblox",
            fix: "1) Check charger brick—plug it in securely! 2) Ensure Minecraft/Roblox is running on the Dedicated NVIDIA/AMD GPU (Windows Settings > System > Display > Graphics > Set Minecraft/javaw.exe to 'High Performance GPU')."
          },
          {
            symptom: "School Wi-Fi disconnects or shows 'No Internet, Secured' under load",
            fix: "DHCP pool exhaustion or DNS stall. Manually set IPv4 DNS to `1.1.1.1` and `8.8.8.8`, or bind an unmanaged 8-port Ethernet switch to the lab wall jack for the active competing squad."
          }
        ]
      }
    }
  },

  culturalEvents: [
    {
      id: "respawn",
      name: "1. Respawn (E-Sports Tournament)",
      category: "Strategy & Logic · Flagship Tech",
      techLevel: "CRITICAL",
      schedule: "Day 1: 09:30 AM – 03:00 PM | Day 2: 09:00 AM – 01:30 PM",
      venue: "Senior IT Lab 1 & 2",
      heads: "Vivaan Srivastava, Arpit Kumar & Tabashmi Bhattacharya",
      summary: "EA Sports FC / FIFA (1v1 knockout with random club draw on Xbox/PS4/PC), Minecraft (4-player squad co-op across 5 custom mini-games), and Roblox (Day 1 checkpoint obby time-trials; Day 2 game design showcase).",
      hardwareList: ["Xbox Console + 2 Controllers + HDMI + AA Batteries/USB-C cables", "PS4 Console + 2 DualShock 4 Controllers + HDMI + Micro-USB Data cables", "Gigabit LAN Switch + Cat6 Patch Cables", "Power Strips / UPS Extensions (6-amp & 16-amp)", "Projector / Master Bracket Monitor"],
      setupSteps: [
        "Set up Xbox & PS4 stations using HDMI OUT to monitors in Game Mode.",
        "Pair 2 controllers per console and configure Player 2 as Guest (`Add guest` on Xbox; `New User > Play as Guest` on PS4).",
        "Disable Automatic Updates on both consoles after verifying FIFA rosters.",
        "Configure Minecraft Host PC static IP and whitelist `javaw.exe` on Private + Public Windows Firewall."
      ],
      quickFix: "FIFA stuck on server check? Switch console to Offline Mode. Minecraft LAN invisible? Use `ipconfig` + Direct Connect `IP:Port`."
    },
    {
      id: "battle-of-the-bands",
      name: "2. Battle of the Bands",
      category: "Performing Arts · Live Sound & Stage Tech",
      techLevel: "CRITICAL",
      schedule: "Day 1 Showcase: 10:00 AM – 02:00 PM | Day 2 Finals: 09:30 AM – 01:00 PM",
      venue: "IB Amphitheatre Main Stage (Backup: ICSE Old Auditorium)",
      heads: "Srisha Suresh, Mihir Kulkarni & Krithick Satish",
      summary: "12–15 school bands (2–7 members). School supplies 5-piece acoustic drum kit, stage digital piano, guitar/bass amps, stage monitors, and dynamic vocal mics. Bands bring guitars, bass, pedalboards & instrument cables.",
      hardwareList: ["Main PA Mixing Console (12–24 Channel)", "Dynamic Vocal Mics (Shure SM58) + XLR Cables + Stands", "5-Piece Drum Mic Kit + Guitar/Bass Combos", "Stage Digital Piano + 2x Passive DI Boxes", "Stage Floor Wedge Monitors (AUX 1 & AUX 2)", "9V DC Pedalboard Power Supply Backup & 1/4-inch TS Jack Cables"],
      setupSteps: [
        "Follow the GOLDEN POWER RULE: Turn ON instruments/pedals first -> Mixer second -> Main PA & Monitor Speakers LAST. (When muting/unplugging between bands, ALWAYS press Channel MUTE on the mixer first so it doesn't pop!)",
        "Place vocal microphones BEHIND the front line of the main PA speakers, pointing away from floor monitors.",
        "Run the Stage Digital Piano & Bass/Acoustic guitars into a DI Box (1/4\" Input) -> XLR cable from DI Box to Mixer.",
        "During 3-minute changeover between bands: MUTE all guitar/DI channels before bands unplug their 1/4\" guitar cables!"
      ],
      quickFix: "Loud 50Hz/60Hz hum from guitar/keyboard? Flip the 'GROUND LIFT' switch on the DI Box. High-pitched squealing feedback? Pull down the AUX Monitor send or cut 2.5kHz–4kHz on the vocal channel EQ."
    },
    {
      id: "wolf-of-wall-street",
      name: "3. Wolf of Wall Street (Trading Sim & Shark Tank)",
      category: "Strategy & Logic · AV & High-Density Wi-Fi",
      techLevel: "HIGH",
      schedule: "Day 1: 10:00 AM – 02:30 PM | Day 2: 09:30 AM – 01:00 PM",
      venue: "AV Room 1 / Business Hub",
      heads: "Sara Partiban & Manusri Devineni",
      summary: "Real-time simulated stock auction bidding wars, breaking news flashes, and Shark Tank IPO venture pitches. Teams bring laptops with spreadsheet software.",
      hardwareList: ["AV Room Projector + HDMI Switcher (2-in-1-out)", "USB-C to HDMI Multiport Adapter (for MacBooks/modern laptops)", "Master Market Ticker Laptop", "PA Speaker + 2 Wireless Handheld Mics for Pitches & Auctioneer", "Dedicated Wi-Fi AP / Mobile Hotspot Backup"],
      setupSteps: [
        "Set the Organizer's Master Market Laptop to EXTEND mode (`Windows Key + P` -> `Extend`). Drag the live stock ticker / news video window onto the Projector screen while keeping the secret price-control spreadsheet on the laptop screen!",
        "Set laptop power sleep settings to 'Never' when plugged in (`Power & Sleep > Never`).",
        "Keep a second HDMI cable (or HDMI switcher) ready at the podium so Shark Tank pitch teams can plug in their laptops in 5 seconds.",
        "Have teams pre-load pitch decks onto a backup USB drive in case a participant's laptop refuses to handshake with the projector."
      ],
      quickFix: "Projector shows 'No Signal' on a team's laptop? Press `Win + P` -> Duplicate, and lower laptop display resolution to `1920x1080` (60Hz)."
    },
    {
      id: "directors-cut",
      name: "4. Director's Cut (Theatre & Short Film Production)",
      category: "Performing Arts & Media · Auditorium Screening Tech",
      techLevel: "CRITICAL",
      schedule: "Day 1 (Theatre): 10:00 AM – 01:30 PM | Day 2 (Film Screening): 10:00 AM – 01:30 PM",
      venue: "ICSE Auditorium & Media Lab",
      heads: "Lavya Sen & Navaneeth Sreenath",
      summary: "Day 1: Live theatrical performance + improv round (stage lighting & mics). Day 2: Screening and critique of original 3–7 minute short films.",
      hardwareList: ["Auditorium Projector + HDMI Run", "Master Screening Laptop with VLC Media Player Installed", "3.5mm TRS to Dual 1/4\" TS / Stereo DI Box into Auditorium Audio Mixer", "Stage Boundary/Footlight Mics & 3 Wireless Mics (Day 1)", "Stage Lighting Control Board"],
      setupSteps: [
        "NEVER screen films directly off 10 different student laptops—collect all Day 2 short films (MP4/MOV) onto the Master Screening Laptop 30 minutes before 10:00 AM and test each file in VLC Media Player!",
        "CRITICAL AUDIO ROUTING: Do not let Windows send film audio to the tiny speaker inside the ceiling projector! Plug a 3.5mm audio cable (or USB audio interface) from the Screening Laptop into the Auditorium Sound Mixer, and select 'Headphones / External Audio' in Windows Sound Output.",
        "Turn ON 'Do Not Disturb / Focus Assist' and Airplane Mode on the screening laptop before starting films."
      ],
      quickFix: "Film video plays on screen, but no sound in the auditorium? Click the Speaker icon on Windows taskbar -> switch output device from 'Projector HDMI Audio' back to 'Headphones / Realtek Audio Out' (connected to the auditorium mixer)."
    },
    {
      id: "insync",
      name: "5. Insync (Western & Street Dance Showdown)",
      category: "Performing Arts · High-SPL Audio Playback",
      techLevel: "HIGH",
      schedule: "Day 1 Heats: 10:30 AM – 02:30 PM | Day 2 Finals: 10:00 AM – 01:30 PM",
      venue: "Main Stage / IB Amphitheatre",
      heads: "Divija Attaluri & Akshata Naveen",
      summary: "High-energy Western, Hip-Hop, and Contemporary crew & solo dance heats and finals. Pre-submitted audio tracks + USB backup.",
      hardwareList: ["Main Stage PA System + Subwoofers", "Dedicated Audio Playback Laptop (VLC / Foobar2000)", "USB Drive Backup Station", "3.5mm / USB DAC to Mixer Stereo Channel"],
      setupSteps: [
        "Organize all submitted MP3/WAV dance tracks into folders `Day1_Heats` and `Day2_Finals`, named by performance order (`01_SchoolName.mp3`, `02_SchoolName.mp3`).",
        "In VLC Media Player, enable 'Pause on the last frame of a video/track' or put each track in single-play mode so Track #2 doesn't accidentally auto-play while Crew #1 is bowing on stage!",
        "Keep a USB-C / Lightning to 3.5mm Aux dongle at the sound desk in case a crew brings an emergency updated track on their phone (put phone in AIRPLANE MODE before plugging into PA!)."
      ],
      quickFix: "Music sounds thin or only comes out of one side of the stage? The 3.5mm Aux plug is half-pulled out by a phone case, or two stereo channels on the mixer are panned together canceling phase—remove the phone case and pan Left channel hard L, Right channel hard R."
    },
    {
      id: "pitch-perfect",
      name: "6. Pitch Perfect (Solo Western Vocals)",
      category: "Performing Arts · Acoustic & Backing Track Audio",
      techLevel: "HIGH",
      schedule: "Day 1 Only: 10:00 AM – 01:30 PM",
      venue: "Music Room 1 & Acoustic Stage",
      heads: "Mahira Karan & Shivansi Gudla",
      summary: "Round 1: Acoustic / unaccompanied vocals. Round 2: Advanced vocal showdown with backing tracks.",
      hardwareList: ["Cardioid Vocal Microphone (Shure SM58) + Boom Stand", "Small PA Mixer (with built-in Reverb FX)", "2 Powered PA Speakers + 1 Vocal Floor Monitor", "Laptop for Round 2 Backing Tracks"],
      setupSteps: [
        "Set vocal mic gain properly during soundcheck: have singer sing their loudest chorus note and adjust GAIN knob so peak LED flashes green/yellow, never red.",
        "Add a touch of Hall/Plate Reverb FX on the vocal channel for warmth, and mute the FX when emcees are talking.",
        "For Round 2, balance the backing track stereo fader slightly below the live vocal channel so the singer isn't drowned out."
      ],
      quickFix: "Singer sounds muffled or popping on 'P' and 'B' sounds? Press the '80Hz / 100Hz Low-Cut (High-Pass Filter)' button on the mixer's vocal channel."
    },
    {
      id: "through-the-lens",
      name: "7. Through the Lens (Photography & Media)",
      category: "Visual Arts & Media · Card Ingestion & Judging Display",
      techLevel: "MEDIUM",
      schedule: "Day 1: 09:30 AM – 02:30 PM | Day 2: 09:00 AM – 01:30 PM",
      venue: "Media Center & Campus Grounds",
      heads: "Siddharth Venkatesh & Anvitha Bakshi",
      summary: "3 rounds: (1) Candid Portraits, (2) High-Speed Sports Action, (3) Stage Performance. Strictly DSLR/Mirrorless only (smartphones disqualified).",
      hardwareList: ["3x Multi-Card Readers (SDXC, MicroSD, CFexpress Type A/B)", "Media Center Ingestion PCs", "Color-Accurate Judging Monitor / Projector"],
      setupSteps: [
        "Create pre-labeled submission folders per participant code on the Media Center master PC.",
        "Remind photographers at 09:30 AM briefing to format/clear their SD cards and verify their camera's internal Date/Time clock.",
        "When copying photos from SD cards, always COPY-PASTE (never Cut-Paste) and use 'Safely Eject Hardware' so RAW/JPEG files never corrupt."
      ],
      quickFix: "Judge wants to verify a photo wasn't taken on an iPhone or before the event? Right-click image -> Properties -> Details tab -> Check 'Camera Maker / Camera Model' and 'Date Taken' EXIF metadata!"
    },
    {
      id: "dress-to-impress",
      name: "8. Dress to Impress (Fashion Show & Sustainable Design)",
      category: "Visual Arts · Runway Audio & Mic Tech",
      techLevel: "HIGH",
      schedule: "Day 1: 11:00 AM – 02:00 PM | Day 2: 11:00 AM – 01:30 PM",
      venue: "Senior Quad Runway",
      heads: "Sayesha Dod, Bhaavika Vukku & Ananya Pandey",
      summary: "7-minute runway walk + live concept defence to judges. Round 1: 'Reforged' (40% upcycled mythological attire). Round 2: 'Legacy, Reworn'.",
      hardwareList: ["Outdoor PA System at Senior Quad", "Runway Audio Laptop", "2 Wireless Handheld Mics (for Concept Defence & Judges)"],
      setupSteps: [
        "Tape down all speaker and power cables crossing the Senior Quad walkway using heavy-duty gaffer/duct tape so models in elaborate outfits cannot trip!",
        "Keep the wireless handheld mic muted on the mixer during the runway walk, then smoothly fade down the runway music and unmute the mic for the Concept Defence."
      ],
      quickFix: "Wireless mic cuts out while model is explaining their outfit on the runway? Walk the wireless receiver unit closer to the edge of the runway with its antennas angled at 45 degrees (line-of-sight)."
    },
    {
      id: "veritas",
      name: "9. Veritas (Escape Room Investigation)",
      category: "Strategy & Logic · Timer & Black-Box Tech",
      techLevel: "MEDIUM",
      schedule: "Rolling 1-hr slots · Day 1: 09:30 AM – 03:00 PM | Day 2: 09:00 AM – 02:00 PM",
      venue: "Multi-Purpose Hall (Black Box Setup)",
      heads: "Riddhi Kamani, Ishita De & Shreya Mathur",
      summary: "60-minute high-pressure physical escape room with logic locks, cryptic ciphers, and puzzles.",
      hardwareList: ["Wall-Mounted 60:00 Countdown Display Monitor + Laptop", "Bluetooth/Aux Speaker for Suspense Audio & Hint Chimes", "UV Blacklights & Power Strips"],
      setupSteps: [
        "Set the Countdown Timer laptop to Fullscreen (`F11`) and disable screensaver/sleep.",
        "Keep a walkie-talkie or phone intercom channel open between the Game Master inside the Black Box and the Tech Desk outside."
      ],
      quickFix: "Countdown screen turns off after 15 minutes? Open Windows Command Prompt and run `powercfg /change monitor-timeout-ac 0`."
    },
    {
      id: "dyed-in-crimson",
      name: "10. Dyed in Crimson (Campus-Wide Murder Mystery / ARG)",
      category: "Strategy & Logic · QR/Web Ciphers & Briefing PA",
      techLevel: "MEDIUM",
      schedule: "Day 1: 10:00 AM – 02:30 PM | Day 2: 09:30 AM – 01:30 PM",
      venue: "High School Quad & Campus Wide",
      heads: "Eric Leene, Niyati Kasu & Charanjit Harshvardhan",
      summary: "~80 teams solving forensic evidence, cipher decryption, actor interrogations, and digital dossier submissions.",
      hardwareList: ["Portable PA / Megaphone at High School Quad", "QR Clue / Digital Dossier Submission Form Links", "Charging Station at Base Table"],
      setupSteps: [
        "Test all digital cipher links and Google/Microsoft Form submission QR codes on BOTH school Wi-Fi and mobile data (Jio/Airtel) before 10:00 AM.",
        "Keep a 6-socket power strip at the High School Quad headquarters desk so investigating teams with dying phone batteries can top up."
      ],
      quickFix: "A team's phone can't load the final dossier submission form? Turn on a volunteer's Mobile Hotspot or let them submit on the HQ backup laptop."
    },
    {
      id: "radioshack-games",
      name: "11. Radioshack Games (Arcade & Skill Arena)",
      category: "Strategy & Logic · Live Leaderboard & Timer Tech",
      techLevel: "MEDIUM",
      schedule: "Drop-in Both Days: 10:00 AM – 02:30 PM",
      venue: "Student Activity Center / Central Lawns",
      heads: "Nimrit Kaur & Reina Chatterjee",
      summary: "Cup Pong, Cup Stack Speed Race, and Trivia Bottle Flip with real-time leaderboard tracking.",
      hardwareList: ["High-Brightness TV/Monitor for Real-Time Leaderboard", "Digital Speed-Stacking Timer / Stopwatch Tablet", "Portable Bluetooth Party Speaker"],
      setupSteps: [
        "Position the Leaderboard TV in a shaded spot under the tent canopy (direct sunlight washes out LCD screens) and boost brightness to 100%.",
        "Use a Google Sheet or local leaderboard dashboard with auto-sort enabled."
      ],
      quickFix: "Digital timer mat unresponsive? Reseat the 2.5mm/USB sensor plug or switch immediately to the backup tablet millisecond stopwatch app."
    },
    {
      id: "kryptos-visos",
      name: "12. Kryptos Visos (Face & Body Art)",
      category: "Visual Arts · Countdown & Reveal Tech",
      techLevel: "LOW",
      schedule: "Day 1: 10:30 AM – 01:30 PM | Day 2: 10:00 AM – 01:00 PM",
      venue: "Art Studio 1 & 2",
      heads: "Arohi Tiwari & Deeksha Nalluri",
      summary: "Day 1 pre-announced theme; Day 2 surprise theme revealed 10 minutes prior to timer.",
      hardwareList: ["Smartboard / Projector in Art Studio for Surprise Theme Reveal & Countdown Timer", "Ambient Background Music Speaker"],
      setupSteps: [
        "Load Day 2's surprise theme slide onto the Art Studio Smartboard at 09:45 AM with the screen blanked (`B` key in PowerPoint) until the 10-minute prep bell."
      ],
      quickFix: "Smartboard touch unresponsive? Use the connected wireless mouse/keyboard at the teacher desk."
    }
  ],

  sportsEvents: [
    {
      id: "basketball",
      name: "1. Basketball (Boys & Girls)",
      venue: "Indoor Sports Complex (Hardwood Court)",
      heads: "Sagar Simha & Asmi Nigam",
      format: "FIBA Knockout · Four 10-min quarters · 5-min OT",
      techLevel: "CRITICAL",
      hardware: "Electronic Wall/Tabletop Scoreboard + 24s/14s Shot Clock Console + Siren Horn + Court PA",
      setupAndRepair: [
        "SETUP: Connect the main Scoreboard Controller console at the scorer's table first, then link the two baseline 24-second Shot Clock displays via their data/DIN cables before powering on.",
        "FIBA SHOT CLOCK RULE: Test the 24-second reset button AND the 14-second offensive rebound reset button before tip-off.",
        "REPAIR: If one baseline shot clock freezes or displays garbled digits, turn off the main console for 5 seconds, push the 4-pin/XLR data connector firmly into the back of the shot clock unit, and reboot. Always keep a manual tabletop flip-scoreboard + air horn + stopwatch at the scorer's desk as mandatory FIBA backup!"
      ]
    },
    {
      id: "shooting",
      name: "2. Shooting (10m Air Rifle & 10m Air Pistol)",
      venue: "Indoor 10m Shooting Range",
      heads: "Kashvi Mahesh & Sasha Roshan",
      format: "ISSF Rules · 15-min Sighting + 30 Shots in 45 mins · Top 8 Olympic Elimination Final",
      techLevel: "CRITICAL",
      hardware: "Electronic Scoring Targets (or Motorized Paper Target Pulleys) + Lane Monitors + Central Range Server + RSO PA Mic + 45-Min Master Clock",
      setupAndRepair: [
        "SETUP: Power on the Central Range Server PC first, then the lane network switch, and finally the individual firing-point monitors and target frames (SIUS/Meyton/Electro-optical sensors).",
        "OLYMPIC FINAL AUDIO/TIMING: For the Top 8 Elimination Final, set up the Range Safety Officer's (RSO) microphone and countdown timer (50s / 25s command windows).",
        "REPAIR: If a shooter's lane monitor fails to register a shot or shows 'Target Offline', do NOT walk downrange! Notify the Range Safety Officer immediately; reseat the RJ45/RS485 data plug under the shooter's bench or switch the shooter to the designated Spare Firing Lane."
      ]
    },
    {
      id: "football",
      name: "3. Football (Boys 11v11 & Girls 7v7)",
      venue: "FIFA-Standard AstroTurf Pitch (Under Floodlights)",
      heads: "Aarav Kohle & Atharva Limaye",
      format: "Knockout · Boys 25-min halves / Girls 20-min halves (5-min HT) · 5-Penalty Shootout",
      techLevel: "HIGH",
      hardware: "Floodlight Breaker Panel + Weatherproof Outdoor PA System + Wireless Referee/Table Mic + LED Match Timer",
      setupAndRepair: [
        "SETUP: Coordinate with campus facilities electrical team at 04:30 PM to pre-warm high-mast AstroTurf floodlights (metal-halide/high-bay floodlights take 5–10 minutes to reach full brightness if tripped!).",
        "OUTDOOR PA: Position the portable battery/AC PA speaker under the scorer's canopy out of rain/dew, and keep the wireless mic antenna elevated above crowd level.",
        "REPAIR: If wireless mic cuts out across the 100m pitch, keep the mic within 25 meters of the receiver at the halfway line table."
      ]
    },
    {
      id: "flag-football",
      name: "4. Flag Football (Mixed 7v7 Non-Contact)",
      venue: "Open Gridiron Turf Field",
      heads: "Prithvi Gowda",
      format: "Four 12-min quarters (5-min HT) · 4 downs to cross midfield · TD=6, PAT=1 (5yd) or 2 (10yd)",
      techLevel: "MEDIUM",
      hardware: "Portable Digital Game Clock (12:00 quarters) + Down Indicator + Outdoor PA Horn",
      setupAndRepair: [
        "SETUP: Set the digital tabletop clock to 12:00 countdown mode and test the end-of-quarter horn.",
        "REPAIR: Keep an umbrella/shade cover over the tabletop LED timer so referees and players can read the clock in bright midday sun."
      ]
    },
    {
      id: "volleyball",
      name: "5. Volleyball (Boys & Girls)",
      venue: "Indoor Sports Complex Court 2",
      heads: "Preyasi Jignesh Vachhrajani & Aarav Gokul",
      format: "FIVB Knockout · Best of 3 Sets (25, 25, 15 pts · Win by 2)",
      techLevel: "MEDIUM",
      hardware: "Court 2 Digital Scoreboard + Scorer's Table Laptop (Bracket Sync) + Whistle/Buzzer",
      setupAndRepair: [
        "SETUP: Ensure Court 2's wireless scoreboard remote is paired to Channel 2 so it doesn't accidentally change the Basketball scoreboard on Court 1!",
        "REPAIR: If wireless remote lags, plug the 5V USB power cable directly into the remote controller."
      ]
    },
    {
      id: "badminton",
      name: "6. Badminton (Boys & Girls Team Ties)",
      venue: "Indoor Synthetic Badminton Courts (4-Court Complex)",
      heads: "Shashrik Ranjith",
      format: "BWF Knockout Team Ties (Singles 1, Singles 2, Deciding Doubles · 21-pt rally)",
      techLevel: "MEDIUM",
      hardware: "4-Court Live Tie Tracker Laptop + Court Announcement PA Mic",
      setupAndRepair: [
        "SETUP: Connect the central desk laptop to the shared Google Sheet / Live Bracket so results from Courts 1–4 update immediately.",
        "REPAIR: Keep the PA announcement speaker aimed away from active rally courts so sudden announcements don't startle players mid-smash."
      ]
    },
    {
      id: "table-tennis",
      name: "7. Table Tennis (Boys & Girls Team Ties)",
      venue: "Gymnasium / Indoor TT Arena",
      heads: "Shaurya Grover",
      format: "ITTF Knockout Ties (Singles 1, Doubles, Singles 2 · Best of 5 games to 11 pts)",
      techLevel: "LOW",
      hardware: "Gymnasium PA System + Digital Bracket Laptop + Flip Scoreboards",
      setupAndRepair: [
        "SETUP: Verify gymnasium overhead lighting has zero flicker and no draft/AC fan blowing directly across the tables (affects 2.7g celluloid/plastic ITTF balls!).",
        "REPAIR: If gymnasium AC fan blows balls off course, switch HVAC blowers to low/off during matches."
      ]
    },
    {
      id: "tennis",
      name: "8. Tennis (Boys & Girls Team Ties)",
      venue: "Outdoor Championship Hard Courts (Floodlit)",
      heads: "Vihaan Bhatt",
      format: "ITF Knockout Ties (Singles 1, Singles 2, Doubles · Prelims 6-game pro-set; Finals best of 3)",
      techLevel: "MEDIUM",
      hardware: "Court Floodlights + Portable PA Megaphone + Live Score Sheet Sync",
      setupAndRepair: [
        "SETUP: Test outdoor court floodlight breakers prior to late-afternoon ties and verify mobile Wi-Fi/4G coverage at the courtside desk for live bracket updates."
      ]
    }
  ],

  hardwareDiagrams: {
    xbox: {
      title: "Xbox Console (Rear & Front Ports)",
      subtitle: "Click any port below to see what cable goes there and how to avoid the #1 setup mistake",
      ports: [
        {
          id: "xbox-pwr",
          label: "AC Power In (Figure-8 C7)",
          x: 14, y: 55, w: 13, h: 24,
          color: "#f59e0b",
          cable: "Figure-8 (Non-Polarized C7) AC Power Cord",
          instruction: "Push firmly until completely seated. Connect to UPS or Surge Strip. Never wiggle while console is running.",
          mistake: "Loose plug causes sudden shutoff when desk vibrates."
        },
        {
          id: "xbox-hdmi-out",
          label: "HDMI OUT (TO TV)",
          x: 31, y: 55, w: 16, h: 24,
          color: "#10b981",
          cable: "High-Speed HDMI Cable -> Monitor/TV HDMI 1",
          instruction: "ALWAYS plug your monitor or TV HDMI cable HERE! This sends video & audio out of the Xbox.",
          mistake: "CRITICAL: Do NOT confuse this with the 'HDMI IN' port next to it!"
        },
        {
          id: "xbox-hdmi-in",
          label: "HDMI IN (DO NOT USE!)",
          x: 50, y: 55, w: 16, h: 24,
          color: "#ef4444",
          cable: "LEAVE EMPTY! (Pass-through input on Xbox One)",
          instruction: "Put a piece of tape over this port! Plugging a monitor here results in a permanent 'No Signal' black screen.",
          mistake: "#1 Volunteer Mistake: Plugging the TV into HDMI IN instead of HDMI OUT."
        },
        {
          id: "xbox-usb",
          label: "USB 3.0 Ports (Wired Controller)",
          x: 69, y: 55, w: 12, h: 24,
          color: "#3b82f6",
          cable: "USB-C or Micro-USB Data Cable -> Controller",
          instruction: "Plug any controller in here for instant zero-lag pairing without batteries!",
          mistake: "Using a power-only charging cable instead of a data sync cable."
        },
        {
          id: "xbox-lan",
          label: "Gigabit Ethernet (RJ45)",
          x: 84, y: 55, w: 11, h: 24,
          color: "#8b5cf6",
          cable: "Cat6 Ethernet Cable -> Senior IT Lab Switch",
          instruction: "Optional wired internet for initial FIFA squad update. Unplug or select 'Go Offline' once tournament starts.",
          mistake: "Leaving Auto-Updates enabled on slow Wi-Fi during matches."
        }
      ]
    },
    ps4: {
      title: "PlayStation 4 Console & DualShock 4",
      subtitle: "Click any port to inspect tomorrow's PS4 setup & controller reset points",
      ports: [
        {
          id: "ps4-pwr",
          label: "AC IN (Power Port)",
          x: 12, y: 55, w: 15, h: 24,
          color: "#f59e0b",
          cable: "Figure-8 AC Power Cord (or 3-pin IEC on PS4 Pro)",
          instruction: "Plug into AC IN first, then into the wall surge protector.",
          mistake: "Never unplug the AC cord while the PS4 light bar is pulsing Orange or White (corrupts hard drive!)."
        },
        {
          id: "ps4-hdmi",
          label: "HDMI OUT Port",
          x: 33, y: 55, w: 18, h: 24,
          color: "#10b981",
          cable: "HDMI Cable -> Monitor/Projector",
          instruction: "Insert straight and gently. If monitor shows black screen while PS4 light is solid white, hold Power 7s for Safe Mode > Change Resolution.",
          mistake: "Leaving HDCP enabled if routing through a splitter or capture card."
        },
        {
          id: "ps4-lan",
          label: "LAN Port (Ethernet)",
          x: 56, y: 55, w: 14, h: 24,
          color: "#8b5cf6",
          cable: "Cat6 Ethernet Cable",
          instruction: "Use for initial setup or keep on 5GHz Wi-Fi. Remember to turn OFF Automatic Downloads in Settings > System.",
          mistake: "Letting PS4 start a system firmware download mid-bracket."
        },
        {
          id: "ps4-usb",
          label: "Front USB Ports + DualShock Reset",
          x: 74, y: 55, w: 20, h: 24,
          color: "#3b82f6",
          cable: "Micro-USB DATA Cable -> DualShock 4 Controller",
          instruction: "Plug controller in via Micro-USB and press PS Button to pair. Remember: Player 2 MUST pick 'New User > Play as Guest'!",
          mistake: "Picking Player 1's user profile on Controller 2 kicks Controller 1 offline!"
        }
      ]
    },
    mixer: {
      title: "Stage PA Audio Mixer & DI Box (Battle of the Bands / Insync)",
      subtitle: "Click each section of the mixing console to master live sound in 60 seconds",
      ports: [
        {
          id: "mix-xlr",
          label: "1. Mic XLR Inputs & Gain Knob",
          x: 8, y: 55, w: 20, h: 26,
          color: "#ef4444",
          cable: "Balanced XLR Cable from Vocal Mics & DI Boxes",
          instruction: "Plug Shure SM58 mics & DI Box outputs here. Adjust top GAIN knob so loud singing flashes green/yellow, never RED clip!",
          mistake: "Turning up the bottom Fader when Gain is at zero, or turning on +48V Phantom Power when unplugging cables."
        },
        {
          id: "mix-eq",
          label: "2. 3-Band EQ & 80Hz Low-Cut",
          x: 31, y: 55, w: 20, h: 26,
          color: "#f59e0b",
          cable: "High (12kHz) · Mid (2.5kHz) · Low (80Hz)",
          instruction: "Keep knobs at 12 o'clock (Flat) to start! Press '80Hz Low Cut' on all vocal mics to remove stage footsteps and mic pops. If mic squeals, turn down MID/HIGH slightly.",
          mistake: "Boosting Highs and Gains on every mic—instant ear-piercing feedback!"
        },
        {
          id: "mix-aux",
          label: "3. AUX Sends (Stage Monitors)",
          x: 54, y: 55, w: 19, h: 26,
          color: "#3b82f6",
          cable: "1/4\" TRS or XLR Out -> Floor Wedge Monitors",
          instruction: "AUX 1 & AUX 2 control what the band hears on stage (independent of the main audience volume!).",
          mistake: "Putting too much vocal into the floor monitor right below the singer's mic."
        },
        {
          id: "mix-main",
          label: "4. Mute Button, Faders & Main L/R Out",
          x: 76, y: 55, w: 18, h: 26,
          color: "#10b981",
          cable: "Dual XLR Out -> Main Left & Right PA Speakers",
          instruction: "ALWAYS press the red MUTE button on a channel before unplugging any guitar, mic, or laptop cable! Remember: Speakers turn ON LAST and turn OFF FIRST.",
          mistake: "Unplugging a guitar or laptop Aux cable while the channel is unmuted—causes a deafening BOOM!"
        }
      ]
    },
    projector: {
      title: "Projector & Auditorium Screening Rig (Wolf of Wall Street / Director's Cut)",
      subtitle: "Click each block to see how video and audio must be separated in an auditorium",
      ports: [
        {
          id: "proj-laptop",
          label: "1. Laptop Video Out (Win+P)",
          x: 8, y: 55, w: 20, h: 26,
          color: "#3b82f6",
          cable: "HDMI Out (or USB-C to HDMI Adapter)",
          instruction: "Press `Windows Key + P` -> Select 'Duplicate' (for presentations/films) or 'Extend' (for Wolf of Wall Street live stock ticker). Set resolution to 1920x1080 @ 60Hz.",
          mistake: "Leaving laptop in 'PC Screen Only' or outputting 4K 120Hz to a 1080p projector."
        },
        {
          id: "proj-audio",
          label: "2. Laptop 3.5mm Audio Out -> PA Mixer",
          x: 32, y: 55, w: 22, h: 26,
          color: "#10b981",
          cable: "3.5mm TRS to Dual 1/4\" TS / DI Box -> Sound Mixer",
          instruction: "CRITICAL FOR DIRECTOR'S CUT: Plug the auditorium sound cable into the laptop's headphone jack, then click Windows Speaker Icon and select 'Headphones / Realtek Audio' (NOT HDMI Projector!).",
          mistake: "Letting Windows automatically switch audio to theHDMI cable—resulting in silent movies in the auditorium!"
        },
        {
          id: "proj-hdmi",
          label: "3. Projector HDMI 1 / HDMI 2 Input",
          x: 58, y: 55, w: 18, h: 26,
          color: "#f59e0b",
          cable: "Long HDMI Run / Active HDMI Extender",
          instruction: "Plug into HDMI 1 on the projector and press the 'Source / Input' button on the projector remote to select HDMI 1.",
          mistake: "Using a directional 'Active Fiber HDMI' cable backwards (`Source` end must go in Laptop, `Display` end in Projector!)."
        },
        {
          id: "proj-vlc",
          label: "4. VLC Player & Airplane Mode Check",
          x: 79, y: 55, w: 16, h: 26,
          color: "#8b5cf6",
          cable: "Software Pre-Flight Lock",
          instruction: "Play all short films in VLC Media Player (supports .mp4, .mov, .mkv, HEVC out of the box). Turn on Airplane Mode & disable sleep (`powercfg /change monitor-timeout-ac 0`).",
          mistake: "Using Windows Media Player which fails on Mac `.mov` files with 'Missing HEVC Codec' error."
        }
      ]
    }
  },

  emergencyFixes: [
    {
      id: "fix-ps4-p2",
      category: "Respawn (PS4)",
      symptom: "PS4 Controller 2 turns on, logs in, and immediately turns OFF Controller 1!",
      cause: "Both controllers selected the same PS4 User Profile.",
      steps: [
        "Press the PS button on Controller 2.",
        "On the 'Who is using this controller?' screen, scroll all the way LEFT to '+ New User'.",
        "Select 'Play as a Guest' -> 'Do Not Sign In'. Controller 2 light bar turns RED and both stay active!"
      ]
    },
    {
      id: "fix-ps4-pair",
      category: "Respawn (PS4)",
      symptom: "DualShock 4 controller blinks white/orange and refuses to connect to the PS4",
      cause: "Controller is still paired to another PS4 or using a charge-only USB cable.",
      steps: [
        "Flip the controller over and push a paperclip into the tiny reset pinhole next to the L2 screw for 5 seconds.",
        "Connect the controller to the PS4 using a known Micro-USB DATA cable and press the PS button.",
        "Or hold SHARE + PS button for 4 seconds until rapid white strobe flashes, then pair in Settings > Devices > Bluetooth Devices."
      ]
    },
    {
      id: "fix-xbox-nosig",
      category: "Respawn (Xbox)",
      symptom: "Xbox is powered ON (white light glowing), but Monitor says 'No Signal'",
      cause: "HDMI cable is plugged into 'HDMI IN' instead of 'HDMI OUT', or resolution mismatch.",
      steps: [
        "Check the back of the Xbox: move the HDMI cable to the port labeled 'HDMI OUT TO TV'.",
        "Verify the monitor input source is set to HDMI 1 / HDMI 2.",
        "Still blank? Reset Xbox video output: turn Xbox off, then hold EJECT + POWER (or PAIR + POWER on Series S) for 10 seconds until the 2nd beep."
      ]
    },
    {
      id: "fix-mc-lan",
      category: "Respawn (Minecraft)",
      symptom: "Minecraft 'Open to LAN' world does not appear on the other 3 squad laptops",
      cause: "Windows Firewall blocking UDP multicast or Wi-Fi AP Isolation.",
      steps: [
        "On the Host PC, open Command Prompt (`cmd`) and run `ipconfig` to find the IPv4 Address (e.g., `192.168.1.45`).",
        "Check the 5-digit Port number printed in Minecraft chat when opening to LAN (e.g., `54321`).",
        "On the other 3 laptops, click Multiplayer -> Direct Connection -> Enter `192.168.1.45:54321`. If blocked, enable `javaw.exe` for Private & Public networks in Windows Firewall."
      ]
    },
    {
      id: "fix-proj-nosound",
      category: "Director's Cut / Wolf of Wall Street",
      symptom: "Video plays on the Auditorium Projector, but there is NO SOUND in the hall!",
      cause: "Windows automatically switched audio output to the HDMI cable (projector ceiling speaker) instead of the auditorium PA mixer.",
      steps: [
        "Plug the auditorium mixer's 3.5mm Aux cable firmly into the laptop's headphone jack.",
        "Click the Speaker icon on the bottom-right Windows taskbar (next to the clock).",
        "Click the arrow next to the volume slider and change the playback device from 'Projector / HDMI' back to 'Headphones / Realtek Audio'."
      ]
    },
    {
      id: "fix-proj-nosig",
      category: "Wolf of Wall Street / Ceremonies",
      symptom: "Laptop plugged into Projector via HDMI, but Projector shows Blue Screen / 'No Signal'",
      cause: "Windows projection mode is set to 'PC Screen Only' or laptop resolution is 4K/120Hz.",
      steps: [
        "Press `Windows Key + P` on the laptop and select 'Duplicate' (or `Cmd + F1` on Mac).",
        "Open Display Settings and change resolution to `1920 x 1080` and Refresh Rate to `60 Hz`.",
        "Press the 'Source / Input' button on the projector body or remote to cycle between HDMI 1 and HDMI 2."
      ]
    },
    {
      id: "fix-pa-feedback",
      category: "Battle of the Bands / Amphitheatre",
      symptom: "PA speakers let out a piercing, high-pitched squeal (Audio Feedback)",
      cause: "Microphone is pointed toward a speaker/monitor, or channel Gain/Monitor send is too high.",
      steps: [
        "Immediately pull the Master Fader or offending Vocal Channel fader down 20%.",
        "Make sure the performer isn't holding the microphone down by their side pointing directly at the floor wedge monitor.",
        "Turn the channel's AUX (Monitor) knob down slightly and turn the Mid/High EQ knob down to 10 o'clock."
      ]
    },
    {
      id: "fix-pa-hum",
      category: "Battle of the Bands",
      symptom: "Loud 50Hz electrical buzz/hum coming from Stage Piano or Guitar/Bass line",
      cause: "Ground loop between stage amplifier power outlet and mixer power outlet, or half-plugged 1/4\" jack.",
      steps: [
        "MUTE the channel on the mixer first!",
        "Push the 1/4-inch guitar/keyboard cable all the way into the instrument and DI box.",
        "Flip the 'GROUND LIFT' (GND/LIFT) switch on the side of the Direct Injection (DI) box—the hum will vanish immediately."
      ]
    },
    {
      id: "fix-basketball-clock",
      category: "Basketball / Sports",
      symptom: "24-Second Shot Clock or Electronic Scoreboard freezes mid-quarter",
      cause: "Data cable shook loose at the scorer's table or static lockup.",
      steps: [
        "Blow the horn at the next dead ball and switch immediately to the backup tabletop flip-scoreboard + stopwatch.",
        "Turn the scoreboard controller power switch OFF, firmly push the multi-pin data plug into the back of the console, and turn it back ON.",
        "Set the current quarter time and team scores before the referee resumes play."
      ]
    },
    {
      id: "fix-shooting-target",
      category: "Shooting (10m Range)",
      symptom: "Electronic target monitor on a firing lane stops updating shots",
      cause: "Loose RJ45/RS485 lane cable under shooter bench or sensor dust.",
      steps: [
        "NEVER step past the firing line! Alert the Range Safety Officer (RSO) immediately.",
        "Check the network/power connector underneath the shooter's table.",
        "If it doesn't recover in 30 seconds, help the RSO move the shooter's profile to the pre-configured Spare Lane."
      ]
    }
  ],

  videos: [
    {
      id: "xbox-setup",
      title: "1. Xbox Hardware Setup, HDMI Trap & 2-Player FIFA Kickoff",
      duration: "01:15",
      category: "Respawn (Gaming)",
      badge: "PRIORITY #1",
      youtubeId: "twu8_oACN9E",
      youtubeSearch: "https://www.youtube.com/results?search_query=xbox+series+x+xbox+one+setup+hdmi+sync+controller+tutorial",
      summary: "Visual step-by-step from Power to HDMI OUT (avoiding the HDMI IN trap), syncing 2 wireless controllers, Offline lock, and adding a Guest profile for FIFA 1v1.",
      scenes: [
        {
          title: "Step 1: Power Cord & Surge Strip",
          caption: "Plug the Figure-8 AC cord firmly into the Xbox rear power port and connect to the lab UPS/Surge Strip. Keep 15cm clearance around vents.",
          highlight: "power"
        },
        {
          title: "Step 2: HDMI OUT TO TV (Avoid HDMI IN!)",
          caption: "Plug your HDMI cable into 'HDMI OUT TO TV' (NEVER 'HDMI IN'). Connect to the Monitor's HDMI 1 port and enable Game Mode.",
          highlight: "hdmi"
        },
        {
          title: "Step 3: Wireless & Wired Controller Sync",
          caption: "Hold the Xbox button to power on the controller. Press the Console Pair button, then hold the Top Controller Pair button for 3s until solid—or plug in via USB cable!",
          highlight: "controller"
        },
        {
          title: "Step 4: Wi-Fi, Offline Lock & Guest Profile for FIFA",
          caption: "Uncheck Auto-Updates in Settings! For Player 2 in FIFA: Press Xbox button on Controller 2 -> Profile & System -> Add or switch -> Add guest.",
          highlight: "game"
        }
      ]
    },
    {
      id: "ps4-setup",
      title: "2. PS4 Complete Setup, DualShock 4 Pairing & Safe Mode Fix",
      duration: "01:20",
      category: "Respawn (Gaming)",
      badge: "ARRIVING TOMORROW",
      youtubeId: "tvbJ9L3c9X8",
      youtubeSearch: "https://www.youtube.com/results?search_query=ps4+setup+hdmi+connect+dualshock+4+controller+guest+login",
      summary: "Everything you need when the PS4 arrives tomorrow: AC power, HDMI OUT, USB data pairing, Bluetooth strobe mode, and the 'New User > Play as Guest' rule.",
      scenes: [
        {
          title: "Step 1: PS4 AC Power & HDMI OUT",
          caption: "Connect the Figure-8 power cable to AC IN and the HDMI cable to HDMI OUT. Press Power: Blue blinking light turns SOLID WHITE when video is ready.",
          highlight: "ps4-cables"
        },
        {
          title: "Step 2: DualShock 4 USB & Bluetooth Pairing",
          caption: "Plug DualShock 4 into front USB with a DATA cable and press PS button. Or hold SHARE + PS button for 4 seconds until rapid white strobe flashes!",
          highlight: "ps4-pad"
        },
        {
          title: "Step 3: The 2-Player Guest Login Rule (Crucial!)",
          caption: "When Controller 2 turns on, NEVER click Player 1's account! Scroll left to '+ New User' -> 'Play as a Guest' -> 'Do Not Sign In' (Red light bar).",
          highlight: "ps4-guest"
        },
        {
          title: "Step 4: Pinhole Reset & Safe Mode Video Recovery",
          caption: "Controller stuck? Press paperclip into back pinhole near L2 for 5s. Black screen on monitor? Hold PS4 Power for 7s (2nd beep) -> Change Resolution.",
          highlight: "ps4-repair"
        }
      ]
    },
    {
      id: "lan-setup",
      title: "3. Minecraft 4-Player LAN, Firewall Fix & Roblox Wi-Fi",
      duration: "01:10",
      category: "Respawn (Gaming)",
      badge: "PC & NETWORK",
      youtubeId: "7p0R4aH8E0w",
      youtubeSearch: "https://www.youtube.com/results?search_query=how+to+play+minecraft+lan+direct+connect+firewall+fix",
      summary: "How to link 4 laptops in Senior IT Lab 1 & 2 for Minecraft Co-Op mini-games using ipconfig Direct Connect, plus Roblox 5GHz low-ping setup.",
      scenes: [
        {
          title: "Step 1: Same Subnet Switch / 5GHz Wi-Fi",
          caption: "Connect all 4 squad laptops to the same LAN switch or non-isolated 5GHz Wi-Fi AP. Ensure every gaming laptop is plugged into its AC charger!",
          highlight: "lan-switch"
        },
        {
          title: "Step 2: Host Open to LAN & ipconfig",
          caption: "On Host PC: Esc -> Open to LAN -> Note 5-digit Port (e.g., 54321). Open CMD and run 'ipconfig' to get Host IPv4 (e.g., 192.168.1.45).",
          highlight: "lan-ip"
        },
        {
          title: "Step 3: Direct Connect & Windows Firewall Fix",
          caption: "On Laptops 2, 3 & 4: Multiplayer -> Direct Connection -> Type 192.168.1.45:54321. Allow 'javaw.exe' on Private & Public in Windows Firewall!",
          highlight: "lan-fw"
        }
      ]
    },
    {
      id: "pa-setup",
      title: "4. Battle of the Bands & Amphitheatre PA Mixer Setup",
      duration: "01:25",
      category: "Cultural Events",
      badge: "LIVE AUDIO",
      youtubeId: "d9yS3t2mJ6E",
      youtubeSearch: "https://www.youtube.com/results?search_query=how+to+set+up+a+sound+system+for+a+live+event+audio+university",
      summary: "Master the IB Amphitheatre soundboard: Power sequence ('Speakers Last On, First Off'), XLR Mics, DI Boxes, Stage Monitors, and killing Feedback.",
      scenes: [
        {
          title: "Step 1: The Golden Power Sequence",
          caption: "Power ON order: 1) Instruments & Wireless Receivers -> 2) Audio Mixer -> 3) Main PA Speakers LAST! (Turn Speakers OFF FIRST when shutting down).",
          highlight: "pa-power"
        },
        {
          title: "Step 2: Vocal Mics (XLR) & Stage Piano (DI Box)",
          caption: "Connect vocal mics via XLR behind the main speaker line. Connect keyboards & acoustic/bass guitars through a DI Box (press Ground Lift if buzzing).",
          highlight: "pa-cables"
        },
        {
          title: "Step 3: Gain Staging & Muting Before Unplugging",
          caption: "Set Gain knob so peaks hit green/yellow (never red). ALWAYS press Channel MUTE before bands unplug guitars during changeovers!",
          highlight: "pa-gain"
        }
      ]
    },
    {
      id: "projector-setup",
      title: "5. Projector HDMI & Auditorium Film Audio Routing Fix",
      duration: "01:10",
      category: "Cultural Events",
      badge: "AV & SCREENING",
      youtubeId: "5qap5aO4i9A",
      youtubeSearch: "https://www.youtube.com/results?search_query=how+to+connect+laptop+to+projector+hdmi+no+signal+audio+fix",
      summary: "Essential for Wolf of Wall Street (Extended Ticker) and Director's Cut (Short Film Screening): fixing 'No Signal' and routing audio to the PA mixer.",
      scenes: [
        {
          title: "Step 1: Windows + P (Duplicate vs Extend)",
          caption: "Press Win + P: Choose 'Extend' for Wolf of Wall Street (drag live stock ticker to projector) or 'Duplicate' for film screenings at 1920x1080 60Hz.",
          highlight: "proj-winp"
        },
        {
          title: "Step 2: Separating Audio from HDMI!",
          caption: "Plug the Auditorium Mixer 3.5mm Aux cable into the laptop. Click Windows Sound icon -> change output from 'Projector HDMI' to 'Headphones / Mixer'!",
          highlight: "proj-sound"
        },
        {
          title: "Step 3: VLC Player & Airplane Mode",
          caption: "Pre-test all student short films in VLC Media Player 30 mins early. Enable Airplane Mode and Focus Assist so popups never interrupt.",
          highlight: "proj-vlc"
        }
      ]
    },
    {
      id: "sports-setup",
      title: "6. Sports Tech: Basketball Shot Clock, Shooting Range & Turf PA",
      duration: "01:15",
      category: "Sporting Events",
      badge: "8 SPORTS",
      youtubeId: "8z9k9W1vN2M",
      youtubeSearch: "https://www.youtube.com/results?search_query=fiba+basketball+scoreboard+24+second+shot+clock+setup",
      summary: "How to wire and operate the Indoor Sports Complex 24s/14s Basketball Shot Clock, 10m Shooting Range electronic targets, and AstroTurf PA.",
      scenes: [
        {
          title: "Step 1: Basketball Scoreboard & 24s/14s Shot Clock",
          caption: "Connect baseline 24s shot clocks BEFORE turning on the main scorer console. Test 24s full reset, 14s offensive rebound reset, and horn.",
          highlight: "sports-bball"
        },
        {
          title: "Step 2: 10m Air Rifle / Pistol Electronic Targets",
          caption: "Boot Central Range Server first, then lane switch, then shooter monitors. If a lane disconnects, alert RSO and check bench RJ45 plug.",
          highlight: "sports-shoot"
        },
        {
          title: "Step 3: AstroTurf Floodlights & Outdoor Wireless PA",
          caption: "Turn on Football & Tennis floodlights 15 mins before dusk (warm-up time). Keep portable PA under canopy and wireless mic within 25m line-of-sight.",
          highlight: "sports-turf"
        }
      ]
    }
  ]
};
