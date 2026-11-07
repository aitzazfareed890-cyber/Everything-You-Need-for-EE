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

export const WEBSITE_INSTAGRAM_URL =
  'https://www.instagram.com/eynforee?cplk=MXgzY2NrY2dmenl1NQ==';

export const WHATSAPP_CHANNEL_URL =
  'https://whatsapp.com/channel/0029Vb9VgAi7j6fyDbQpHp0e';

export const CONTACT_EMAIL = 'aitzazfareed890@gmail.com';

export const WHATSAPP_CHAT_URL = 'https://wa.me/923429397675';

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
  FE: 'https://drive.google.com/drive/folders/1yWwvJ5BHI8cv6rqd90QVzToG2-ByzF_T?usp=sharing',
  CVT: 'https://drive.google.com/drive/folders/1DIERw0iRdv8zVqZj18xGXLn6QqXvIB-L?usp=sharing',
  EDC: 'https://drive.google.com/drive/folders/19cFHAPRYt6rvJfWOJ8_aFfNDuk1QnLIO?usp=sharing',
  ENA: 'https://drive.google.com/drive/folders/1ShQx9nnimgqj-xLjynEbssUaK1-uzQ82?usp=sharing',
  IS: 'https://drive.google.com/drive/folders/1Wb-b-Hd9ha_UHDq8OSyIYD7yRwCZf1q6?usp=sharing',
  MNI: 'https://drive.google.com/drive/folders/168oTkk0RJEA_M-K3anedugIyf1mGBZRl?usp=sharing',
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
    driveUrl: USER_DRIVE_LINKS.FE,
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
    driveUrl: USER_DRIVE_LINKS.ENA,
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
    driveUrl: USER_DRIVE_LINKS.EDC,
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
    driveUrl: USER_DRIVE_LINKS.MNI,
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
    driveUrl: USER_DRIVE_LINKS.CVT,
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
    driveUrl: USER_DRIVE_LINKS.IS,
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Islamic ethical philosophy, Quranic worldview, Seerah of Prophet Muhammad (PBUH), and professional ethics in engineering.',
    topics: ['Engineering Ethics', 'Seerah Studies', 'Islamic Jurisprudence', 'Moral Responsibility']
  },

  // ==================== SEMESTER 4 (24-EE Session Timetable Spring 2026) ====================
  {
    id: 'em_sem4',
    name: 'Electrical Machines',
    shortName: 'EM',
    code: 'EE-221',
    semester: 4,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Electrical Machines (EM-L)',
    description: 'Magnetic circuits, single-phase and three-phase transformers equivalent circuits, DC generators and DC motors characteristics, induction motors, and starting/speed control methods.',
    topics: ['Magnetic Circuits', 'Single & 3-Phase Transformers', 'DC Machines & Starters', 'Induction Motors', 'Speed Control Methods']
  },
  {
    id: 'mi_sem4',
    name: 'Microprocessors and Interfacing',
    shortName: 'M&I',
    code: 'EE-222',
    semester: 4,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Digital Systems (M&I-L)',
    description: 'Intel 8086 microprocessor internal architecture, assembly language programming, memory segmentation, addressing modes, 8255 PPI peripheral interfacing, and hardware interrupts.',
    topics: ['8086 Architecture', 'Assembly Programming', 'Memory Addressing & Interfacing', '8255 PPI', 'Hardware Interrupts']
  },
  {
    id: 'ss_sem4',
    name: 'Signals and Systems',
    shortName: 'S&S',
    code: 'EE-223',
    semester: 4,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Computer Simulation (S&S-L)',
    description: 'Continuous and discrete-time signals, Linear Time-Invariant (LTI) systems, convolution integral and sum, Fourier series, CTFT, DTFT, Laplace transform, and frequency response.',
    topics: ['Continuous & Discrete Signals', 'Convolution & LTI Systems', 'Fourier Analysis', 'Laplace Transforms', 'Frequency Response']
  },
  {
    id: 'pme_sem4',
    name: 'Probability Methods in Engineering',
    shortName: 'PME',
    code: 'GS-224',
    semester: 4,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Sample space, probability axioms, random variables, cumulative distribution and probability density functions, expectation, variance, joint distributions, Central Limit Theorem, and random processes.',
    topics: ['Random Variables', 'Probability Density Functions (PDF)', 'Expectation & Variance', 'Central Limit Theorem', 'Stochastic Processes']
  },
  {
    id: 'la_sem4',
    name: 'Linear Algebra',
    shortName: 'LA',
    code: 'GS-225',
    semester: 4,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Systems of linear equations, Gaussian elimination, matrix operations, determinants, vector spaces, subspaces, linear independence, basis and dimension, eigenvalues and eigenvectors, and matrix diagonalization.',
    topics: ['Systems of Linear Equations', 'Vector Spaces & Subspaces', 'Linear Independence', 'Eigenvalues & Eigenvectors', 'Diagonalization']
  },
  {
    id: 'qt2_sem4',
    name: 'Quran Translation II',
    shortName: 'QT-II',
    code: 'HS-226',
    semester: 4,
    creditHours: '1+0',
    notesCount: 'Study Material',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Word-to-word translation and conceptual study of designated Surahs from the Holy Quran with contextual analysis, ethical teachings, and societal impact.',
    topics: ['Quranic Translation', 'Contextual Analysis', 'Ethical Dimensions', 'Socio-Moral Framework']
  },

  // ==================== SEMESTER 5 (24-EE Session Timetable Fall 2026) ====================
  {
    id: 'cs_sem5',
    name: 'Communication Systems',
    shortName: 'CS',
    code: 'EE-311',
    semester: 5,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'ENCED Communication Lab (CS-L)',
    description: 'Amplitude modulation (DSB-SC, SSB, AM), angle modulation (FM, PM), superheterodyne receiver architecture, noise analysis in analog systems, pulse code modulation (PCM), and baseband transmission.',
    topics: ['AM Modulation & Demodulation', 'Angle Modulation (FM/PM)', 'Superheterodyne Receivers', 'Noise Analysis (SNR)', 'Pulse Code Modulation (PCM)']
  },
  {
    id: 'eft_sem5',
    name: 'Electromagnetic Field Theory',
    shortName: 'EFT',
    code: 'EE-312',
    semester: 5,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Vector calculus, Coulomb law, Gauss law, electric potential, boundary conditions, Poisson and Laplace equations, steady magnetic fields, Biot-Savart and Ampere laws, Maxwell equations, and uniform plane waves.',
    topics: ['Coulomb & Gauss Laws', 'Poisson & Laplace Equations', 'Biot-Savart & Ampere Laws', 'Maxwell Equations', 'Electromagnetic Wave Propagation']
  },
  {
    id: 'lcs_sem5',
    name: 'Linear Control Systems',
    shortName: 'LCS',
    code: 'EE-313',
    semester: 5,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Control Lab (LCS-L)',
    description: 'Mathematical modeling of physical systems, transfer functions, block diagram reduction, signal flow graphs, time-domain specifications, Routh-Hurwitz stability, Root Locus, and Bode frequency response.',
    topics: ['System Modeling & Transfer Functions', 'Block Diagrams & Signal Flow', 'Time-Domain Specifications', 'Root Locus Analysis', 'Bode Plots & Stability Margins']
  },
  {
    id: 'ml_sem5',
    name: 'Machine Learning',
    shortName: 'ML',
    code: 'CS-314',
    semester: 5,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Power System Simulation (ML-L)',
    description: 'Supervised and unsupervised learning, linear and logistic regression, support vector machines (SVM), decision trees, k-means clustering, neural networks, and model validation techniques for engineering problems.',
    topics: ['Supervised & Unsupervised Learning', 'Linear & Logistic Regression', 'Support Vector Machines (SVM)', 'Neural Networks', 'Clustering & Model Evaluation']
  },
  {
    id: 'ps_sem5',
    name: 'Pakistan Studies',
    shortName: 'PS',
    code: 'HS-315',
    semester: 5,
    creditHours: '2+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Historical background of the Pakistan Movement, political evolution, economic development, natural resources, constitutional development, and foreign policy.',
    topics: ['Pakistan Movement History', 'Constitutional Development', 'Economic Geography & Resources', 'Foreign Policy of Pakistan']
  },

  // ==================== SEMESTER 6 (23-EE Session Timetable Spring 2026) ====================
  {
    id: 'eem_sem6',
    name: 'Engineering Economics & Management',
    shortName: 'EEM',
    code: 'MS-321',
    semester: 6,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Engineering economic decisions, time value of money, cash flow equivalence, present worth and annual worth analysis, rate of return (ROR), depreciation, project management, and cost-benefit evaluation.',
    topics: ['Time Value of Money', 'Cash Flow Analysis', 'Present & Annual Worth', 'Rate of Return (ROR)', 'Depreciation & Cost Estimation']
  },
  {
    id: 'pe_sem6',
    name: 'Professional Ethics',
    shortName: 'PE',
    code: 'HS-322',
    semester: 6,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Philosophical foundations of ethics, professional codes of conduct (PEC, IEEE), engineering responsibility, safety, whistleblowing, conflict of interest, intellectual property, and environmental ethics.',
    topics: ['PEC & IEEE Codes of Ethics', 'Engineering Liability & Safety', 'Whistleblowing & Conflicts of Interest', 'Intellectual Property Rights', 'Environmental Responsibility']
  },
  {
    id: 'trw_sem6',
    name: 'Technical Report Writing',
    shortName: 'TRW',
    code: 'HS-323',
    semester: 6,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Principles of technical communication, engineering research methodology, drafting formal proposals, technical reports, feasibility studies, executive summaries, data visualization, and oral presentation delivery.',
    topics: ['Technical Proposals & Feasibility Reports', 'Research Methodology', 'Formal Report Formatting', 'Data Visualization', 'Technical Presentation Skills']
  },
  {
    id: 'psa_sem6',
    name: 'Power System Analysis',
    shortName: 'PSA',
    code: 'EE-324',
    semester: 6,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Power System Simulation (PSA-L)',
    description: 'Per-unit system representation, transmission line modeling, bus admittance (Y-bus) and impedance (Z-bus) matrices, power flow algorithms (Gauss-Seidel, Newton-Raphson), symmetrical three-phase faults, and unsymmetrical fault analysis.',
    topics: ['Per-Unit System', 'Y-Bus Matrix Formation', 'Newton-Raphson Power Flow', 'Symmetrical Fault Analysis', 'Symmetrical Components & Asymmetrical Faults']
  },
  {
    id: 'pdu_sem6',
    name: 'Power Distribution & Utilization',
    shortName: 'PDU',
    code: 'EE-325',
    semester: 6,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Power Systems (PDU-L)',
    description: 'Electrical distribution system configurations, radial and ring main systems, substation equipment and layouts, load curves, demand factors, power factor improvement, tariff structures, and industrial illumination engineering.',
    topics: ['Radial & Ring Distribution', 'Substation Layout & Equipment', 'Load Characteristics & Tariffs', 'Power Factor Correction', 'Industrial Lighting & Illumination']
  },
  {
    id: 'ecd_sem6',
    name: 'Electronic Circuit Design',
    shortName: 'ECD',
    code: 'EE-326',
    semester: 6,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Electronics (ECD-L)',
    description: 'Design and analysis of multistage BJT/MOSFET amplifiers, differential amplifiers, current mirrors, active loads, operational amplifier internal architectures, frequency response, feedback topologies, and oscillator circuits.',
    topics: ['Differential Amplifiers', 'Current Mirrors & Active Loads', 'Op-Amp Internal Architecture', 'Feedback Topologies & Stability', 'Oscillators & Active Filters']
  },
  {
    id: 'ccn_sem6',
    name: 'Computer Communication Networks',
    shortName: 'CCN',
    code: 'EE-327',
    semester: 6,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Computer Simulation (CCN-L)',
    description: 'OSI reference model and TCP/IP protocol suite, data link layer framing, error detection and correction, MAC protocols (CSMA/CD), IPv4/IPv6 addressing, subnetting, routing algorithms (OSPF, BGP), and transport protocols (TCP/UDP).',
    topics: ['OSI & TCP/IP Architecture', 'Data Link Protocols & Framing', 'IPv4/IPv6 Subnetting', 'Routing Algorithms (OSPF, RIP)', 'TCP & UDP Flow Control']
  },
  {
    id: 'qt3_sem6',
    name: 'Quran Translation III',
    shortName: 'QT-III',
    code: 'HS-328',
    semester: 6,
    creditHours: '1+0',
    notesCount: 'Study Material',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Comprehensive study, translation, and exegetical study of prescribed Surahs, emphasizing ethical leadership, justice, and social responsibility.',
    topics: ['Quranic Exegesis', 'Ethical Leadership', 'Social Justice & Responsibility', 'Contemporary Application']
  },

  // ==================== SEMESTER 7 (23-EE Session Timetable Fall 2026) ====================
  {
    id: 'ep_sem7',
    name: 'Entrepreneurship',
    shortName: 'EP',
    code: 'MS-411',
    semester: 7,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Entrepreneurial mindset, opportunity identification, business models, canvas design, market validation, venture financing, IP strategy, and pitching engineering startups.',
    topics: ['Business Model Canvas', 'Market Validation & Research', 'Venture Capital & Financing', 'IP Protection & Patents', 'Pitching & Go-To-Market']
  },
  {
    id: 'ct_sem7',
    name: 'Critical Thinking',
    shortName: 'CT',
    code: 'HS-412',
    semester: 7,
    creditHours: '3+0',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Analytical reasoning, formal and informal logic, fallacy identification, argument structure, cognitive biases, problem decomposition, and critical evaluation of technological trends.',
    topics: ['Logical Arguments & Deductive Reasoning', 'Cognitive Biases & Fallacies', 'Problem Decomposition', 'Decision Analysis', 'Evidence Evaluation']
  },
  {
    id: 'pg_sem7',
    name: 'Power Generation',
    shortName: 'PG',
    code: 'EE-413',
    semester: 7,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'MED+CED (PG-L)',
    description: 'Thermal power plants, hydroelectric generation, nuclear power systems, renewable energy generation (solar PV, wind energy systems), economics of power generation, load dispatch, and grid integration.',
    topics: ['Thermal & Hydro Power Plants', 'Nuclear Power Principles', 'Solar PV & Wind Energy Systems', 'Economic Dispatch & Cost Curves', 'Environmental Regulations']
  },
  {
    id: 'ept_sem7',
    name: 'Electrical Power Transmission',
    shortName: 'EPT',
    code: 'EE-414',
    semester: 7,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Power Systems Lab (EPT-L)',
    description: 'Transmission line parameters (resistance, inductance, capacitance), mechanical design of overhead lines (sag, tension, insulators), corona effect, traveling waves, surge impedance, HVDC transmission, and flexible AC transmission (FACTS).',
    topics: ['Line Parameters Calculation', 'Mechanical Design (Sag & Tension)', 'Corona Phenomenon', 'Surge Impedance Loading (SIL)', 'HVDC Transmission Systems']
  },
  {
    id: 'im_sem7',
    name: 'Instrumentation & Measurements',
    shortName: 'I&M',
    code: 'EE-415',
    semester: 7,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Instrumentation & Measurements Lab (I&M-L)',
    description: 'Measurement errors, sensor technologies, signal conditioning circuits, DC and AC bridges (Wheatstone, Maxwell, Schering), digital instruments, oscilloscope operations, data acquisition systems (DAQ), and industrial instrumentation.',
    topics: ['Measurement Errors & Statistics', 'DC & AC Bridge Circuits', 'Transducers & Sensors', 'Signal Conditioning (Instrumentation Amps)', 'Data Acquisition (DAQ) Systems']
  },
  {
    id: 'dsp_sem7',
    name: 'Digital Signal Processing',
    shortName: 'DSP',
    code: 'EE-416',
    semester: 7,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Computer Simulation (DSP-L)',
    description: 'Discrete Fourier Transform (DFT), Fast Fourier Transform (FFT) algorithms, realization of digital filters, FIR filter design using window techniques, IIR filter design via bilinear transformation, finite word-length effects, and DSP hardware.',
    topics: ['Discrete Fourier Transform (DFT)', 'Radix-2 FFT Algorithms', 'FIR Filter Design (Windows)', 'IIR Filter Design (Bilinear)', 'Digital Filter Structures & Quantization']
  },
  {
    id: 'dip_sem7',
    name: 'Digital Image Processing',
    shortName: 'DIP',
    code: 'EE-417',
    semester: 7,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Computer Simulation (DIP-L)',
    description: 'Digital image fundamentals, intensity transformations, spatial filtering, frequency-domain filtering, image restoration, morphological operations, edge detection, segmentation, and compression standards.',
    topics: ['Spatial Filtering & Enhancements', 'Frequency Domain Filtering', 'Image Restoration & Denoising', 'Edge Detection & Segmentation', 'Image Compression (JPEG)']
  },
  {
    id: 'fydp1_sem7',
    name: 'Final Year Design Project-I',
    shortName: 'FYDP-I',
    code: 'EE-491',
    semester: 7,
    creditHours: '3+0',
    notesCount: 'Templates & Guides',
    papersCount: 'Proposal Archive',
    labsCount: 'Capstone Project',
    description: 'Selection of engineering problem, extensive literature review, feasibility study, design specifications, system block diagrams, component selection, simulation, and preliminary defense.',
    topics: ['Problem Formulation', 'Literature Review', 'System Specifications & Architecture', 'Simulation & Schematic Design', 'Preliminary Defense Presentation']
  },

  // ==================== SEMESTER 8 (22-EE Session Timetable Spring 2026) ====================
  {
    id: 'psp_sem8',
    name: 'Power System Protection',
    shortName: 'PSP',
    code: 'EE-421',
    semester: 8,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Power Systems (PSP-L)',
    description: 'Fundamentals of protective relaying, instrument transformers (CT/PT), overcurrent relays, directional relays, differential protection of transformers and generators, distance protection of transmission lines, and digital relaying.',
    topics: ['Protective Relaying Principles', 'Current & Potential Transformers (CT/PT)', 'Overcurrent & Directional Relaying', 'Differential Protection Schemes', 'Distance Protection (Impedance Relays)']
  },
  {
    id: 'hve_sem8',
    name: 'High Voltage Engineering',
    shortName: 'HVE',
    code: 'EE-422',
    semester: 8,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'High Voltage (HVE-L)',
    description: 'Breakdown mechanisms in gases, liquids, and solid dielectrics, generation and measurement of high AC, DC, and impulse voltages, lightning phenomena, insulation coordination, and high-voltage testing standards.',
    topics: ['Dielectric Breakdown Mechanisms', 'High AC & DC Generation', 'Marx Impulse Generators', 'Insulation Coordination', 'Overvoltage Protection & Surge Arresters']
  },
  {
    id: 'ia_sem8',
    name: 'Industrial Automation',
    shortName: 'IA',
    code: 'EE-423',
    semester: 8,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Control (IA-L)',
    description: 'Industrial automation hierarchy, programmable logic controllers (PLC) architecture and ladder logic programming, timers, counters, SCADA systems, industrial sensors, actuators, VFDs, and industrial fieldbus protocols.',
    topics: ['PLC Hardware & Scan Cycle', 'Ladder Logic Programming', 'SCADA & HMI Systems', 'Industrial Sensors & Actuators', 'Industrial Communication Protocols (Modbus)']
  },
  {
    id: 'pe_sem8',
    name: 'Power Electronics',
    shortName: 'PE',
    code: 'EE-424',
    semester: 8,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Power Systems Simulation (PE-L)',
    description: 'Power semiconductor devices (Thyristors, MOSFETs, IGBTs), AC-DC phase-controlled converters, DC-DC converters (buck, boost, buck-boost), DC-AC inverters (PWM techniques), and industrial applications (UPS, motor drives).',
    topics: ['Controlled Rectifiers & Phase Control', 'DC-DC Converters (Buck/Boost)', 'PWM Inverters & Harmonic Reduction', 'Gate Driver Topologies', 'Motor Drive & Power Supply Applications']
  },
  {
    id: 'dc_sem8',
    name: 'Digital Communication',
    shortName: 'DC',
    code: 'EE-425',
    semester: 8,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'ENCED (DC-L)',
    description: 'Pulse code modulation, line coding, matched filter receiver, digital bandpass modulation techniques (BPSK, QPSK, QAM, FSK), coherent and non-coherent detection, bit error rate (BER) analysis, and channel capacity.',
    topics: ['PCM & Quantization Noise', 'Line Coding & Eye Diagrams', 'Matched Filter Receivers', 'Digital Modulation (BPSK, QPSK, QAM)', 'Bit Error Rate (BER) & Channel Capacity']
  },
  {
    id: 'oc_sem8',
    name: 'Optical Communication',
    shortName: 'OC',
    code: 'EE-426',
    semester: 8,
    creditHours: '3+1',
    notesCount: 'Full Notes',
    papersCount: 'Past Papers',
    labsCount: 'Photonics & Communication (OC-L)',
    description: 'Optical fiber structures and light guidance, ray theory, attenuation, dispersion (modal, chromatic), optical sources (LED, laser diodes), photodetectors (PIN, APD), optical amplifiers (EDFA), and WDM systems.',
    topics: ['Optical Fiber Light Propagation', 'Attenuation & Dispersion Mechanisms', 'Laser Diodes & LEDs', 'Photodetectors (PIN & APD)', 'Wavelength Division Multiplexing (WDM)']
  },
  {
    id: 'fydp2_sem8',
    name: 'Final Year Design Project-II',
    shortName: 'FYDP-II',
    code: 'EE-492',
    semester: 8,
    creditHours: '3+0',
    notesCount: 'Thesis Templates',
    papersCount: 'Defense Prep',
    labsCount: 'Hardware Prototype & Thesis',
    description: 'Hardware prototype fabrication, software integration, testing and experimental verification, optimization, comprehensive thesis report compilation, and final project defense before external examiners.',
    topics: ['Hardware Implementation', 'Software & Hardware Integration', 'Experimental Testing & Validation', 'Comprehensive Project Thesis', 'Final Viva Voce Defense']
  },
  {
    id: 'qt4_sem8',
    name: 'Quran Translation IV',
    shortName: 'QT-IV',
    code: 'HS-427',
    semester: 8,
    creditHours: '1+0',
    notesCount: 'Study Material',
    papersCount: 'Past Papers',
    labsCount: 'Theory',
    description: 'Culminating semester study of assigned Quranic sections with deep textual contemplation, Islamic jurisprudence concepts, and ethical synthesis for graduating engineers.',
    topics: ['Quranic Exegesis', 'Synthesis of Ethical Conduct', 'Professional Accountability', 'Social Justice']
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
    driveUrl: USER_DRIVE_LINKS.ENA,
    isUnlocked: true
  },
  {
    number: 4,
    title: 'Semester 4: Systems & Machines',
    tag: 'SPRING 2026 • 24-EE SESSION',
    yearTerm: 'Year 2 / Spring',
    description: 'Official UET Taxila Spring 2026 Timetable: Electrical Machines (EM), Microprocessors and Interfacing (M&I), Signals and Systems (S&S), Probability Methods in Engineering (PME), Linear Algebra (LA), Quran Translation II (QT-II).',
    isUnlocked: true
  },
  {
    number: 5,
    title: 'Semester 5: Controls & Communications',
    tag: 'FALL 2026 • 24-EE SESSION',
    yearTerm: 'Year 3 / Fall',
    description: 'Official UET Taxila Fall 2026 Timetable: Communication Systems (CS), Electromagnetic Field Theory (EFT), Linear Control Systems (LCS), Machine Learning (ML), Pakistan Studies (PS).',
    isUnlocked: true
  },
  {
    number: 6,
    title: 'Semester 6: Power & Networks',
    tag: 'SPRING 2026 • 23-EE SESSION',
    yearTerm: 'Year 3 / Spring',
    description: 'Official UET Taxila Spring 2026 Timetable: Engineering Economics & Management (EEM), Professional Ethics (PE), Technical Report Writing (TRW), Power System Analysis (PSA), Power Distribution & Utilization (PDU), Electronic Circuit Design (ECD), Computer Communication Networks (CCN), Quran Translation III (QT-III).',
    isUnlocked: true
  },
  {
    number: 7,
    title: 'Semester 7: Power Systems, DSP & Capstone I',
    tag: 'FALL 2026 • 23-EE SESSION',
    yearTerm: 'Year 4 / Fall',
    description: 'Official UET Taxila Fall 2026 Timetable: Entrepreneurship (EP), Critical Thinking (CT), Power Generation (PG), Electrical Power Transmission (EPT), Instrumentation & Measurements (I&M), Digital Signal Processing (DSP), Digital Image Processing (DIP), Final Year Design Project-I (FYDP-I).',
    isUnlocked: true
  },
  {
    number: 8,
    title: 'Semester 8: Advanced Streams & Capstone II',
    tag: 'SPRING 2026 • 22-EE SESSION',
    yearTerm: 'Year 4 / Spring',
    description: 'Official UET Taxila Spring 2026 Timetable: Power System Protection (PSP), High Voltage Engineering (HVE), Industrial Automation (IA), Power Electronics (PE), Digital Communication (DC), Optical Communication (OC), Final Year Design Project-II (FYDP-II), Quran Translation IV (QT-IV).',
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
