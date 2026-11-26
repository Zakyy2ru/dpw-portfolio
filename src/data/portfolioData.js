export const profileData = {
  brand: "DPW.",
  name: "Dzaky Putra Wahyudi",
  avatar: "/projects/profile-dzaky.png",
  status: "OPEN TO WORK",
  headlineTop: "Junior Full-Stack",
  headlineAccent: "Web Developer.",
  role: "Informatics Graduate • Web Development & System Analysis",
  bio: "As a recent Informatics graduate from Universitas Gunadarma, I am passionate about building end-to-end web applications, structured database systems, and data-driven solutions. With hands-on academic and personal project experience across full-stack development, system analysis, and machine learning, I am eager to grow, adapt quickly, and contribute to a collaborative engineering team.",
  pillars: [
    "Full-Stack Web Development",
    "System Analysis & Database Design",
    "Machine Learning & Data Modeling",
    "Functional & Quality Testing",
  ],
  email: "dzaky7205@gmail.com",
  whatsapp: "https://wa.me/6287750598859?text=Halo%20Dzaky,%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
  github: "https://github.com/Zakyy2ru",
  linkedin: "https://linkedin.com/in/dzaky-putra-wahyudi-62196943a",
  cvFiles: {
    en: "/CV_Dzaky_Putra_Wahyudi_EN.pdf",
    id: "/CV_Dzaky_Putra_Wahyudi_ID.pdf",
  },
};

export const projectsData = [
  {
    id: "valorant-role-recommender",
    number: "01",
    category: "MACHINE LEARNING / WEB APP",
    title: "Valorant Role Recommender",
    shortDesc:
      "An undergraduate thesis web application that recommends optimal Valorant agent roles using 9 competitive player metrics and side-by-side KNN vs Random Forest model comparison.",
    fullDesc:
      "Built as an Informatics undergraduate thesis project at Universitas Gunadarma. The system evaluates 9 competitive statistics from Tracker.gg (KDA, Winrate, ACS, Kills/Round, Assists/Round, Deaths/Round, First Blood/Round, Headshot %, and Clutch %) to classify players into Duelist, Initiator, Controller, or Sentinel roles with interactive radar chart visualization and an admin tournament management panel.",
    techStack: ["Python", "Flask", "Scikit-Learn", "MySQL"],
    images: [
      "/projects/valorant-homepage.png",
      "/projects/valorant-statistik.png",
      "/projects/valorant-recommender.png",
    ],
    invertImage: false,
    githubUrl: "https://github.com/Zakyy2ru/valorant-role-analisis",
    liveDemoUrl: "",
    metrics: [
      { label: "KNN Test Accuracy", value: "96.67%" },
      { label: "Input Parameters", value: "9 Metrics" },
      { label: "Models Evaluated", value: "KNN, RF & Autoencoder" },
    ],
    highlights: [
      "Trained and benchmarked K-Nearest Neighbors (K=5) and Random Forest models on 100 Tracker.gg player match records, plus Autoencoder feature extraction experiments.",
      "Built an interactive player profiling dashboard displaying a 9-axis radar chart, AI confidence score, role characteristics, and specific agent recommendations.",
      "Implemented role-based authentication and a Strategic Command admin dashboard (VALOADMIN) to manage VCT tournament updates and registered users.",
    ],
  },
  {
    id: "zkcell-pos-ppob",
    number: "02",
    category: "FULL-STACK / POS & PPOB",
    title: "ZKCELL Counter System",
    shortDesc:
      "A real-time Point of Sale and PPOB operational platform for cellular counters, featuring cashier shift cash reconciliation, QRIS webhook simulation, and Digiflazz integration.",
    fullDesc:
      "Designed and engineered an end-to-end counter operational system separating Cashier and Owner workflows. Supports mobile top-ups, PLN electricity tokens, bill payments, e-wallets, and bank transfers with real-time Socket.io status tracking, idempotent transaction safeguards, and automated profit reporting.",
    techStack: ["React", "Node.js", "MySQL", "Socket.io"],
    images: [
      "/projects/zkcell-pos.png",
      "/projects/zkcell-co.png",
      "/projects/zkcell-laporan.png",
    ],
    invertImage: false,
    githubUrl: "https://github.com/Zakyy2ru/zkcell-pos-ppob",
    liveDemoUrl: "",
    metrics: [
      { label: "Catalog Items", value: "51 Services" },
      { label: "Checkout Flow", value: "3-Step POS" },
      { label: "Realtime Sync", value: "REST + Socket.io" },
    ],
    highlights: [
      "Engineered cashier shift management requiring initial drawer cash input and physical cash reconciliation before closing shifts.",
      "Built a 3-step checkout pipeline supporting both Cash and automatic QRIS payments with webhook verification and printable digital receipts.",
      "Developed Owner analytics tracking 7-day revenue trends, gross profit margins, agent balance thresholds, and API integration health (Digiflazz & Payment Gateway).",
    ],
  },
  {
    id: "edugrade-eraport",
    number: "03",
    category: "WEB APPLICATION / ACADEMIC",
    title: "EduGrade E-Raport",
    shortDesc:
      "A multi-role academic grade processing and digital report card web system with automated weighted score calculation and one-click PDF transcript generation.",
    fullDesc:
      "Developed a structured academic information system serving Administrators, Subject Teachers, and Students. Automates final grade calculation from coursework, midterm, and final exam weights while providing role-specific dashboards and downloadable PDF grade reports.",
    techStack: ["Python", "Flask", "MySQL", "JavaScript"],
    images: [
      "/projects/edugrade-log.png",
      "/projects/edugrade-dash.png",
      "/projects/edugrade-eraport.png",
    ],
    invertImage: false,
    githubUrl: "https://github.com/Zakyy2ru/edugrade-eraport",
    liveDemoUrl: "",
    metrics: [
      { label: "User Roles", value: "Admin, Guru, Siswa" },
      { label: "Grading Formula", value: "30% / 30% / 40%" },
      { label: "Export Format", value: "Automated PDF" },
    ],
    highlights: [
      "Implemented 3-tier role-based access control separating Admin master CRUD, Teacher score input, and Student grade portal views.",
      "Automated final score computation (30% Assignment + 30% Midterm + 40% Final Exam) and pass/fail status classification.",
      "Built structured relational models (Guru, Siswa, Nilai) in MySQL with search filtering and PDF grade report downloads.",
    ],
  },
  {
    id: "school-company-profile",
    number: "04",
    category: "SYSTEM ANALYSIS / DATABASE DESIGN",
    title: "School Company Profile & PPDB Portal",
    shortDescription:
      "System architecture modeling and relational database design for a school company profile and online student admission (PPDB) web portal.",
    overview:
      "Served as a System Analyst responsible for modeling system behavior and designing the underlying relational database for a School Company Profile and Online Student Admission (PPDB) portal. Translated functional requirements into structured navigation hierarchies, behavioral and structural UML diagrams, and normalized database table specifications for both public visitors and school administrators.",
    techStack: ["UML", "Class Diagram", "Activity Diagram", "Database Design", "SQL"],
    images: [
      "/projects/school-system-analysis.png",
      "/projects/school-usecase.png",
      "/projects/school-activity.png",
    ],
    invertImage: true,
    githubUrl: "https://github.com/Zakyy2ru/school-company-profile",
    liveDemoUrl: "",
    metrics: [
      { label: "UML ARTIFACTS", value: "12+ Diagrams" },
      { label: "DATABASE SCHEMA", value: "8 Core Tables" },
      { label: "USER ROLES", value: "Public & Admin" },
    ],
    highlights: [
      "Mapped end-to-end User and Administrator Navigation Structures covering school profile, PPDB admissions, news, gallery, alumni, and student growth charts.",
      "Authored Use Case Diagrams, Class Diagrams, and 10+ Activity Diagrams detailing public browsing workflows and admin content management modules.",
      "Designed an 8-table relational database schema (admin, visi_misi, struktur_guru, ppdb, berita, galeri, alumni, grafik_murid) with complete data types, constraints, and primary keys.",
    ],
  },
];

export const skillsData = [
  {
    category: "Backend",
    icon: "Terminal",
    items: ["Python", "Flask", "FastAPI", "Node.js", "PHP", "REST API"],
  },
  {
    category: "Frontend",
    icon: "Code2",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Database & DevOps",
    icon: "Database",
    items: ["MySQL", "SQLite", "Docker", "Git", "Socket.io"],
  },
  {
    category: "System Analysis",
    icon: "GitBranch",
    items: ["Requirements", "UML", "Flowchart", "Database Design", "Figma", "Blackbox Test"],
  },
];

export const achievementsData = [
  {
    year: "2022 - 2026",
    category: "ACADEMIC MILESTONE",
    title: "Bachelor of Informatics (S.Kom) — GPA 3.59 / 4.00",
    organization: "Universitas Gunadarma",
    description:
      "Completed undergraduate studies with a thesis on machine learning classification for Valorant player role recommendation, bridging data modeling with full-stack Flask deployment.",
  },
  {
    year: "2026",
    category: "NATIONAL CERTIFICATION (BNSP)",
    title: "Certified Competency in Programmer (Occupation of Programmer)",
    organization: "Badan Nasional Sertifikasi Profesi (BNSP) • LSP Universitas Gunadarma",
    credentialId: "Reg. No. TIK.705.02007.2026 (Valid until July 2029)",
    credentialUrl: "/sertifikat-bnsp.pdf",
    description:
      "Certified competent across 9 SKKNI competency units: structured & object-oriented programming, database access implementation, coding best practices, code documentation, debugging, and unit testing.",
  },
  {
    year: "2022 – 2026",
    category: "TECHNICAL TRAINING",
    title: "Technical Workshops & Database Administration Training",
    organization: "Universitas Gunadarma (LePKom)",
    credentialId: "9 Certified Workshops",
    credentialLabel: "View Certificates (Drive)",
    credentialUrl: "https://drive.google.com/drive/folders/1mvszNgI0muEIO76H4oog2XmAgGloVqXr?usp=sharing",
    description:
      "Completed intensive technical training covering Application Implementation & Development, JavaScript Programming Fundamentals, Enterprise Resource Planning (ERP) Fundamentals, and relational database administration with Oracle & SQL Server (Beginner to Intermediate).",
  },
 {
    year: "2024 – 2025",
    category: "TEAM & LEADERSHIP",
    title: "Collegiate Valorant Player & Tournament Medalist",
    organization: "UKM Esports Universitas Gunadarma",
    credentialId: "4 Verified Certificates (Selection & Podiums)",
    credentialLabel: "View Certificates (Drive)",
    credentialUrl: "https://drive.google.com/drive/folders/1DzDCD0ehSoQgYZRA0IYtvfIUAzS4hI08?usp=sharing",
    description:
      "Selected as an official Valorant roster player for UKM Esports Universitas Gunadarma, securing 2nd Place at Liga E-Sport PKN STAN 2025 and 3rd Place at Eclipse Valorant Tournament. Also formed and led a peer squad as In-Game Leader (IGL) to win 1st Place at the Informatics Department's HIMTI Cup 2024–2025.",
  },
];