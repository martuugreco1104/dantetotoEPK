// DANTE TOTO — High-Conversion EPK Engine
// Aesthetic & Functional JavaScript for Electronic Music EPK

document.addEventListener('DOMContentLoaded', () => {
  // 1. DICTIONARY OF TRANSLATIONS (ES / EN)
  const i18n = {
    es: {
      navSounds: "AUDIO",
      navLive: "EN VIVO",
      navGigs: "FECHAS",
      navBio: "BIOGRAFÍA",
      navShoots: "FOTOS",
      navPress: "EPK / CONTACTO",
      navContact: "CONTACTO",
      heroEyebrow: "DISPONIBLE PARA FECHAS // EUROPA · INTERNACIONAL",
      heroHeadline: "DANTE TOTO",
      heroMetaLocation: "BARCELONA",
      heroMetaSound: "GÉNEROS: INDIE DANCE • DARK TECH HOUSE • TECHNO",
      heroSubtitle: "Sonido enfocado en la tensión progresiva, el groove constante y una narrativa hipnótica diseñada para la pista.",
      heroTagLocation: "BARCELONA, ES (ARG)",
      heroTagGenres: "INDIE DANCE — DARK TECH HOUSE — TECHNO",
      heroCtaPlay: "ESCUCHAR SET",
      heroCtaContact: "CONTACTO",
      heroCtaBook: "EPK",
      heroVideoBadge: "CABINA // EN VIVO",
      playerSectionTitle: "AUDIO // ÚLTIMA SESIÓN",
      playerSetTitle: "EN VIVO EN DETROIT CLUB BCN",
      playerSetSubtitle: "Sesión Étnica",
      playerSetMeta: "62 min • Dark Tech House & Indie Dance • Barcelona",
      liveSectionTitle: "// SESIONES EN VIVO // CABINA",
      liveHeadline: "DIRECTO DESDE LA CABINA",
      liveHint: "[ VISTA PREVIA AL PASAR EL CURSOR • CLIC PARA AUDIO ]",
      gigsSectionTag: "FECHAS // BARCELONA",
      gigsSectionTitle: "FECHAS SELECCIONADAS Y PRÓXIMAS",
      gigsViewRaBtn: "VER PERFIL OFICIAL EN RA ↗",
      gigsUpcomingTitle: "// PRÓXIMAS FECHAS",
      gigsNextBadge: "PRÓXIMA FECHA",
      gigsPastTitle: "// ARCHIVO RECIENTE",
      bioSectionTitle: "// BIOGRAFÍA",
      bioSoundProfile: "// PERFIL DE SONIDO Y TRAYECTORIA",
      bioNarrative: "Sonido orientado a la narrativa de pista: tensión progresiva continua, frecuencias analógicas crudas y una lectura quirúrgica de la cabina concebida para extender la energía de la noche.",
      bioResidencesLabel: "// RESIDENCIAS Y CLUBES BCN",
      bioSpectrumLabel: "// ESPECTRO SONORO",
      bioTabShort: "BIO CORTA",
      bioTabFull: "BIO COMPLETA",
      bioQuote: "“Sonido orientado a la narrativa de club: tensión progresiva, frecuencias analógicas y un pulso hipnótico concebido para extender la energía de la pista.”",
      bioShortP1: "Dante Toto (@dantetoto_) es un DJ y artista electrónico argentino establecido en Barcelona. Su sonido fusiona el pulso hipnótico del Indie Dance con las frecuencias graves del Dark Tech House y la contundencia del Techno, con presentaciones regulares en espacios clave de la escena underground barcelonesa como Detroit Club y Bridge 48 (Étnica).",
      bioFullP1: "Originario de Argentina y radicado en la vibrante escena electrónica de Barcelona, Dante Toto (@dantetoto_) ha consolidado una propuesta sonora refinada, técnica y orientada a la narrativa de club. Con presencia en cabinas de referencia underground como Detroit Club BCN y el hub creativo Bridge 48 (en showcases como Étnica), sus sesiones evitan fórmulas predecibles para sumergir a la pista en atmósferas oscuras y pulsantes.",
      bioFullP2: "Su versatilidad técnica y lectura quirúrgica del público le permiten adaptarse con solidez a diferentes dinámicas de cabina: desde warm-ups introspectivos de tensión progresiva hasta slots de hora pico de alto impacto o extended sets donde la música evoluciona hacia estados hipnóticos de groove ininterrumpido.",
      shootsSectionTitle: "FOTOS DE PRENSA",
      shootsSubtitle: "Material fotográfico oficial en alta resolución para flyers, cartelería y prensa de clubes.",
      shootsDownloadAll: "DESCARGAR TODAS EN ALTA RESOLUCIÓN (ZIP) →",
      pressSectionTitle: "KIT DE PRENSA",
      pressHeadline: "MATERIAL DESCARGABLE PARA PROMOTORES",
      pressSubtitle: "Acceso inmediato a los documentos técnicos y promocionales de Dante Toto para promotores y bookers.",
      btnEpkDossier: "DESCARGAR DOSSIER / EPK (PDF)",
      btnTechRider: "RIDER TÉCNICO",
      btnPressPhotos: "FOTOS DE PRENSA HQ",
      techRiderBoxTag: "RIDER TÉCNICO // CABINA",
      techRiderBoxTitle: "SETUP DE REPRODUCCIÓN & MEZCLA",
      hospitalityBoxTag: "HOSPITALITY // CABINA & CAMERINO",
      hospitalityBoxTitle: "REQUERIMIENTOS DE HOSPITALITY",
      riderReadyToCopy: "● LISTO PARA COPIAR",
      riderCopyBtn: "[ COPIAR SPECS AL PORTAPAPELES ]",
      riderCopiedBtn: "[ ✓ SPECS COPIADAS ]",
      contactSectionTitle: "CONTRATACIONES Y CONTACTO DIRECTO",
      contactHeadline: "CONTACTO DANTE TOTO",
      contactSubtitle: "Para fechas en clubes, festivales y contrataciones en Europa y giras internacionales.",
      contactDirectEmailLabel: "[ CONTRATACIÓN DIRECTA ]",
      contactCopyEmailBtn: "[ COPIAR EMAIL ]",
      contactEmailCopied: "Email copiado al portapapeles: bookings@dantetoto.com",
      contactCopiedFeedback: "[ ✓ EMAIL COPIADO ]",
      formNameLabel: "NOMBRE / PROMOTOR / CLUB",
      formNamePlaceholder: "Ej. Nitsa Club / Sala Apolo / Promoter",
      formEmailLabel: "EMAIL DE CONTACTO",
      formEmailPlaceholder: "booking@promoter.com",
      formDetailsLabel: "FECHA & CIUDAD DEL EVENTO",
      formDetailsPlaceholder: "Ej. Barcelona • 15 Noviembre 2026",
      formMessageLabel: "MENSAJE / FORMATO DEL SET",
      formMessagePlaceholder: "Especificar formato deseado: Warm-up, Peak Time, Extended...",
      formSubmitBtn: "ENVIAR SOLICITUD DE BOOKING",
      formSuccessToast: "Solicitud enviada con éxito. Te responderemos a la brevedad.",
      toastDownloaded: "Descargando archivo:",
      footerLocation: "Barcelona, España"
    },
    en: {
      navSounds: "AUDIO",
      navLive: "LIVE",
      navGigs: "DATES",
      navBio: "BIO",
      navShoots: "PHOTOS",
      navPress: "EPK / CONTACT",
      navContact: "CONTACT",
      heroEyebrow: "AVAILABLE FOR BOOKINGS // EU · WORLDWIDE",
      heroHeadline: "DANTE TOTO",
      heroMetaLocation: "BARCELONA",
      heroMetaSound: "SOUND: INDIE DANCE • DARK TECH HOUSE • TECHNO",
      heroSubtitle: "Sound focused on progressive tension, constant groove, and a hypnotic narrative engineered for the dancefloor.",
      heroTagLocation: "BARCELONA, ES (ARG)",
      heroTagGenres: "INDIE DANCE — DARK TECH HOUSE — TECHNO",
      heroCtaPlay: "PLAY SET",
      heroCtaContact: "CONTACT",
      heroCtaBook: "EPK",
      heroVideoBadge: "BOOTH // LIVE FEED",
      playerSectionTitle: "AUDIO // LATEST SESSION",
      playerSetTitle: "LIVE AT DETROIT CLUB BCN",
      playerSetSubtitle: "Étnica Session",
      playerSetMeta: "62 min • Dark Tech House & Indie Dance • Barcelona",
      liveSectionTitle: "// LIVE SESSIONS // BOOTH",
      liveHeadline: "DIRECT FROM THE DECKS",
      liveHint: "[ HOVER TO PREVIEW • CLICK FOR AUDIO ]",
      gigsSectionTag: "TOUR DATES // BARCELONA",
      gigsSectionTitle: "SELECTED GIGS & UPCOMING",
      gigsViewRaBtn: "VIEW OFFICIAL RA PROFILE ↗",
      gigsUpcomingTitle: "// UPCOMING DATES",
      gigsNextBadge: "NEXT GIG",
      gigsPastTitle: "// RECENT ARCHIVE",
      bioSectionTitle: "// BIOGRAPHY",
      bioSoundProfile: "// SOUND ARCHITECTURE & PROFILE",
      bioNarrative: "Sound oriented toward dancefloor narrative: continuous progressive tension, raw analog frequencies, and a surgical booth reading engineered to extend the night's momentum.",
      bioResidencesLabel: "// RESIDENCIES & CLUBS BCN",
      bioSpectrumLabel: "// SOUND SPECTRUM",
      bioTabShort: "SHORT BIO",
      bioTabFull: "FULL BIO",
      bioQuote: "“Club narrative driven sound: progressive tension, raw analog low-ends, and a hypnotic pulse engineered to sustain dancefloor momentum.”",
      bioShortP1: "Dante Toto (@dantetoto_) is an Argentine DJ and electronic artist based in Barcelona. His sound blends the hypnotic pulse of Indie Dance with the deep low-ends of Dark Tech House and the steady drive of contemporary Techno, performing regularly across key Barcelona underground venues such as Detroit Club and Bridge 48 (Étnica).",
      bioFullP1: "Hailing from Argentina and deeply embedded in Barcelona’s electronic vanguard, Dante Toto (@dantetoto_) has forged a sophisticated, narrative-driven club identity. With appearances across Barcelona's underground spaces like Detroit Club BCN and creative hub Bridge 48 (Étnica), his sets reject predictable club formulas to draw dance floors into hypnotic, driving atmospheres.",
      bioFullP2: "His acute dance-floor intuition and technical precision allow him to command different club contexts: from nuanced, tension-building warm-ups to high-impact peak-time slots and extended exploratory journeys that maintain an unbroken groove.",
      shootsSectionTitle: "PRESS PHOTOS",
      shootsSubtitle: "Official high-resolution photography ready for festival lineups, venue flyers, and media coverage.",
      shootsDownloadAll: "DOWNLOAD ALL AS HIGH-RES ZIP →",
      pressSectionTitle: "PRESS KIT HUB",
      pressHeadline: "DOWNLOADABLE ASSETS FOR PROMOTERS",
      pressSubtitle: "Instant access to technical riders and promotional assets for promoters and festival curators.",
      btnEpkDossier: "DOWNLOAD EPK DOSSIER (PDF)",
      btnTechRider: "TECHNICAL RIDER",
      btnPressPhotos: "HQ PRESS PHOTOS",
      techRiderBoxTag: "TECH RIDER // BOOTH",
      techRiderBoxTitle: "PLAYBACK & MIXING SETUP",
      hospitalityBoxTag: "HOSPITALITY // BOOTH & GREEN ROOM",
      hospitalityBoxTitle: "HOSPITALITY REQUIREMENTS",
      riderReadyToCopy: "● READY TO COPY",
      riderCopyBtn: "[ COPY SPECS TO CLIPBOARD ]",
      riderCopiedBtn: "[ ✓ SPECS COPIED ]",
      contactSectionTitle: "BOOKINGS & DIRECT CONTACT",
      contactHeadline: "REACH DANTE TOTO",
      contactSubtitle: "Inquiries for European club dates, festival stages, and worldwide tours.",
      contactDirectEmailLabel: "[ DIRECT BOOKING ]",
      contactCopyEmailBtn: "[ COPY EMAIL ]",
      contactEmailCopied: "Email copied to clipboard: bookings@dantetoto.com",
      contactCopiedFeedback: "[ ✓ EMAIL COPIED ]",
      formNameLabel: "NAME / PROMOTER / VENUE",
      formNamePlaceholder: "e.g. Nitsa Club / Sala Apolo / Festival",
      formEmailLabel: "CONTACT EMAIL",
      formEmailPlaceholder: "booking@promoter.com",
      formDetailsLabel: "EVENT DATE & CITY",
      formDetailsPlaceholder: "e.g. Barcelona • November 15, 2026",
      formMessageLabel: "EVENT DETAILS / DESIRED FORMAT",
      formMessagePlaceholder: "Specify slot requirements: Warm-up, Peak Time, Extended...",
      formSubmitBtn: "SUBMIT BOOKING REQUEST",
      formSuccessToast: "Booking request dispatched successfully. We will reply shortly.",
      toastDownloaded: "Downloading file:",
      footerLocation: "Barcelona, Spain"
    }
  };

  let currentLang = 'es';

  // 2. TOAST SYSTEM
  const toast = document.getElementById('toastNotice');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // 3. LANGUAGE SWITCHER
  function updateLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key]) el.placeholder = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('text-[#39FF14]', isActive);
      btn.classList.toggle('text-zinc-500', !isActive);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateLanguage(btn.getAttribute('data-lang'));
    });
  });

  // 4. BIO TABS (SHORT VS FULL) WITH SMOOTH FADE-IN TRANSITION
  const tabShort = document.getElementById('tabShortBtn');
  const tabFull = document.getElementById('tabFullBtn');
  const bioShortContent = document.getElementById('bioShortContent');
  const bioFullContent = document.getElementById('bioFullContent');

  function switchBioTab(target) {
    if (target === 'short') {
      if (tabShort.classList.contains('active')) return;
      tabShort.classList.add('active');
      tabFull.classList.remove('active');

      bioFullContent.classList.add('is-switching');
      setTimeout(() => {
        bioFullContent.classList.add('hidden');
        bioShortContent.classList.remove('hidden');
        bioShortContent.classList.add('is-switching');
        void bioShortContent.offsetWidth; // Force reflow
        bioShortContent.classList.remove('is-switching');
      }, 150);
    } else {
      if (tabFull.classList.contains('active')) return;
      tabFull.classList.add('active');
      tabShort.classList.remove('active');

      bioShortContent.classList.add('is-switching');
      setTimeout(() => {
        bioShortContent.classList.add('hidden');
        bioFullContent.classList.remove('hidden');
        bioFullContent.classList.add('is-switching');
        void bioFullContent.offsetWidth; // Force reflow
        bioFullContent.classList.remove('is-switching');
      }, 150);
    }
  }

  if (tabShort && tabFull && bioShortContent && bioFullContent) {
    tabShort.addEventListener('click', () => switchBioTab('short'));
    tabFull.addEventListener('click', () => switchBioTab('full'));
  }

  // 5. AUDIO ENGINE & WAVEFORM CANVAS (WEB AUDIO API)
  let audioCtx = null;
  let isPlaying = false;
  let tempo = 124;
  let rhythmTimer = null;
  let rhythmStep = 0;
  let trackSec = 96; // 01:36
  const totalSec = 3720; // 62 min

  const mainPlayBtn = document.getElementById('mainPlayBtn');
  const playBtnIcon = document.getElementById('playBtnIcon');
  const timeDisplay = document.getElementById('trackTimeDisplay');
  const scrubber = document.getElementById('waveformScrubber');
  const canvas = document.getElementById('waveformCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function triggerBeat() {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    // Sub kick at steps 0, 4, 8, 12
    if (rhythmStep % 4 === 0) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.setValueAtTime(115, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.14);
      gain.gain.setValueAtTime(0.55, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.24);
    }

    // Hi-hat at steps 2, 6, 10, 14
    if (rhythmStep % 4 === 2) {
      const bufferSize = audioCtx.sampleRate * 0.04;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(7800, now);
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noise.start(now);
    }

    rhythmStep = (rhythmStep + 1) % 16;
  }

  function formatTime(s) {
    const mins = Math.floor(s / 60).toString().padStart(2, '0');
    const secs = Math.floor(s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function startAudio() {
    // Mute any unmuted video if audio starts
    muteAllVideos();

    initAudio();
    isPlaying = true;
    if (mainPlayBtn) {
      mainPlayBtn.setAttribute('aria-label', currentLang === 'es' ? 'Pausar set' : 'Pause set');
    }
    if (playBtnIcon) {
      playBtnIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
    }

    const interval = ((60 / tempo) / 4) * 1000;
    rhythmTimer = setInterval(() => {
      triggerBeat();
      trackSec += 0.12;
      if (timeDisplay) timeDisplay.textContent = `${formatTime(trackSec)} / 62:00`;
      if (scrubber) scrubber.style.left = `${(trackSec / totalSec) * 100}%`;
    }, interval);

    showToast(`${i18n[currentLang].playerSetTitle} // ${i18n[currentLang].playerSetSubtitle}`);
  }

  function pauseAudio() {
    isPlaying = false;
    if (rhythmTimer) {
      clearInterval(rhythmTimer);
      rhythmTimer = null;
    }
    if (mainPlayBtn) {
      mainPlayBtn.setAttribute('aria-label', currentLang === 'es' ? 'Reproducir set' : 'Play set');
    }
    if (playBtnIcon) {
      playBtnIcon.innerHTML = `<polygon points="6 4 20 12 6 20 6 4"></polygon>`;
    }
  }

  if (mainPlayBtn) {
    mainPlayBtn.addEventListener('click', () => {
      if (!isPlaying) startAudio();
      else pauseAudio();
    });
  }

  // Hero primary button: scrolls smoothly to control center and starts audio
  const heroCtaPlayBtn = document.getElementById('heroCtaPlayBtn');
  if (heroCtaPlayBtn) {
    heroCtaPlayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const playerSec = document.getElementById('sounds');
      if (playerSec) {
        playerSec.scrollIntoView({ behavior: 'smooth' });
      }
      if (!isPlaying) startAudio();
    });
  }

  // 6. WAVEFORM CANVAS VISUALIZER (Neon Green #00ff66)
  let waveTick = 0;
  function renderWaveform() {
    if (!ctx || !canvas) return;

    if (canvas.width !== canvas.clientWidth) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    const w = canvas.width;
    const h = canvas.height;
    const mid = h / 2;

    ctx.fillStyle = '#08080a';
    ctx.fillRect(0, 0, w, h);

    const barW = 3;
    const gap = 2;
    const count = Math.floor(w / (barW + gap));

    if (isPlaying) waveTick += 0.08;

    for (let i = 0; i < count; i++) {
      const x = i * (barW + gap);
      const playedPercent = trackSec / totalSec;

      let amp;
      if (isPlaying) {
        const sin1 = Math.sin(i * 0.08 + waveTick);
        const sin2 = Math.cos(i * 0.16 - waveTick * 1.5);
        amp = (Math.abs(sin1 * 0.5 + sin2 * 0.4) * 0.85);
      } else {
        amp = Math.abs(Math.sin(i * 0.06) * 0.35) + 0.12;
      }

      const barH = Math.max(3, amp * (h * 0.8));
      const y = mid - barH / 2;

      if (x < w * playedPercent) {
        ctx.fillStyle = '#00ff66'; // Neon Accent
      } else {
        ctx.fillStyle = '#222226';
      }

      ctx.fillRect(x, y, barW, barH);
    }

    requestAnimationFrame(renderWaveform);
  }
  requestAnimationFrame(renderWaveform);

  // 7. LIVE SESSIONS VIDEO CONTROLLER (Hover Preview & Sound Toggle)
  const videoCards = document.querySelectorAll('.video-card');

  function muteAllVideos() {
    videoCards.forEach(card => {
      const v = card.querySelector('video');
      const btn = card.querySelector('.sound-toggle-btn');
      const label = card.querySelector('.sound-label');
      if (v) v.muted = true;
      card.classList.remove('is-active');
      if (btn) btn.classList.remove('is-active');
      if (label) label.textContent = '[ SOUND ON ]';
    });
  }

  videoCards.forEach(card => {
    const video = card.querySelector('video');
    const soundBtn = card.querySelector('.sound-toggle-btn');
    const soundLabel = card.querySelector('.sound-label');

    if (!video) return;

    // Desktop hover: play preview silently
    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      // If sound is not active, pause to conserve resources
      if (video.muted) {
        video.pause();
      }
    });

    // Touch/Mobile tap on card
    card.addEventListener('click', (e) => {
      if (e.target.closest('.sound-toggle-btn')) return;
      if (video.paused) {
        video.play().catch(() => {});
      } else if (video.muted) {
        video.pause();
      }
    });

    // Minimalist [ SOUND ON / OFF ] button in bottom corner
    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const willBeUnmuted = video.muted;

        if (willBeUnmuted) {
          // Pause main synth audio if playing
          if (isPlaying) pauseAudio();

          // Mute all other videos
          muteAllVideos();

          // Unmute current video & play
          video.muted = false;
          video.play().catch(() => {});
          card.classList.add('is-active');
          soundBtn.classList.add('is-active');
          if (soundLabel) soundLabel.textContent = '[ SOUND OFF ]';
        } else {
          // Mute current video
          video.muted = true;
          card.classList.remove('is-active');
          soundBtn.classList.remove('is-active');
          if (soundLabel) soundLabel.textContent = '[ SOUND ON ]';
        }
      });
    }
  });

  // 8. COPY DIRECT EMAIL TO CLIPBOARD WITH VISUAL FEEDBACK
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyEmailBtnText = document.getElementById('copyEmailBtnText');
  const copyEmailIcon = document.getElementById('copyEmailIcon');
  let copyEmailTimeout = null;

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('bookings@dantetoto.com').then(() => {
        showToast(i18n[currentLang].contactEmailCopied);
        if (copyEmailBtnText) {
          const originalText = i18n[currentLang].contactCopyEmailBtn;
          copyEmailBtnText.textContent = i18n[currentLang].contactCopiedFeedback;
          if (copyEmailIcon) copyEmailIcon.style.display = 'none';
          copyEmailBtn.classList.add('bg-[#39FF14]', 'text-black', 'border-[#39FF14]', 'shadow-[0_0_20px_rgba(57,255,20,0.5)]');
          clearTimeout(copyEmailTimeout);
          copyEmailTimeout = setTimeout(() => {
            copyEmailBtnText.textContent = originalText;
            if (copyEmailIcon) copyEmailIcon.style.display = '';
            copyEmailBtn.classList.remove('bg-[#39FF14]', 'text-black', 'border-[#39FF14]', 'shadow-[0_0_20px_rgba(57,255,20,0.5)]');
          }, 2000);
        }
      }).catch(() => {
        showToast('bookings@dantetoto.com');
      });
    });
  }

  // 8B. COPY TECHNICAL RIDER CONDENSED SPECS (STAGE MANAGERS & BOOKERS)
  const copyRiderBtn = document.getElementById('copyRiderBtn');
  const copyRiderText = document.getElementById('copyRiderText');
  const copyRiderIcon = document.getElementById('copyRiderIcon');
  let copyRiderTimeout = null;

  if (copyRiderBtn) {
    const riderSpecs = "DANTE TOTO // TECHNICAL RIDER & HOSPITALITY 2026\n\n[ SETUP TÉCNICO EN CABINA ]:\n- 3x Pioneer CDJ-3000 (enlazados vía Pro DJ Link / Gigabit Ethernet Hub)\n- 1x Pioneer DJM-V10 o Allen & Heath Xone:96 (Mixer profesional 4/6 canales)\n- Monitoreo Booth L+R: 2x monitores activos de alta fidelidad a nivel del oído con control de volumen independiente en mixer\n- Cabina antivibración desacoplada + tomas de corriente 220V dedicadas\n\n[ HOSPITALITY & LOGÍSTICA ]:\n- 6x Botellas de agua mineral sin gas (3 frías + 3 a temperatura ambiente en cabina)\n- 1x Pack de cervezas premium frías disponibles en cabina y camerino\n- Gaseosas / refrescos (Coca-Cola / Sprite / Red Bull con hielo disponible)\n- 2x Toallas negras de cabina limpias\n\nDirect Contact: bookings@dantetoto.com";

    copyRiderBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(riderSpecs).then(() => {
        showToast(currentLang === 'es' ? 'Rider técnico copiado al portapapeles' : 'Tech Rider specs copied to clipboard');
        if (copyRiderText) {
          const originalText = copyRiderText.textContent;
          copyRiderText.textContent = currentLang === 'es' ? '[ ✓ SPECS COPIADAS ]' : '[ ✓ SPECS COPIED ]';
          copyRiderBtn.classList.add('border-[#39FF14]', 'text-[#39FF14]', 'shadow-[0_0_15px_rgba(57,255,20,0.3)]');
          clearTimeout(copyRiderTimeout);
          copyRiderTimeout = setTimeout(() => {
            copyRiderText.textContent = originalText;
            copyRiderBtn.classList.remove('border-[#39FF14]', 'text-[#39FF14]', 'shadow-[0_0_15px_rgba(57,255,20,0.3)]');
          }, 2500);
        }
      }).catch(() => {
        showToast('bookings@dantetoto.com');
      });
    });
  }

  // 9. DOWNLOADS WITH TOAST NOTIFICATION
  document.querySelectorAll('.trigger-dl').forEach(btn => {
    btn.addEventListener('click', () => {
      const filename = btn.getAttribute('data-filename') || 'Dante_Toto_Press_Asset.zip';
      showToast(`${i18n[currentLang].toastDownloaded} ${filename}`);
    });
  });

  // 10. BOOKING FORM HANDLER
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(i18n[currentLang].formSuccessToast);
      form.reset();
    });
  }

  // 11. HERO VIDEO AUTOPLAY RELIABILITY
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const startVideo = () => {
          heroVideo.play().catch(() => {});
          window.removeEventListener('click', startVideo);
          window.removeEventListener('touchstart', startVideo);
          window.removeEventListener('scroll', startVideo);
        };
        window.addEventListener('click', startVideo, { once: true });
        window.addEventListener('touchstart', startVideo, { once: true });
        window.addEventListener('scroll', startVideo, { once: true });
      });
    }
  }

  // 12. NAVBAR SCROLL DYNAMICS
  const header = document.querySelector('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('bg-[#050505]/90', 'shadow-lg');
        header.classList.remove('bg-[#050505]/40');
      } else {
        header.classList.add('bg-[#050505]/40');
        header.classList.remove('bg-[#050505]/90', 'shadow-lg');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 13. HERO DEFORMABLE LIQUID 3D WIREFRAME MESH (CANVAS PHYSICS)
  const heroMeshCanvas = document.getElementById('heroMeshCanvas');
  const heroSection = document.getElementById('hero');

  if (heroMeshCanvas && heroSection) {
    const ctx = heroMeshCanvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Grid configuration calibrated for high precision and liquid response
    const SPACING = 30; // Spacing between grid lines in pixels
    const INFLUENCE_RADIUS = 190; // Radius of deformation under cursor
    const SPRING_STIFFNESS = 0.048; // Elastic return force
    const DAMPING = 0.87; // Viscous damping
    const PUSH_STRENGTH = 20; // Max repulsion force

    let points = [];
    let cols = 0;
    let rows = 0;

    const mouse = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      vx: 0,
      vy: 0,
      active: false,
      targetRadius: INFLUENCE_RADIUS,
      currentRadius: 0
    };

    function resizeGrid() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = heroSection.getBoundingClientRect();
      width = Math.round(rect.width);
      height = Math.round(rect.height);

      heroMeshCanvas.width = Math.round(width * dpr);
      heroMeshCanvas.height = Math.round(height * dpr);
      heroMeshCanvas.style.width = `${width}px`;
      heroMeshCanvas.style.height = `${height}px`;

      const margin = 50; // Bleed beyond borders
      cols = Math.ceil((width + margin * 2) / SPACING) + 1;
      rows = Math.ceil((height + margin * 2) / SPACING) + 1;

      points = [];
      for (let r = 0; r < rows; r++) {
        const row = [];
        const baseY = -margin + r * SPACING;
        for (let c = 0; c < cols; c++) {
          const baseX = -margin + c * SPACING;
          row.push({
            baseX: baseX,
            baseY: baseY,
            x: baseX,
            y: baseY,
            vx: 0,
            vy: 0,
            phase: (c * 0.18) + (r * 0.22) // Spatial phase for ambient 3D undulation
          });
        }
        points.push(row);
      }
    }

    let isRunning = false;
    let animId = null;
    let time = 0;

    function updatePhysics() {
      time += 0.016;

      if (mouse.active) {
        mouse.vx = (mouse.x - mouse.prevX) * 0.35;
        mouse.vy = (mouse.y - mouse.prevY) * 0.35;
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;
        mouse.currentRadius += (mouse.targetRadius - mouse.currentRadius) * 0.12;
      } else {
        mouse.vx *= 0.85;
        mouse.vy *= 0.85;
        mouse.currentRadius += (0 - mouse.currentRadius) * 0.06;
      }

      const radius = mouse.currentRadius;
      const radiusSq = radius * radius;

      for (let r = 0; r < rows; r++) {
        const row = points[r];
        for (let c = 0; c < cols; c++) {
          const p = row[c];

          // 1. Organic ambient breathing wave (topological 3D curvature)
          const ambientX = Math.sin(time * 1.1 + p.phase) * 2.5;
          const ambientY = Math.cos(time * 0.85 + p.phase * 0.9) * 2.2;

          const targetX = p.baseX + ambientX;
          const targetY = p.baseY + ambientY;

          // 2. Real-time liquid mouse / touch deformation
          if (radius > 1) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < radiusSq && distSq > 0) {
              const dist = Math.sqrt(distSq);
              const factor = (1 - dist / radius);
              // Sine ease for organic bell-curve displacement (liquid tension)
              const smoothFactor = Math.sin(factor * (Math.PI / 2));
              const angle = Math.atan2(dy, dx);
              const push = smoothFactor * PUSH_STRENGTH;

              p.vx += Math.cos(angle) * push * 0.3;
              p.vy += Math.sin(angle) * push * 0.3;

              // Elastic drag in direction of cursor travel
              p.vx += mouse.vx * smoothFactor * 0.35;
              p.vy += mouse.vy * smoothFactor * 0.35;
            }
          }

          // 3. Spring physics (Hooke's law + viscous damping)
          const fx = (targetX - p.x) * SPRING_STIFFNESS;
          const fy = (targetY - p.y) * SPRING_STIFFNESS;

          p.vx = (p.vx + fx) * DAMPING;
          p.vy = (p.vy + fy) * DAMPING;

          p.x += p.vx;
          p.y += p.vy;
        }
      }
    }

    function renderMesh() {
      ctx.clearRect(0, 0, heroMeshCanvas.width, heroMeshCanvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      // Grid stroke styling: Neon green #39FF14 at exactly 15% opacity (between 12% and 18%)
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.15)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // 1. Draw horizontal smooth curved lines (spline interpolation)
      for (let r = 0; r < rows; r++) {
        const row = points[r];
        ctx.beginPath();
        ctx.moveTo(row[0].x, row[0].y);

        for (let c = 0; c < cols - 1; c++) {
          const xc = (row[c].x + row[c + 1].x) * 0.5;
          const yc = (row[c].y + row[c + 1].y) * 0.5;
          ctx.quadraticCurveTo(row[c].x, row[c].y, xc, yc);
        }
        ctx.lineTo(row[cols - 1].x, row[cols - 1].y);
        ctx.stroke();
      }

      // 2. Draw vertical smooth curved lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        ctx.moveTo(points[0][c].x, points[0][c].y);

        for (let r = 0; r < rows - 1; r++) {
          const xc = (points[r][c].x + points[r + 1][c].x) * 0.5;
          const yc = (points[r][c].y + points[r + 1][c].y) * 0.5;
          ctx.quadraticCurveTo(points[r][c].x, points[r][c].y, xc, yc);
        }
        ctx.lineTo(points[rows - 1][c].x, points[rows - 1][c].y);
        ctx.stroke();
      }

      // 3. Subtle elastic radial glow following cursor deformation
      if (mouse.currentRadius > 8) {
        const glow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.currentRadius
        );
        glow.addColorStop(0, 'rgba(57, 255, 20, 0.08)');
        glow.addColorStop(0.5, 'rgba(57, 255, 20, 0.03)');
        glow.addColorStop(1, 'rgba(57, 255, 20, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function animationLoop() {
      if (!isRunning) return;
      updatePhysics();
      renderMesh();
      animId = requestAnimationFrame(animationLoop);
    }

    // Pointer events on hero container
    const handlePointer = (clientX, clientY) => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      if (!mouse.active) {
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;
        mouse.active = true;
      }
    };

    heroSection.addEventListener('mousemove', (e) => {
      handlePointer(e.clientX, e.clientY);
    }, { passive: true });

    heroSection.addEventListener('mouseenter', (e) => {
      handlePointer(e.clientX, e.clientY);
    }, { passive: true });

    heroSection.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    // Touch support for mobile / tablet
    heroSection.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    heroSection.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    heroSection.addEventListener('touchend', () => {
      mouse.active = false;
    });

    window.addEventListener('resize', resizeGrid, { passive: true });

    // IntersectionObserver to pause loop when Hero is off-screen (0% CPU impact)
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!isRunning) {
            isRunning = true;
            animationLoop();
          }
        } else {
          isRunning = false;
          if (animId) cancelAnimationFrame(animId);
        }
      });
    }, { threshold: 0.05 });

    heroObserver.observe(heroSection);
    resizeGrid();
  }

  // 14. CARD SPOTLIGHT INTERACTION (GLOW FOLLOWS CURSOR)
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });

  // 15. SECTION DIVIDER EQUALIZER PULSE ON SCROLL
  const techDividers = document.querySelectorAll('.section-divider-tech');
  if (techDividers.length > 0) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
          techDividers.forEach((divider, idx) => {
            const offset = (scrollPercent * 1.8 + idx * 28) % 100;
            divider.style.setProperty('--scroll-pulse-x', `${offset}%`);
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 16. GIGS ARCHIVE HORIZONTAL CAROUSEL CONTROLLER
  const gigsCarousel = document.getElementById('gigsCarouselContainer');
  const gigsPrevBtn = document.getElementById('gigsScrollPrev');
  const gigsNextBtn = document.getElementById('gigsScrollNext');

  if (gigsCarousel) {
    if (gigsPrevBtn) {
      gigsPrevBtn.addEventListener('click', () => {
        gigsCarousel.scrollBy({ left: -340, behavior: 'smooth' });
      });
    }
    if (gigsNextBtn) {
      gigsNextBtn.addEventListener('click', () => {
        gigsCarousel.scrollBy({ left: 340, behavior: 'smooth' });
      });
    }

    // Drag-to-scroll with mouse on desktop
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    gigsCarousel.addEventListener('mousedown', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      isDown = true;
      startX = e.pageX - gigsCarousel.offsetLeft;
      scrollLeft = gigsCarousel.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
    });

    gigsCarousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gigsCarousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      gigsCarousel.scrollLeft = scrollLeft - walk;
    });
  }

  // 17. PRESS KIT COMPACT TABS CONTROLLER (Rider Specs vs Hospitality)
  const presskitTabs = document.querySelectorAll('.presskit-tab-btn');
  const presskitPanels = document.querySelectorAll('.presskit-tab-panel');

  if (presskitTabs.length > 0) {
    presskitTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        presskitTabs.forEach(t => {
          t.classList.remove('active', 'border-[#39FF14]', 'text-white', 'bg-white/[0.08]');
          t.classList.add('border-transparent', 'text-zinc-400', 'bg-transparent');
          const dot = t.querySelector('.tab-indicator-dot');
          if (dot) {
            dot.classList.remove('bg-[#39FF14]');
            dot.classList.add('bg-zinc-600');
          }
        });

        btn.classList.add('active', 'border-[#39FF14]', 'text-white', 'bg-white/[0.08]');
        btn.classList.remove('border-transparent', 'text-zinc-400', 'bg-transparent');
        const activeDot = btn.querySelector('.tab-indicator-dot');
        if (activeDot) {
          activeDot.classList.remove('bg-zinc-600');
          activeDot.classList.add('bg-[#39FF14]');
        }

        presskitPanels.forEach(panel => {
          if (panel.id === targetTab) {
            panel.classList.remove('hidden');
            panel.classList.add('block');
          } else {
            panel.classList.add('hidden');
            panel.classList.remove('block');
          }
        });
      });
    });
  }
});
