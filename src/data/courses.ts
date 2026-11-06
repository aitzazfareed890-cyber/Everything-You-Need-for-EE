export interface CourseResource {
  id: string;
  name: string;
  code: string;
  shortName: string;
  semester: number;
  creditHours: string;
  driveUrl?: string;
  notesCount: string;
  papersCount: string;
  labsCount: string;
  description: string;
  topics: string[];
}

export const CREATOR_INSTAGRAM_URL =
  'https://www.instagram.com/aitzaz_fareed?exln=MWZ4c2IzcWlva3NiYg==';

// Direct Google Drive folder links provided by the user
export const USER_DRIVE_LINKS = {
  AP: 'https://drive.google.com/drive/folders/1sc9JO4juKQIhTmMJVnaFoTVuELJj4cXA?usp=sharing',
  BME: 'https://drive.google.com/drive/folders/1x5vxHpYTB4mogUDqA5kOGciBWEC54-_P?usp=sharing',
  CP: 'https://drive.google.com/drive/folders/1JTX20_DoH6vx9_bt7piVoiPTnDK6B4of?usp=sharing',
  WPL: 'https://drive.google.com/drive/folders/1zlfwb-KFK1JF4C2lfBkhQtg6-FvcibBe?usp=sharing',
  UOQ: 'https://drive.google.com/drive/folders/1zFh8fIUE_ZZ5BRZmtd0AEQY4FSMYh045?usp=sharing',
  OHS: 'https://drive.google.com/drive/folders/1j947PMAbY13UG_B2zovzc8_HQ6OWozmt?usp=sharing',
  ICT: 'https://drive.google.com/drive/folders/1TBKJfRcDUpg71GCGI4fH3WWhtxwvPjIi?usp=sharing',
  CALCULUS: 'https://drive.google.com/drive/folders/14e1ZoVxjykQsVzaxzAqeVpMlrPgGuPJP?usp=sharing',
};

export const COURSES: CourseResource[] = [
  // ==================== SEMESTER 1 (26-EE Session Timetable Fall 2026) ====================
  {
    id: 'ap',
    name: 'Applied Physics',
    shortName: 'AP',
    code: 'GS-101',
    semester: 1,
    creditHours: '3+0',
    driveUrl: USER_DRIVE_LINKS.AP,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Optics, interference, diffraction, quantum concepts, band theory of solids, semiconductor physics, and laser fundamentals.',
    topics: ['Optics & Interference', 'Diffraction', 'Semiconductors', 'Lasers', 'Modern Physics']
  },
  {
    id: 'calculus',
    name: 'Calculus & Analytical Geometry',
    shortName: 'C & AG',
    code: 'GS-102',
    semester: 1,
    creditHours: '3+0',
    driveUrl: USER_DRIVE_LINKS.CALCULUS,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Limits, continuity, techniques of differentiation and integration, polar coordinates, vectors, analytical geometry, and multivariable basics.',
    topics: ['Limits & Continuity', 'Integration Techniques', 'Analytical Geometry', 'Vector Calculus', 'Infinite Series']
  },
  {
    id: 'ict',
    name: 'Application of ICT',
    shortName: 'ICT',
    code: 'CS-103',
    semester: 1,
    creditHours: '2+1',
    driveUrl: USER_DRIVE_LINKS.ICT,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Computer Simulation (ICT-L)',
    description: 'Information and communication technology, computer systems, operating systems, networking fundamentals, software tools, and simulation.',
    topics: ['Computer Architecture', 'Operating Systems', 'Networking Basics', 'Simulation Tools', 'Digital Tools']
  },
  {
    id: 'cp_sem1',
    name: 'Computer Programming',
    shortName: 'CP',
    code: 'CS-104',
    semester: 1,
    creditHours: '2+1',
    driveUrl: USER_DRIVE_LINKS.CP,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Code Tasks',
    description: 'Programming fundamentals in C++, control structures, functions, arrays, pointers, memory allocation, and problem-solving.',
    topics: ['C++ Syntax', 'Pointers & Memory', 'Loops & Decisions', 'Arrays & Strings', 'Functions & Recursion']
  },
  {
    id: 'bme',
    name: 'Basic Mechanical Engineering',
    shortName: 'BME',
    code: 'ME-105',
    semester: 1,
    creditHours: '3+0',
    driveUrl: USER_DRIVE_LINKS.BME,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Thermodynamics fundamentals, heat transfer, power cycles, IC engines, fluid mechanics principles, and mechanical transmission systems.',
    topics: ['Thermodynamics Laws', 'Heat Transfer', 'IC Engines', 'Fluid Mechanics', 'Power Transmission']
  },
  {
    id: 'wp',
    name: 'Workshop Practice Lab',
    shortName: 'WP-L',
    code: 'ME-106L',
    semester: 1,
    creditHours: '0+1',
    driveUrl: USER_DRIVE_LINKS.WPL,
    notesCount: 'Manuals & Guides',
    papersCount: 'Viva Guides',
    labsCount: 'Workshop & Projects (WP-L)',
    description: 'Practical hands-on training in machine shop, carpentry, fitting, welding, electrical wiring, and engineering fabrication safety.',
    topics: ['Fitting Shop', 'Carpentry Shop', 'Welding & Soldering', 'Machine Tools', 'Safety Protocols']
  },
  {
    id: 'ohs',
    name: 'Occupational Health and Safety',
    shortName: 'OHS',
    code: 'MS-107',
    semester: 1,
    creditHours: '1+0',
    driveUrl: USER_DRIVE_LINKS.OHS,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Industrial safety principles, hazard identification, risk assessment, electrical hazard mitigation, emergency protocols, and OSHA standards.',
    topics: ['Hazard Identification', 'Risk Assessment', 'Electrical Safety', 'Emergency Response', 'Industrial Standards']
  },
  {
    id: 'uoq1',
    name: 'Understanding of Holy Quran – I',
    shortName: 'UoHQ-I',
    code: 'IS-108',
    semester: 1,
    creditHours: '1+0',
    driveUrl: USER_DRIVE_LINKS.UOQ,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Study of designated Surahs, translation, context of revelation, ethical lessons, and practical teachings for professional life.',
    topics: ['Tafseer & Translation', 'Ethical Lessons', 'Context of Revelation', 'Personal Character']
  },
  {
    id: 'fe',
    name: 'Functional English',
    shortName: 'FE',
    code: 'HS-109',
    semester: 1,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Grammar essentials, technical vocabulary, comprehension, formal letter writing, technical summaries, and presentation skills.',
    topics: ['Technical Writing', 'Grammar Essentials', 'Comprehension', 'Presentation Delivery']
  },

  // ==================== SEMESTER 2 (25-EE Session Timetable Spring 2026) ====================
  {
    id: 'lca',
    name: 'Linear Circuit Analysis',
    shortName: 'LCA',
    code: 'EE-121',
    semester: 2,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Basic Electrical Eng (LCA-L)',
    description: 'Ohm law, Kirchhoff laws, nodal and mesh analysis, network theorems (Thevenin, Norton, Superposition, Maximum Power Transfer), RL/RC/RLC transient response, and sinusoidal steady-state AC analysis.',
    topics: ['Nodal & Mesh Analysis', 'Thevenin & Norton Theorems', 'Superposition Principle', 'RLC Transient Circuits', 'AC Steady-State Analysis']
  },
  {
    id: 'dld_sem2',
    name: 'Digital Logic Design',
    shortName: 'DLD',
    code: 'EE-122',
    semester: 2,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Digital Systems (DLD-L)',
    description: 'Number systems, Boolean algebra, Karnaugh maps (K-map), combinational circuits (multiplexers, decoders, adders), flip-flops (JK, D, T), registers, synchronous counters, and finite state machines (FSM).',
    topics: ['K-Map Minimization', 'Combinational Logic', 'Flip-Flops & Latches', 'Synchronous Counters', 'FSM State Diagrams']
  },
  {
    id: 'ed_drawing',
    name: 'Engineering Drawing Lab',
    shortName: 'ED',
    code: 'EE-123L',
    semester: 2,
    creditHours: '0+1',
    notesCount: 'CAD Tutorials',
    papersCount: 'Drawing Tasks',
    labsCount: 'Power Systems Simulation (ED-L)',
    description: 'AutoCAD electrical drafting, single-line diagrams (SLD), schematic layouts, projection techniques, electrical substation symbols, wiring diagrams, and CAD dimensioning standards.',
    topics: ['AutoCAD Electrical', 'Single Line Diagrams (SLD)', 'Schematic Layouts', 'Orthographic Projection', 'Substation Standards']
  },
  {
    id: 'cp_sem2',
    name: 'Computer Programming',
    shortName: 'CP',
    code: 'CS-124',
    semester: 2,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Computer Simulation (CP-L)',
    description: 'Advanced C++ and object-oriented programming (OOP), classes, objects, constructor/destructor, inheritance, polymorphism, operator overloading, dynamic pointers, and file streaming.',
    topics: ['OOP Principles', 'Classes & Objects', 'Inheritance & Polymorphism', 'Dynamic Memory Management', 'File Streaming']
  },
  {
    id: 'de_sem2',
    name: 'Differential Equations',
    shortName: 'DE',
    code: 'GS-125',
    semester: 2,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'First order ordinary differential equations, separable, exact, and linear ODEs, higher order linear ODEs with constant coefficients, undetermined coefficients, variation of parameters, and Laplace transforms.',
    topics: ['First Order ODEs', 'Exact Equations', 'Homogeneous Linear ODEs', 'Variation of Parameters', 'Laplace Transforms']
  },
  {
    id: 'icp_sem2',
    name: 'Ideology and Constitution of Pakistan',
    shortName: 'ICP',
    code: 'HS-126',
    semester: 2,
    creditHours: '2+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Historical evolution of the two-nation theory, Pakistan movement, political history, structure and fundamental rights under the 1973 Constitution, parliamentary system, and contemporary governance.',
    topics: ['Ideology of Pakistan', '1973 Constitution', 'Fundamental Human Rights', 'Constitutional Amendments', 'National Institutions']
  },

  // ==================== SEMESTER 3 (25-EE Session Timetable Fall 2026) ====================
  {
    id: 'ena',
    name: 'Electrical Network Analysis',
    shortName: 'ENA',
    code: 'EE-211',
    semester: 3,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Basic Electrical Eng (ENA-L)',
    description: 'AC sinusoidal steady-state analysis, phasors, impedance, frequency response, resonance, three-phase systems, two-port networks, and coupled circuits.',
    topics: ['Phasors & AC Power', 'Resonance', 'Three-Phase Systems', 'Two-Port Networks', 'Coupled Circuits']
  },
  {
    id: 'edc',
    name: 'Electronic Devices and Circuits',
    shortName: 'EDC',
    code: 'EE-212',
    semester: 3,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Electronics Lab (EDC-L)',
    description: 'BJT biasing and small-signal AC modeling, Field Effect Transistors (JFET, MOSFET), amplifier configurations, and frequency response.',
    topics: ['BJT Small Signal Analysis', 'MOSFET Characteristics', 'Amplifier Topologies', 'Frequency Response']
  },
  {
    id: 'mi',
    name: 'Microprocessors and Interfacing',
    shortName: 'M&I',
    code: 'EE-213',
    semester: 3,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Digital Systems Lab (M&I-L)',
    description: 'Intel 8086 microprocessor internal architecture, assembly language programming, memory segmentation, interrupts, and peripheral interfacing (8255 PPI, timers).',
    topics: ['8086 Architecture', 'Assembly Instructions', 'Memory Segmentation', '8255 PPI Interfacing', 'Hardware Interrupts']
  },
  {
    id: 'cvt',
    name: 'Complex Variables & Transforms',
    shortName: 'CVT',
    code: 'GS-214',
    semester: 3,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Complex functions, Cauchy-Riemann equations, analytic functions, contour integration, Cauchy integral formula, residue theorem, and Fourier/Z transforms.',
    topics: ['Cauchy-Riemann Equations', 'Contour Integration', 'Residue Theorem', 'Z-Transforms', 'Conformal Mapping']
  },
  {
    id: 'is',
    name: 'Islamic Studies',
    shortName: 'IS',
    code: 'IS-215',
    semester: 3,
    creditHours: '2+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Islamic ethical philosophy, Quranic worldview, Seerah of Prophet Muhammad (PBUH), and professional ethics in engineering.',
    topics: ['Engineering Ethics', 'Seerah Studies', 'Islamic Jurisprudence', 'Moral Responsibility']
  },

  // ==================== SEMESTER 4 ====================
  {
    id: 'signals',
    name: 'Signals & Systems',
    shortName: 'SS',
    code: 'EE-222',
    semester: 4,
    creditHours: '3+1',
    notesCount: 'Comprehensive Notes',
    papersCount: 'Past Papers',
    labsCount: 'MATLAB Lab',
    description: 'Continuous and discrete-time signals, Linear Time-Invariant systems, convolution integral/sum, Fourier series, CTFT, DTFT, and sampling theorem.',
    topics: ['Convolution', 'LTI Systems', 'Fourier Analysis', 'Sampling Theorem', 'Frequency Response']
  },
  {
    id: 'emft',
    name: 'Electromagnetic Field Theory',
    shortName: 'EMFT',
    code: 'EE-223',
    semester: 4,
    creditHours: '3+0',
    notesCount: 'Derivations & Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Electrostatics, Gauss law, magnetostatics, Biot-Savart law, Ampere law, Maxwell equations, and plane electromagnetic wave propagation.',
    topics: ['Coulomb & Gauss Laws', 'Biot-Savart Law', 'Maxwell Equations', 'Poynting Vector', 'Wave Propagation']
  },
  {
    id: 'machines1',
    name: 'Electrical Machines - I',
    shortName: 'EM-I',
    code: 'EE-224',
    semester: 4,
    creditHours: '3+1',
    notesCount: 'Theory & Solved Qs',
    papersCount: 'Past Papers',
    labsCount: 'Machines Lab',
    description: 'Magnetic circuits, single-phase and three-phase transformers, DC generators and DC motors characteristics, starting, and speed control.',
    topics: ['Transformers Equivalent Circuit', 'Transformer Tests', 'DC Motors', 'DC Generators', 'Speed Control']
  },

  // ==================== SEMESTER 5 ====================
  {
    id: 'pe',
    name: 'Power Electronics',
    shortName: 'PE',
    code: 'EE-311',
    semester: 5,
    creditHours: '3+1',
    notesCount: 'Lecture Notes',
    papersCount: 'Past Papers',
    labsCount: 'Simulink Lab',
    description: 'Power semiconductor devices (SCR, MOSFET, IGBT), controlled rectifiers, DC-DC converters (buck, boost, buck-boost), inverters, and PWM control.',
    topics: ['Buck-Boost Converters', 'Inverter Modulation', 'SCR & Triac', 'Gate Drive Circuits']
  },
  {
    id: 'cs',
    name: 'Communication Systems',
    shortName: 'CS',
    code: 'EE-312',
    semester: 5,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'MATLAB Lab',
    description: 'Analog modulation (AM, FM, PM), superheterodyne receiver, noise analysis in communication, and introduction to digital baseband transmission.',
    topics: ['AM & FM Modulation', 'Receiver Topologies', 'SNR & Noise Analysis', 'Baseband Transmission']
  },
  {
    id: 'machines2',
    name: 'Electrical Machines - II',
    shortName: 'EM-II',
    code: 'EE-313',
    semester: 5,
    creditHours: '3+1',
    notesCount: 'Lecture Notes',
    papersCount: 'Past Papers',
    labsCount: 'Machines Lab',
    description: 'Three-phase induction motors, equivalent circuits, torque-speed characteristics, synchronous generators and motors, and alternator synchronization.',
    topics: ['Induction Motors', 'Torque-Slip Curves', 'Synchronous Alternators', 'V-Curves']
  },

  // ==================== SEMESTER 6 ====================
  {
    id: 'control',
    name: 'Linear Control Systems',
    shortName: 'LCS',
    code: 'EE-321',
    semester: 6,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'MATLAB Lab',
    description: 'Mathematical modeling of physical systems, transfer functions, block diagrams, Root Locus, Bode plots, Nyquist criterion, and PID tuning.',
    topics: ['Transfer Functions', 'Root Locus', 'Bode Stability Margins', 'PID Controller Design']
  },
  {
    id: 'psa',
    name: 'Power System Analysis',
    shortName: 'PSA',
    code: 'EE-322',
    semester: 6,
    creditHours: '3+1',
    notesCount: 'Notes Bundle',
    papersCount: 'Past Papers',
    labsCount: 'Simulation Lab',
    description: 'Transmission line parameters, admittance and impedance matrices, power flow analysis (Gauss-Seidel, Newton-Raphson), and symmetrical faults.',
    topics: ['Line Modeling', 'Power Flow Analysis', 'Y-Bus Matrix', 'Symmetrical Fault Analysis']
  },

  // ==================== SEMESTER 7 ====================
  {
    id: 'dsp',
    name: 'Digital Signal Processing',
    shortName: 'DSP',
    code: 'EE-411',
    semester: 7,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'DSP Lab',
    description: 'Discrete Fourier Transform, Fast Fourier Transform algorithms, FIR filter design, IIR filter design via bilinear transformation, and DSP hardware.',
    topics: ['DFT & FFT', 'FIR Window Method', 'IIR Bilinear Transform', 'Filter Structures']
  },
  {
    id: 'fyp1',
    name: 'Final Year Project - Part I',
    shortName: 'FYP-I',
    code: 'EE-491',
    semester: 7,
    creditHours: '0+3',
    notesCount: 'Templates & Guides',
    papersCount: 'Proposal Archive',
    labsCount: 'Project Lab',
    description: 'Engineering design proposal, problem formulation, literature survey, circuit design, component selection, and preliminary defense.',
    topics: ['Project Proposal', 'Literature Survey', 'System Architecture', 'Design Defense']
  },

  // ==================== SEMESTER 8 ====================
  {
    id: 'fyp2',
    name: 'Final Year Project - Part II',
    shortName: 'FYP-II',
    code: 'EE-492',
    semester: 8,
    creditHours: '0+3',
    notesCount: 'Thesis Templates',
    papersCount: 'Defense Prep',
    labsCount: 'Hardware Prototype',
    description: 'Hardware prototype implementation, PCB fabrication, microcontroller firmware, testing, comprehensive thesis report, and final viva voce.',
    topics: ['Hardware Prototype', 'Testing & Verification', 'Thesis Report', 'Final Viva Voce']
  }
];

export interface SemesterInfo {
  number: number;
  title: string;
  tag: string;
  yearTerm: string;
  description: string;
  driveUrl?: string;
  isUnlocked: boolean;
}

export const SEMESTERS: SemesterInfo[] = [
  {
    number: 1,
    title: 'Semester 1: Foundations',
    tag: 'FALL 2026 • 26-EE SESSION',
    yearTerm: 'Year 1 / Fall',
    description: 'Official UET Taxila Fall 2026 Timetable: Applied Physics, Calculus, ICT, Computer Programming, Basic Mechanical Eng, Workshop Practice, OHS, Quran.',
    driveUrl: USER_DRIVE_LINKS.AP,
    isUnlocked: true
  },
  {
    number: 2,
    title: 'Semester 2: Core Engineering Basics',
    tag: 'SPRING 2026 • 25-EE SESSION',
    yearTerm: 'Year 1 / Spring',
    description: 'Official UET Taxila Spring 2026 Timetable: Linear Circuit Analysis (LCA), Digital Logic Design (DLD), Engineering Drawing (ED), Computer Programming (CP), Differential Equations (DE), Ideology and Constitution of Pakistan (ICP).',
    isUnlocked: true
  },
  {
    number: 3,
    title: 'Semester 3: Core EE & Networks',
    tag: 'FALL 2026 • 25-EE SESSION',
    yearTerm: 'Year 2 / Fall',
    description: 'Official UET Taxila Fall 2026 Timetable: Electrical Network Analysis (ENA), Electronic Devices & Circuits (EDC), Microprocessors & Interfacing (M&I), Complex Variables (CVT), Islamic Studies.',
    isUnlocked: true
  },
  {
    number: 4,
    title: 'Semester 4: Systems & Waves',
    tag: 'SPRING • YEAR 2',
    yearTerm: 'Year 2 / Spring',
    description: 'Signals & Systems, Electromagnetic Field Theory (EMFT), Electrical Machines - I.',
    isUnlocked: true
  },
  {
    number: 5,
    title: 'Semester 5: Power & Communications',
    tag: 'FALL • YEAR 3',
    yearTerm: 'Year 3 / Fall',
    description: 'Power Electronics, Communication Systems, Electrical Machines - II, Numerical Analysis.',
    isUnlocked: true
  },
  {
    number: 6,
    title: 'Semester 6: Control & Power Systems',
    tag: 'SPRING • YEAR 3',
    yearTerm: 'Year 3 / Spring',
    description: 'Linear Control Systems, Power System Analysis, Embedded Systems Design, Technical Management.',
    isUnlocked: true
  },
  {
    number: 7,
    title: 'Semester 7: DSP & Capstone I',
    tag: 'FALL • YEAR 4',
    yearTerm: 'Year 4 / Fall',
    description: 'Digital Signal Processing (DSP), High Voltage Engineering, Final Year Project (Part I).',
    isUnlocked: true
  },
  {
    number: 8,
    title: 'Semester 8: FYP II & Practice',
    tag: 'SPRING • YEAR 4',
    yearTerm: 'Year 4 / Spring',
    description: 'Final Year Project (Part II), Power Protection, Wireless Communications, Professional Practice.',
    isUnlocked: true
  }
];

export const QUOTES = [
  { text: "You are the only audience that matters. Make what you love, not what others expect.", author: "Rick Rubin" },
  { text: "The magic you're looking for is in the work you're avoiding.", author: "Marcus Aurelius" },
  { text: "Engineering is not about having all the answers, it's about asking the right questions.", author: "Nikola Tesla" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "What I cannot create, I do not understand.", author: "Richard Feynman" },
  { text: "Information is the resolution of uncertainty.", author: "Claude Shannon" },
  { text: "Sometimes it is the people no one can imagine anything of who do the things that no one can imagine.", author: "Alan Turing" }
];

export const LOCAL_STORAGE_CUSTOM_DRIVES_KEY = 'everything_you_need_for_ee_drives';

export function getCustomDriveOverrides(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_CUSTOM_DRIVES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveCustomDriveOverride(courseIdOrKey: string, url: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getCustomDriveOverrides();
    current[courseIdOrKey] = url;
    localStorage.setItem(LOCAL_STORAGE_CUSTOM_DRIVES_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save drive override', e);
  }
}

export function getEffectiveDriveUrl(course: CourseResource): string | undefined {
  const overrides = getCustomDriveOverrides();
  return overrides[course.id] || course.driveUrl;
}

export function filterCourses(query: string, semester?: number): CourseResource[] {
  const trimmed = query.trim().toLowerCase();
  return COURSES.filter((course) => {
    if (semester !== undefined && semester !== 0 && course.semester !== semester) {
      return false;
    }
    if (!trimmed) return true;
    return (
      course.name.toLowerCase().includes(trimmed) ||
      course.shortName.toLowerCase().includes(trimmed) ||
      course.code.toLowerCase().includes(trimmed) ||
      course.description.toLowerCase().includes(trimmed) ||
      course.topics.some((t) => t.toLowerCase().includes(trimmed))
    );
  });
}
