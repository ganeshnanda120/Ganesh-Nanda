// ==========================================
// 1. DATA DICTIONARIES
// ==========================================

const skillsData = [
  {
    category: 'Programming',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Dart', level: 92 },
      { name: 'Java', level: 75 }
    ]
  },
  {
    category: 'Frontend',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
    items: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Flutter', level: 92 }
    ]
  },
  {
    category: 'Backend',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><circle cx="12" cy="5" r="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 82 },
      { name: 'Firebase', level: 85 }
    ]
  },
  {
    category: 'Tools',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    items: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'VS Code', level: 95 }
    ]
  },
  {
    category: 'Others',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'Debugging', level: 85 },
      { name: 'Testing', level: 82 }
    ]
  }
];

const projectsData = [
  {
    id: 'notes-app',
    title: 'Secure Notes App',
    category: 'Apps',
    desc: 'A cloud-synchronized note taking application with rich formatting, folder organization, and AES local encryption.',
    techs: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    demoUrl: 'https://github.com/ganeshnanda120',
    githubUrl: 'https://github.com/ganeshnanda120',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    graphic: `
      <svg viewBox="0 0 100 100" fill="none" style="width: 80px; opacity: 0.85;">
        <rect x="25" y="15" width="50" height="70" rx="6" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="2" />
        <line x1="35" y1="35" x2="65" y2="35" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
        <line x1="35" y1="48" x2="65" y2="48" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
        <line x1="35" y1="61" x2="55" y2="61" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
      </svg>
    `,
    caseStudy: {
      category: 'Mobile Application',
      problem: 'Standard notepad apps fail to sync securely across platforms and lack local offline security controls for notes.',
      solution: 'Developed a Flutter app with AES-256 local encryption and background thread syncing to Firebase Firestore.',
      challenges: [
        'Resolving sync conflicts when notes are updated concurrently on offline devices.',
        'Optimizing encryption latency during multi-note batch downloads.'
      ],
      metrics: ['256-Bit AES Crypt', '99.9% Sync Uptime', '50ms Sync Lag'],
      architecture: ['Flutter Client', 'SQLite Storage', 'AES Pipeline', 'Firebase Db']
    }
  },
  {
    id: 'fitness-tracker',
    title: 'Low-Power Fitness Tracker',
    category: 'Apps',
    desc: 'Mobile application designed to track steps, calories, and outdoor runs using low-power hardware integrations.',
    techs: ['Flutter', 'Provider', 'SQLite', 'Sensor APIs'],
    demoUrl: 'https://github.com/ganeshnanda120',
    githubUrl: 'https://github.com/ganeshnanda120',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)',
    graphic: `
      <svg viewBox="0 0 100 100" fill="none" style="width: 80px; opacity: 0.85;">
        <circle cx="50" cy="50" r="30" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="6,4" />
        <path d="M40 50 L48 42 L55 58 L62 50" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
    caseStudy: {
      category: 'Mobile / IoT App',
      problem: 'GPS-based running apps consume extensive battery life, draining up to 25% of standard phone batteries per hour.',
      solution: 'Built a custom sensor aggregator in Flutter that checks device pedometers and coordinates background GPS updates.',
      challenges: [
        'Ensuring background services were not aggressively terminated by Android and iOS power settings.',
        'Smoothing noise from sensor readings in varied walking patterns.'
      ],
      metrics: ['-65% Battery Load', '10k+ Steps Logged', 'GPS Smoothing'],
      architecture: ['Pedometer API', 'Flutter Service', 'Provider State', 'Local SQLite']
    }
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker Board',
    category: 'Web',
    desc: 'A full-stack financial bookkeeping platform featuring category visualizations, invoice exports, and recurrent transaction schedules.',
    techs: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    demoUrl: 'https://github.com/ganeshnanda120',
    githubUrl: 'https://github.com/ganeshnanda120',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
    graphic: `
      <svg viewBox="0 0 100 100" fill="none" style="width: 80px; opacity: 0.85;">
        <circle cx="50" cy="50" r="30" stroke="#ffffff" stroke-width="2.5" />
        <path d="M50 35 L50 65 M38 45 L50 35 L62 45" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
    caseStudy: {
      category: 'Web Application',
      problem: 'Standard spreadsheet accounting systems are slow to input, require manual sorting, and load slowly on unstable cellular links.',
      solution: 'Created a responsive React UI connecting to an Express web server with cache-optimized query aggregates.',
      challenges: [
        'Calculating large date-range analytics in MongoDB without causing server spikes.',
        'Rendering SVG-based interactive charts efficiently on low-end mobile devices.'
      ],
      metrics: ['1.2s Load Speed', 'MongoDB Indices', 'Interactive SVG'],
      architecture: ['React UI Client', 'Express backend', 'Mongoose Aggregate', 'MongoDB Cloud']
    }
  }
];

const certificatesData = [
  {
    id: 'iot',
    title: 'Introduction to the Internet of Things and Embedded Systems',
    issuer: 'UCI (University of California, Irvine)',
    date: 'Jan 20, 2025',
    credentialId: 'YRISP6PVVP3M',
    color: 'var(--accent)',
    image: './src/assets/cert_iot.jpg',
    verifyUrl: 'https://coursera.org/verify/YRISP6PVVP3M'
  },
  {
    id: 'genai',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'Jan 14, 2025',
    credentialId: 'US1YT9IDFSJB',
    color: 'var(--accent-secondary)',
    image: './src/assets/cert_genai.jpg',
    verifyUrl: 'https://coursera.org/verify/US1YT9IDFSJB'
  },
  {
    id: 'python-ai',
    title: 'Python using AI Workshop',
    issuer: 'AI for Techies',
    date: 'Oct 26, 2025',
    credentialId: 'AIFT-PYAI-2025',
    color: 'var(--success)',
    image: './src/assets/cert_python_ai.jpg',
    verifyUrl: ''
  }
];

const locales = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navCertifications: 'Certifications',
    navContact: 'Contact',
    
    heroGreeting: "Hi, I'm",
    heroTypingPrefix: "I am a ",
    heroDesc: "I am a passionate Software Developer specializing in building full-stack web applications and cross-platform mobile apps. I love creating responsive user interfaces and practical solutions using React, Node.js, and Flutter.",
    heroBtnResume: "View Resume",
    heroBtnContact: "Get in Touch",
    
    aboutSub: "Get to know me",
    aboutTitle: "About Me",
    aboutBio: "I am a passionate developer specializing in mobile Apps and Web Development. I enjoy building practical solutions that solve real-world problems. With experience across responsive frontend interfaces (React, Flutter) and backend integration (Node.js, MongoDB), I focus on performance, cleanliness, and developer experience.",
    aboutGoalsTitle: "Career Goals",
    aboutGoals: "My goal is to construct robust software products that simplify human tasks. I am eager to join dynamic engineering teams where I can contribute my skills in Flutter, full-stack JavaScript frameworks, and efficient database management to build impactful applications.",
    aboutLoc: "Location",
    aboutMail: "Email",
    aboutDegree: "Education",
    aboutDesignation: "Interests",
    
    skillsSub: "My Technical Stack",
    skillsTitle: "Skills & Proficiency",
    skillsRadarTitle: "Skills Radar Map",
    radarHoverText: "Hover vertices to view details",
    
    projectsSub: "My Recent Work",
    projectsTitle: "Projects Showcase",
    projectsFilterAll: "All",
    projectsCaseStudy: "Case Study",
    projectsLiveDemo: "Live Demo",
    
    expSub: "Experience & Education",
    expTitle: "Professional Timeline",
    
    certSub: "Licenses & Accomplishments",
    certTitle: "Certifications",
    certClickPreview: "Click card to preview certification document",
    
    contactSub: "Contact Information",
    contactTitle: "Let's Connect",
    visitorText: "Profile Visitors",

    resumeModalTitle: "Resume Preview",
    resumePrint: "Print",
    resumeDownload: "Download PDF",
    resumeDesignation: "Full Stack & Apps Developer",
    resumeSummaryTitle: "Professional Summary",
    resumeSummary: "Highly motivated and results-oriented software developer with a strong foundation in building high-performance mobile applications, responsive web applications, and backend REST APIs. Expert in writing clean, modular code, solving complex technical issues, and launching scalable digital products.",
    resumeExpTitle: "Professional Experience",
    resumeEduTitle: "Education",

    csProblem: "Problem Statement",
    csSolution: "The Solution",
    csChallenges: "Technical Bottlenecks & Decisions",
    csArchitecture: "Architecture Diagram",
    csImpact: "Impact & Key Results"
  },
  hi: {
    navHome: 'मुख्य पृष्ठ',
    navAbout: 'मेरे बारे में',
    navSkills: 'कौशल',
    navProjects: 'परियोजनाएं',
    navExperience: 'अनुभव',
    navCertifications: 'प्रमाणपत्र',
    navContact: 'संपर्क',
    heroGreeting: "नमस्ते, मैं हूँ",
    heroTypingPrefix: "मैं एक ",
    heroDesc: "मैं एक उत्साही सॉफ्टवेयर डेवलपर हूँ जो फुल-स्टैक वेब एप्लिकेशन और क्रॉस-प्लेटफॉर्म मोबाइल ऐप बनाने में विशेषज्ञता रखता हूँ। मुझे रिएक्ट, नोड.जेएस और फ्लटर का उपयोग करके उत्तरदायी यूजर इंटरफेस और व्यावहारिक समाधान बनाना पसंद है।",
    heroBtnResume: "बायोडाटा देखें",
    heroBtnContact: "संपर्क करें",
    
    aboutSub: "मुझे और जानें",
    aboutTitle: "मेरे बारे में",
    aboutBio: "मैं मोबाइल ऐप्स और वेब डेवलपमेंट में विशेषज्ञता रखने वाला एक उत्साही डेवलपर हूँ। मुझे व्यावहारिक समाधान बनाना पसंद है जो वास्तविक दुनिया की समस्याओं को हल करते हैं। उत्तरदायी फ्रंटएंड इंटरफेस (रिएक्ट, फ्लटर) और बैकएंड एकीकरण (नोड.जेएस, मोंगोडीबी) के अनुभव के साथ, मैं प्रदर्शन, स्वच्छता और डेवलपर अनुभव पर ध्यान केंद्रित करता हूँ।",
    aboutGoalsTitle: "कैरियर के लक्ष्य",
    aboutGoals: "मेरा लक्ष्य मजबूत सॉफ्टवेयर उत्पाद बनाना है जो मानव कार्यों को सरल बनाते हैं। मैं गतिशील इंजीनियरिंग टीमों में शामिल होने के लिए उत्सुक हूँ जहाँ मैं प्रभावशाली एप्लिकेशन बनाने के लिए फ्लटर, फुल-स्टैक जावास्क्रिप्ट फ्रेमवर्क और कुशल डेटाबेस प्रबंधन में अपने कौशल का योगदान दे सकूँ।",
    aboutLoc: "स्थान",
    aboutBio: "मैं मोबाइल ऐप्स और वेब डेवलपमेंट में विशेषज्ञता रखने वाला एक उत्साही डेवलपर हूँ। मुझे व्यावहारिक समाधान बनाना पसंद है जो वास्तविक दुनिया की समस्याओं को हल करते हैं। फ्रंट-एंड रेंडरिंग परतों और बैक-एंड स्केलिंग वातावरण में अनुभव के साथ, मैं प्रदर्शन, स्वच्छता और डेवलपर अनुभव पर ध्यान केंद्रित करता हूँ।",
    aboutGoalsTitle: "कैरियर के लक्ष्य",
    aboutGoals: "मेरा लक्ष्य मजबूत सॉफ़्टवेयर उत्पाद बनाना है जो मानव कार्यों को सरल बनाते हैं। मैं उन गतिशील टीमों में शामिल होने के लिए उत्सुक हूँ जो मोबाइल ऐप्स और उत्तरदायी वेब फ्रेमवर्क में सीमाओं को आगे बढ़ाती हैं।",
    aboutLoc: "स्थान",
    aboutMail: "ईमेल",
    aboutDegree: "शिक्षा",
    aboutDesignation: "रुचियां",
    
    skillsSub: "मेरा तकनीकी स्टैक",
    skillsTitle: "कौशल और दक्षता",
    skillsRadarTitle: "रडार कौशल ग्राफ",
    radarHoverText: "विवरण देखने के लिए शीर्षकों पर माउस ले जाएं",
    
    projectsSub: "मेरा हालिया काम",
    projectsTitle: "परियोजनाएं",
    projectsFilterAll: "सभी",
    projectsCaseStudy: "केस स्टडी",
    projectsLiveDemo: "लाइव डेमो",
    
    expSub: "अनुभव और शिक्षा",
    expTitle: "पेशेवर समयरेखा",
    
    certSub: "लाइसेंस और उपलब्धियां",
    certTitle: "प्रमाणपत्र",
    certClickPreview: "प्रमाणपत्र दस्तावेज देखने के लिए कार्ड पर क्लिक करें",
    
    contactSub: "संपर्क जानकारी",
    contactTitle: "संपर्क करें",
    visitorText: "प्रोफ़ाइल आगंतुक",

    resumeModalTitle: "बायोडाटा पूर्वावलोकन",
    resumePrint: "प्रिंट करें",
    resumeDownload: "डाउनलोड PDF",
    resumeDesignation: "फुल स्टैक और ऐप्स डेवलपर",
    resumeSummaryTitle: "व्यावसायिक सारांश",
    resumeSummary: "अत्यधिक प्रेरित और परिणाम-उन्मुख सॉफ्टवेयर डेवलपर, जिसे मोबाइल ऐप डेवलपमेंट, उत्तरदायी वेब सिस्टम और बैकएंड REST एपीआई एकीकरण में मजबूत अनुभव है। कुशल, स्वच्छ कोड लिखने, तकनीकी समस्याओं को हल करने और स्केलेबल डिजिटल उत्पाद बनाने में कुशल।",
    resumeExpTitle: "व्यावसायिक अनुभव",
    resumeEduTitle: "शिक्षा",

    csProblem: "समस्या का विवरण",
    csSolution: "समाधान",
    csChallenges: "तकनीकी चुनौतियाँ और निर्णय",
    csArchitecture: "आर्किटेक्चर संरचना",
    csImpact: "प्रभाव और परिणाम"
  }
};

// ==========================================
// 2. STATE MANAGER
// ==========================================

let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';
let currentLang = localStorage.getItem('portfolio_lang') || 'en';
let activeFilter = 'All';
let typingIdx = 0;
let typingSub = '';
let isDeleting = false;

// ==========================================
// 3. CORE ENGINES INITIALIZATION
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
  // Fadeout initial loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    }
  }, 1000);

  // Setup current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Initialize all sections & widgets
  initTheme();
  initLanguage();
  initVisitorCounter();
  initParticlesCanvas();
  initTypewriter();
  initRadarChart();
  renderSkills();
  renderProjects();
  renderCertifications();
  initScrollTracker();
});

// Scroll Event handlers
function initScrollTracker() {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
  const backToTopBtn = document.getElementById('back-to-top');
  const progressBar = document.getElementById('progress-bar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // 1. Scroll Progress Bar
    if (progressBar) progressBar.style.width = scrolled + '%';

    // 2. Back to top button
    if (winScroll > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }

    // 3. Scroll spy highlight
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('onclick').includes(sectionId)) {
              link.classList.add('active');
            }
          });
          break;
        }
      }
    }
  });
}

function scrollToSection(id) {
  const navLinksList = document.getElementById('nav-links');
  if (navLinksList) navLinksList.classList.remove('mobile-active');

  const element = document.getElementById(id);
  if (element) {
    const offset = 70; // Header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function toggleMobileMenu() {
  const navLinksList = document.getElementById('nav-links');
  if (navLinksList) {
    navLinksList.classList.toggle('mobile-active');
  }
}

// ==========================================
// 4. THEME & LANGUAGE SWITCHER
// ==========================================

function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  renderThemeToggleIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('portfolio_theme', currentTheme);
  renderThemeToggleIcon();
}

function renderThemeToggleIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (currentTheme === 'light') {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  } else {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
  }
}

function initLanguage() {
  translatePage();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('portfolio_lang', currentLang);
  translatePage();
}

function translatePage() {
  const dict = locales[currentLang];
  
  document.getElementById('lang-label').textContent = currentLang === 'en' ? 'HI' : 'EN';
  
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  const searchSkills = document.getElementById('skills-search');
  if (searchSkills) searchSkills.placeholder = currentLang === 'en' ? 'Search skills (e.g. React, Python)...' : 'कौशल खोजें (उदा. React, Python)...';

  const searchProjects = document.getElementById('projects-search');
  if (searchProjects) searchProjects.placeholder = currentLang === 'en' ? 'Search projects by name or technology...' : 'नाम या तकनीक द्वारा परियोजनाएं खोजें...';
}

// ==========================================
// 5. CANVAS PARTICLES
// ==========================================

function initParticlesCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let particles = [];
  let animationId;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setup();
  };

  const setup = () => {
    const density = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 80);
    particles = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const pColor = isDark ? 'rgba(129, 140, 248, 0.3)' : 'rgba(79, 70, 229, 0.2)';
    const lColor = isDark ? 'rgba(129, 140, 248, 0.06)' : 'rgba(79, 70, 229, 0.04)';

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = pColor;
      ctx.fill();
    });

    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lColor;
          ctx.lineWidth = 1 - dist / maxDist;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize);
  resize();
  draw();
}

// ==========================================
// 6. TYPEWRITER EFFECT
// ==========================================

function initTypewriter() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const titles = [
    'Full Stack Developer',
    'Flutter Developer'
  ];

  const tick = () => {
    const active = titles[typingIdx];
    if (!isDeleting) {
      typingSub = active.substring(0, typingSub.length + 1);
      el.textContent = typingSub;
      if (typingSub.length === active.length) {
        isDeleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      typingSub = active.substring(0, typingSub.length - 1);
      el.textContent = typingSub;
      if (typingSub.length === 0) {
        isDeleting = false;
        typingIdx = (typingIdx + 1) % titles.length;
        setTimeout(tick, 300);
        return;
      }
    }

    const speed = isDeleting ? 30 : 70;
    setTimeout(tick, speed);
  };

  tick();
}

// ==========================================
// 7. SVG RADAR CHART
// ==========================================

const radarSkills = [
  { subject: 'Flutter', value: 92, category: 'Frontend' },
  { subject: 'Web Dev', value: 88, category: 'Frontend' },
  { subject: 'REST APIs', value: 86, category: 'Backend' },
  { subject: 'Node.js', value: 80, category: 'Backend' },
  { subject: 'Database', value: 75, category: 'Backend' },
  { subject: 'Git & Tools', value: 90, category: 'Tools' }
];

function initRadarChart() {
  const svg = document.getElementById('radar-chart-svg');
  if (!svg) return;

  const size = 320;
  const center = size / 2;
  const radius = 110;
  const total = radarSkills.length;

  const getCoord = (idx, percent) => {
    const angle = (idx * 2 * Math.PI) / total - Math.PI / 2;
    const r = radius * (percent / 100);
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  let html = '';

  const gridLevels = [20, 40, 60, 80, 100];
  gridLevels.forEach(level => {
    const pts = radarSkills.map((_, i) => {
      const { x, y } = getCoord(i, level);
      return `${x},${y}`;
    }).join(' ');
    html += `<polygon points="${pts}" fill="none" stroke="var(--timeline-line)" stroke-width="1" stroke-dasharray="${level === 100 ? 'none' : '4,4'}" opacity="0.5" />`;
  });

  radarSkills.forEach((_, i) => {
    const outer = getCoord(i, 100);
    html += `<line x1="${center}" y1="${center}" x2="${outer.x}" y2="${outer.y}" stroke="var(--timeline-line)" stroke-width="1.5" opacity="0.6" />`;
  });

  const filledPts = radarSkills.map((s, i) => {
    const { x, y } = getCoord(i, s.value);
    return `${x},${y}`;
  }).join(' ');
  html += `<polygon points="${filledPts}" fill="var(--accent-glow-strong)" stroke="var(--accent)" stroke-width="2.5" />`;

  radarSkills.forEach((s, i) => {
    const coord = getCoord(i, s.value);
    const labelCoord = getCoord(i, 115);
    const anchor = labelCoord.x > center ? 'start' : labelCoord.x < center ? 'end' : 'middle';

    html += `
      <g class="radar-node" onmouseenter="showRadarTooltip(${i})" onmouseleave="hideRadarTooltip()">
        <circle cx="${coord.x}" cy="${coord.y}" r="5" fill="var(--accent)" stroke="var(--bg-primary)" stroke-width="1.5" style="cursor:pointer;" />
        <text x="${labelCoord.x}" y="${labelCoord.y + 4}" text-anchor="${anchor}" fill="var(--text-primary)" font-size="11px" font-weight="700">${s.subject}</text>
      </g>
    `;
  });

  svg.innerHTML = html;
}

function showRadarTooltip(idx) {
  const tooltip = document.getElementById('radar-tooltip');
  if (!tooltip) return;
  const s = radarSkills[idx];
  tooltip.innerHTML = `
    <span style="font-size: 14px; font-weight: 800; color: var(--text-primary);">${s.subject} (${s.category})</span>
    <span style="font-size: 13px; color: var(--accent); font-weight: 700;">Proficiency: ${s.value}%</span>
  `;
  tooltip.style.opacity = '1';
}

function hideRadarTooltip() {
  const tooltip = document.getElementById('radar-tooltip');
  if (!tooltip) return;
  tooltip.innerHTML = `<span style="font-size: 13px; color: var(--text-muted);">${locales[currentLang].radarHoverText}</span>`;
  tooltip.style.opacity = '0.6';
}

// ==========================================
// 8. RENDER LISTS & CARDS
// ==========================================

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const query = document.getElementById('skills-search').value.toLowerCase();

  let html = '';
  skillsData.forEach(cat => {
    const filtered = cat.items.filter(s => s.name.toLowerCase().includes(query));
    if (filtered.length === 0) return;

    html += `
      <div class="glass-card" style="text-align: left;">
        <h3 class="skill-category-title">
          ${cat.icon}
          ${cat.category}
        </h3>
        <div class="skills-list">
          ${filtered.map(s => `
            <div class="skill-item">
              <div class="skill-info">
                <span style="color: var(--text-primary);">${s.name}</span>
                <span style="color: var(--accent);">${s.level}%</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  if (html === '') {
    html = `<div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p style="color: var(--text-muted)">No skills match search query</p></div>`;
  }
  container.innerHTML = html;
}

function filterSkills() {
  renderSkills();
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const searchQuery = document.getElementById('projects-search').value.toLowerCase();

  let html = '';
  projectsData.forEach(p => {
    const matchesTab = activeFilter === 'All' || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery) || p.techs.some(t => t.toLowerCase().includes(searchQuery));
    if (!matchesTab || !matchesSearch) return;

    html += `
      <div class="glass-card project-card">
        <div class="project-img-wrapper" style="background: ${p.gradient}; display: flex; align-items: center; justify-content: center;">
          ${p.graphic}
          <div class="project-tags">
            <span class="project-tag">${p.category}</span>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-techs">
            ${p.techs.map(t => `<span class="project-tech">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="project-btn btn-secondary" onclick="openCaseStudy('${p.id}')">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              <span>Case Study</span>
            </button>
            <a href="${p.demoUrl}" target="_blank" class="project-btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              <span>Live Demo</span>
            </a>
            <a href="${p.githubUrl}" target="_blank" class="project-btn btn-secondary" style="padding: 8px;" title="Source Code">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  });

  if (html === '') {
    html = `<div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p style="color: var(--text-muted)">No projects match filters</p></div>`;
  }
  container.innerHTML = html;
}

function filterProjectsTab(tab) {
  activeFilter = tab;
  document.querySelectorAll('.projects-filter-bar button').forEach(b => b.classList.remove('active'));
  
  if (tab === 'All') document.getElementById('filter-all').classList.add('active');
  if (tab === 'Apps') document.getElementById('filter-apps').classList.add('active');
  if (tab === 'Web') document.getElementById('filter-web').classList.add('active');

  renderProjects();
}

function filterProjectsSearch() {
  renderProjects();
}

function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = certificatesData.map(c => `
    <div class="glass-card" style="cursor: pointer; border-left: 4px solid ${c.color}; text-align: left; display: flex; flex-direction: column; justify-content: space-between; min-height: 160px;" onclick="openCertificate('${c.id}')">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award" style="margin-bottom: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        <h3 style="font-size: 16px; font-weight: 750; margin-bottom: 6px;">${c.title}</h3>
        <p style="font-size: 13px; color: var(--text-muted);">${c.issuer}</p>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 12px;">
        <span style="color: var(--text-muted); font-weight: 600;">${c.date}</span>
        <span style="color: ${c.color}; font-weight: 700; display: flex; align-items: center; gap: 4px;">
          Verify
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        </span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 9. MODALS SYSTEM
// ==========================================

function openResume() {
  document.getElementById('resume-modal').style.display = 'flex';
}

function closeResume() {
  document.getElementById('resume-modal').style.display = 'none';
}

function downloadResume() {
  const element = document.getElementById('resume-sheet');
  const opt = {
    margin:       [5, 5, 5, 5],
    filename:     'Ganesh_Nanda_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

function openCaseStudy(id) {
  const p = projectsData.find(item => item.id === id);
  if (!p) return;
  const cs = p.caseStudy;

  document.getElementById('cs-title').textContent = `${p.title} Case Study`;
  document.getElementById('cs-category').textContent = cs.category;
  document.getElementById('cs-problem').textContent = cs.problem;
  document.getElementById('cs-problem-solution').textContent = cs.solution;

  document.getElementById('cs-challenges-list').innerHTML = cs.challenges.map(c => `
    <li style="margin-bottom: 6px; color: var(--text-secondary);">${c}</li>
  `).join('');

  document.getElementById('cs-architecture-flow').innerHTML = cs.architecture.map((a, i) => `
    <div style="padding: 6px 12px; background: var(--card-bg); border: 1px solid var(--accent); border-radius: 4px; font-weight: bold;">${a}</div>
    ${i < cs.architecture.length - 1 ? '<span style="color: var(--accent);">➡</span>' : ''}
  `).join('');

  document.getElementById('cs-metrics-container').innerHTML = cs.metrics.map(m => `
    <div style="padding: 8px 12px; border-radius: 6px; background-color: var(--accent-glow); color: var(--accent); font-weight: 700; font-size: 13px;">${m}</div>
  `).join('');

  document.getElementById('case-study-modal').style.display = 'flex';
}

function closeCaseStudy() {
  document.getElementById('case-study-modal').style.display = 'none';
}

function openCertificate(id) {
  const cert = certificatesData.find(c => c.id === id);
  if (!cert) return;

  // Set the image src
  document.getElementById('cert-preview-img').src = cert.image;

  // Toggle display and set link for external verification
  const verifyLink = document.getElementById('cert-verify-link');
  if (verifyLink) {
    if (cert.verifyUrl) {
      verifyLink.href = cert.verifyUrl;
      verifyLink.style.display = 'inline-flex';
    } else {
      verifyLink.style.display = 'none';
    }
  }

  document.getElementById('certificate-modal').style.display = 'flex';
}

function closeCertificate() {
  document.getElementById('certificate-modal').style.display = 'none';
}

// ==========================================
// 10. METRICS & COUNTERS
// ==========================================

function initVisitorCounter() {
  const visitorCountEl = document.getElementById('visitor-count-el');
  if (!visitorCountEl) return;

  const currentCount = parseInt(localStorage.getItem('portfolio_visitors') || '0') + 1;
  localStorage.setItem('portfolio_visitors', currentCount.toString());
  visitorCountEl.textContent = currentCount;
}
