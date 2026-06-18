// ============================================================
// PORTFOLIO CONTENT — edit everything here, no need to touch
// component files for text/data changes.
// ============================================================

export const personal = {
  name: 'Dharmendra Reddy M S',
  firstName: 'Dharmendra',
  lastName: 'Reddy M S',
  initials: 'DR',
  role: 'Systems Engineer & Full-Stack Developer',
  location: 'Hyderabad, Telangana, India',
  email: 'dharmu17reddy@gmail.com',
  phone: '+91 96112 41651',
  phoneRaw: '+919611241651',
  linkedin: 'https://linkedin.com', // TODO: replace with real profile URL
  github: 'https://github.com', // TODO: replace with real profile URL
  resumeUrl: '#', // TODO: add resume PDF link
  typedRoles: ['Full-Stack Developer', 'AI/ML Engineer', 'Systems Engineer', 'Problem Solver'],
  tagline:
    'CS & AI graduate crafting scalable software, intelligent systems, and meaningful digital experiences.',
  currentRole: 'Systems Engineer @ TCS',
}

export const heroStats = [
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 3, suffix: '', label: 'Internships' },
  { value: 7, suffix: '+', label: 'Languages' },
  { value: 50, suffix: '+', label: 'Students Trained' },
]

export const aboutSnapshot = {
  intro:
    "I'm a Computer Science and Artificial Intelligence graduate who loves building things that work beautifully — from full-stack web platforms to real-time AI systems running on edge devices.",
  bullets: [
    'Full-stack developer with Java, Django, PHP, and modern JS — building end-to-end products.',
    'AI/ML practitioner — YOLO object detection, OpenAI API integrations, IoT systems on Raspberry Pi.',
    'Systems Engineer at TCS — trained in enterprise technologies, agile delivery, and production systems.',
    'Community builder — organized workshops training 50+ students, coordinated 30-student internship batches.',
  ],
}

export const fullBio = [
  "I'm Dharmendra Reddy M S, a Computer Science and Artificial Intelligence graduate from Sri Venkateshwara College of Engineering, Bengaluru. My journey in technology has always been driven by a simple belief: the best software is built at the intersection of clean architecture, thoughtful design, and real human need.",
  "From my first Java desktop application to deploying YOLOv3 object detection on a Raspberry Pi for visually impaired users, I've always gravitated toward projects that solve real problems. I built CraveCart — a complete food ordering platform with Razorpay payments — not just to learn Django, but because I wanted to build something people would actually use.",
  'Today, I work as a Systems Engineer at Tata Consultancy Services, where I\'m deepening my expertise in enterprise software, cloud architectures, and production-grade systems. Every day is an opportunity to grow — and I take that seriously.',
  'Outside of work, I care deeply about community. I organized a 3-day Web Development Workshop that trained over 50 students and coordinated a VTU internship batch of 30. Sharing knowledge isn\'t just something I do — it\'s something I believe in.',
]

export const values = [
  'Problem Solver',
  'Team Player',
  'Continuous Learner',
  'Detail Oriented',
  'Community Builder',
  'Clean Code Advocate',
]

export const education = [
  {
    icon: '🎓',
    degree: 'B.E. in Computer Science and Artificial Intelligence',
    school: 'Sri Venkateshwara College of Engineering, Bengaluru, Karnataka',
    period: '2021 – 2025',
    grade: 'CGPA: 7.66',
    desc: 'Studied algorithms, data structures, OOP, machine learning, computer vision, cloud computing, and software engineering. Completed multiple hands-on projects applying AI/ML to real-world problems.',
  },
  {
    icon: '📚',
    degree: 'Pre-University — PCMB (Physics, Chemistry, Mathematics, Biology)',
    school: 'Reva Independent PU College, Bengaluru, Karnataka',
    period: '2019 – 2021',
    grade: '71%',
    desc: 'Built strong foundations in mathematics and sciences. Developed analytical thinking and problem-solving skills that form the backbone of my engineering approach.',
  },
]

export const achievements = [
  {
    icon: '🎓',
    value: 50,
    suffix: '+',
    title: 'Students Trained',
    desc: 'Organized and led a 3-day Web Development Workshop in collaboration with industry professionals, teaching HTML, CSS, JavaScript, and modern frameworks to 50+ students — bridging the gap between academics and industry.',
  },
  {
    icon: '🤝',
    value: 30,
    suffix: '',
    title: 'Internship Batch Coordinated',
    desc: 'Coordinated an entire VTU internship batch of 30 students — managing scheduling, session logistics, mentor coordination, and ensuring every student successfully completed their project deliverables and milestones.',
  },
]

export const facts = [
  { icon: 'MapPin', text: 'Hyderabad, Telangana, India' },
  { icon: 'Phone', text: '+91 96112 41651' },
  { icon: 'Mail', text: 'dharmu17reddy@gmail.com' },
  { icon: 'GraduationCap', text: 'B.E. CS & AI — CGPA 7.66' },
  { icon: 'Building2', text: 'Systems Engineer @ TCS' },
]

// ============================================================
// SKILLS
// ============================================================

export const languages = [
  { name: 'Java', icon: '☕', level: 88 },
  { name: 'Python', icon: '🐍', level: 85 },
  { name: 'SQL', icon: '🗄️', level: 83 },
  { name: 'JavaScript', icon: '📜', level: 76 },
  { name: 'HTML / CSS', icon: '🌐', level: 85 },
  { name: 'PHP', icon: '🐘', level: 70 },
]

export const frameworks = [
  { name: 'Django', icon: '🐍', level: 'Proficient · Web Framework' },
  { name: 'MySQL', icon: '🐬', level: 'Proficient · Relational DB' },
  { name: 'PostgreSQL', icon: '🐘', level: 'Proficient · Relational DB' },
  { name: 'SQLite', icon: '🗃️', level: 'Familiar · Embedded DB' },
  { name: 'REST APIs', icon: '🌐', level: 'Proficient · Architecture' },
  { name: 'Streamlit', icon: '📊', level: 'Familiar · Data Apps' },
  { name: 'Razorpay API', icon: '💳', level: 'Familiar · Payments' },
  { name: 'Java Swing', icon: '☕', level: 'Proficient · Desktop UI' },
]

export const aiml = [
  {
    icon: '👁️',
    name: 'YOLO (v3)',
    desc: 'Real-time object detection. Deployed on Raspberry Pi for assistive applications. Proficient with model configuration and inference pipelines.',
  },
  {
    icon: '🤖',
    name: 'OpenAI API',
    desc: 'Integrated GPT models into production web apps. Built prompt engineering workflows for recipe generation and content creation.',
  },
  {
    icon: '🧠',
    name: 'TensorFlow',
    desc: 'Basics of neural network architecture, model training, evaluation, and deployment. Expanding knowledge in deep learning.',
  },
  {
    icon: '🔌',
    name: 'IoT / Blynk',
    desc: 'Sensor integration with ultrasonic sensors, Raspberry Pi GPIO, and Blynk IoT platform for real-time monitoring dashboards.',
  },
  {
    icon: '✨',
    name: 'Generative AI',
    desc: 'Practical experience with Gen AI through Skillible virtual internship. Prompt engineering, LLM APIs, and AI-powered app development.',
  },
  {
    icon: '📐',
    name: 'ML Fundamentals',
    desc: 'Supervised learning, data preprocessing, model evaluation metrics, feature engineering, and Python-based model development workflows.',
  },
]

export const devTools = [
  'VS Code', 'Git', 'GitHub', 'Eclipse', 'NetBeans',
  'Jupyter Notebook', 'MySQL Workbench', 'Linux / Unix', 'Raspberry Pi', 'Postman',
]

export const concepts = [
  'Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Agile / Scrum',
  'SDLC', 'REST Architecture', 'Secure Authentication', 'Database Design',
  'Problem Solving', 'Responsive Design',
]

export const skillTagCloud = [
  { icon: '🐍', name: 'Django' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🐬', name: 'MySQL' },
  { icon: '👁️', name: 'YOLO' },
  { icon: '🤖', name: 'OpenAI API' },
  { icon: '🧠', name: 'TensorFlow' },
  { icon: '🌐', name: 'REST APIs' },
  { icon: '📊', name: 'Streamlit' },
  { icon: '🔧', name: 'Git/GitHub' },
  { icon: '🔌', name: 'IoT/Blynk' },
  { icon: '🐧', name: 'Linux/Unix' },
  { icon: '⚡', name: 'Agile/Scrum' },
]

// ============================================================
// EXPERIENCE
// ============================================================

export const experience = [
  {
    current: true,
    icon: '🏢',
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Apr 2026 – Present',
    location: 'Hyderabad, Telangana',
    summary:
      "Joined India's largest IT services company as a Systems Engineer, embarking on an enterprise software career with a world-class organization serving Fortune 500 clients globally.",
    points: [
      'Completed intensive initial training covering programming fundamentals, software development methodologies, and enterprise technologies at one of India\'s most rigorous tech training programs.',
      'Currently available for project allocation and actively upskilling in Python advanced topics, Cloud Architecture (AWS/Azure), and modern Full-Stack Development frameworks.',
      'Engaging with TCS internal learning platforms, completing enterprise certifications, and collaborating with senior engineers on knowledge transfer sessions.',
      'Applying Agile/Scrum principles and enterprise software development practices in a professional setting with global delivery standards.',
    ],
    tags: ['Python', 'Cloud', 'Full-Stack', 'Enterprise Tech', 'Agile', 'SDLC'],
  },
  {
    current: false,
    icon: '💻',
    role: 'Full Stack Developer Intern',
    company: 'Kodnest Technologies',
    period: 'Jun 2025 – Mar 2026',
    location: 'Bengaluru, Karnataka',
    summary:
      'A 9-month intensive full-stack development internship where I worked on production-grade web applications for real clients, applying the complete software development lifecycle from requirements to deployment.',
    points: [
      'Developed multiple full-stack web applications using Java backend, MySQL databases, and HTML/CSS/JavaScript frontends — handling everything from database schema design to UI implementation.',
      'Implemented comprehensive CRUD operations and complex multi-table database integrations, ensuring data integrity, query optimization, and reliable performance at scale.',
      'Participated actively in Agile development sprints — sprint planning, daily standups, code reviews, retrospectives — gaining real experience with professional software delivery workflows.',
      'Conducted systematic debugging sessions, identified root causes of production issues, and implemented fixes following test-driven approaches with proper documentation.',
    ],
    tags: ['Java', 'MySQL', 'HTML/CSS', 'JavaScript', 'Agile', 'JDBC'],
  },
  {
    current: false,
    icon: '🤖',
    role: 'AI Machine Learning Engineer',
    company: 'Rooman Technologies Pvt Ltd',
    period: 'Sep 2024 – Feb 2025',
    location: 'Bengaluru, Karnataka',
    summary:
      'A focused 6-month AI/ML engineering role where I built foundational and applied machine learning skills, culminating in the delivery of a production-ready AI-powered web application using the OpenAI API.',
    points: [
      'Built strong ML foundations through hands-on Python model development — covering data preprocessing, feature engineering, supervised learning algorithms, model evaluation, and performance tuning.',
      'Designed and delivered a complete AI-based recipe generator project — integrating OpenAI GPT API with a Streamlit frontend for dynamic, personalized recipe recommendations from user input.',
      'Explored neural network fundamentals with TensorFlow — understanding layer architectures, activation functions, training loops, and model deployment concepts.',
      'Applied prompt engineering techniques to effectively leverage generative AI models, developing a practical understanding of LLM capabilities and limitations.',
    ],
    tags: ['Python', 'OpenAI API', 'Streamlit', 'TensorFlow', 'ML', 'Gen AI'],
  },
]

// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  {
    id: 'cravecart',
    featured: true,
    category: ['fullstack'],
    emoji: '🛒',
    gradient: 'from-blue-100 to-blue-200 dark:from-carbon-surface-2 dark:to-carbon-surface',
    name: 'CraveCart',
    tagline: 'Food Ordering & Delivery Web Platform',
    desc: 'A complete food ordering platform built with Django and PostgreSQL. Features restaurant browsing, shopping cart management, a full checkout flow with Razorpay payment gateway integration, coupon and discount system, real-time order status tracking, and automated transactional email notifications for all order events. Built as a production-ready application with authentication, admin dashboard, and responsive UI.',
    metrics: [
      { num: '5+', label: 'Core Modules' },
      { num: '100%', label: 'Responsive' },
      { num: '3', label: 'Integrations' },
    ],
    stack: ['Django', 'PostgreSQL', 'Python', 'Razorpay API', 'HTML/CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'atm-simulator',
    featured: false,
    category: ['desktop'],
    emoji: '🏦',
    gradient: 'from-green-100 to-green-200 dark:from-carbon-surface-2 dark:to-carbon-surface',
    name: 'ATM Simulator & Bank Management',
    tagline: 'Desktop Banking Application · Java Swing',
    desc: 'A fully functional ATM simulator and bank management system built with Java Swing for the desktop UI and JDBC with MySQL backend. Features include balance inquiry, deposits and withdrawals, PIN management, fast cash shortcuts, mini-statement generation, and fund transfers. Improved transaction efficiency by 25% through optimized database queries and streamlined UI workflows.',
    metrics: [
      { num: '25%', label: 'Efficiency Gain' },
      { num: '8+', label: 'Features' },
    ],
    stack: ['Java', 'Java Swing', 'JDBC', 'MySQL'],
    liveUrl: null,
    githubUrl: '#',
  },
  {
    id: 'object-detection',
    featured: false,
    category: ['ai', 'iot'],
    emoji: '👁️',
    gradient: 'from-pink-100 to-pink-200 dark:from-carbon-surface-2 dark:to-carbon-surface',
    name: 'Real-time Object Detection System',
    tagline: 'AI Assistive Tech · Computer Vision · IoT',
    desc: 'An assistive technology system for visually impaired users using YOLOv3 for real-time object detection running on a Raspberry Pi. Provides audio feedback via text-to-speech when objects are detected in the camera frame. Integrated ultrasonic sensors for proximity/obstacle detection and a Blynk IoT dashboard for remote monitoring and configuration. Achieves real-time inference at usable frame rates on edge hardware.',
    metrics: [
      { num: 'YOLOv3', label: 'Model' },
      { num: 'Edge', label: 'Deployment' },
    ],
    stack: ['Python', 'YOLOv3', 'OpenCV', 'Raspberry Pi', 'Blynk IoT'],
    liveUrl: null,
    githubUrl: '#',
  },
  {
    id: 'ai-recipe-generator',
    featured: false,
    category: ['ai'],
    emoji: '🤖',
    gradient: 'from-orange-100 to-orange-200 dark:from-carbon-surface-2 dark:to-carbon-surface',
    name: 'AI-Based Food Recipe Generator',
    tagline: 'Generative AI Web App · OpenAI API',
    desc: 'A Streamlit-powered web application that uses the OpenAI GPT API to generate personalized recipes based on user-specified ingredients, dietary preferences, cuisine type, and cooking time. Features an intuitive conversational interface, ingredient autocomplete, recipe favoriting, and the ability to adjust serving sizes. Demonstrates practical prompt engineering for consistent, well-structured AI outputs.',
    metrics: [
      { num: 'GPT', label: 'Powered' },
      { num: '5+', label: 'Filters' },
    ],
    stack: ['Python', 'OpenAI API', 'Streamlit'],
    liveUrl: null,
    githubUrl: '#',
  },
  {
    id: 'flight-booking',
    featured: false,
    category: ['fullstack'],
    emoji: '✈️',
    gradient: 'from-indigo-100 to-indigo-200 dark:from-carbon-surface-2 dark:to-carbon-surface',
    name: 'Online Flight Booking System',
    tagline: 'Full-Stack Web App · PHP · SQL',
    desc: 'A responsive web application for flight search, booking, and reservation management. Supports user registration and secure authentication, flight search with filters (date, destination, class), seat selection, booking confirmation, and reservation history. Built with a PHP backend and SQL database for reliable data persistence. Implements input validation, SQL injection prevention, and session management.',
    metrics: [
      { num: 'Secure', label: 'Auth System' },
      { num: 'Full', label: 'CRUD' },
    ],
    stack: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    liveUrl: null,
    githubUrl: '#',
  },
]

export const projectFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'iot', label: 'IoT' },
  { key: 'desktop', label: 'Desktop' },
]

// ============================================================
// CERTIFICATIONS
// ============================================================

export const certifications = [
  {
    gold: true,
    issuer: 'Skillible',
    title: 'Generative AI Virtual Internship',
    desc: 'A comprehensive virtual internship program focused on practical Generative AI applications. Covered the foundations of large language models, prompt engineering strategies, OpenAI API integration, building AI-powered applications, and responsible AI practices. Completed hands-on projects using GPT models to solve real-world problems — culminating in the AI Recipe Generator application now in my portfolio.',
    topics: ['Generative AI', 'Prompt Engineering', 'LLMs / GPT', 'OpenAI API', 'AI App Development', 'Responsible AI'],
  },
]

export const training = [
  {
    issuer: 'Tata Consultancy Services',
    title: 'Enterprise Technology & Software Development Training',
    desc: "Completed TCS's rigorous initial training program covering the full spectrum of enterprise software development. Topics included Python programming for enterprise applications, SQL and relational database management, REST API design and development, Unix/Linux system administration, Agile/Scrum methodologies, software quality practices, and TCS's proprietary development frameworks and tools used in client delivery.",
    topics: ['Python', 'SQL', 'REST APIs', 'Unix/Linux', 'Agile/Scrum', 'Enterprise Dev'],
  },
]

export const continuousLearning = [
  {
    icon: '☁️',
    title: 'Cloud Architecture',
    desc: 'AWS and Azure fundamentals, cloud-native application design, serverless architectures, container orchestration with Kubernetes, and DevOps practices for cloud deployment pipelines.',
    progress: 45,
  },
  {
    icon: '🧠',
    title: 'Deep Learning',
    desc: 'Expanding TensorFlow knowledge into CNNs, RNNs, transformer architectures, and practical model deployment. Working toward building and fine-tuning models for vision and NLP tasks.',
    progress: 40,
  },
  {
    icon: '⚡',
    title: 'Advanced Python',
    desc: 'Async programming with asyncio, FastAPI for high-performance APIs, Python design patterns, testing with pytest, and building production-grade backend services beyond Django.',
    progress: 60,
  },
  {
    icon: '🔗',
    title: 'System Design',
    desc: 'Scalability patterns, distributed systems concepts, microservices architecture, caching strategies with Redis, message queues, and designing systems for millions of users.',
    progress: 35,
  },
  {
    icon: '🐋',
    title: 'DevOps & Docker',
    desc: 'Containerization with Docker, CI/CD pipeline setup with GitHub Actions, infrastructure as code, monitoring and logging, and modern deployment workflows.',
    progress: 30,
  },
  {
    icon: '⚛️',
    title: 'React / Frontend',
    desc: 'Modern JavaScript ecosystem, React hooks and state management, component-driven development, and building polished, accessible user interfaces for web applications.',
    progress: 50,
  },
]

// ============================================================
// CONTACT
// ============================================================

export const faqs = [
  {
    q: 'Are you open to remote work?',
    a: "Absolutely. I'm comfortable working fully remote, hybrid, or on-site depending on the opportunity. I have a solid home setup for remote collaboration.",
  },
  {
    q: 'What kind of roles are you looking for?',
    a: 'Full-stack development, backend engineering, AI/ML engineering, or generalist software engineering roles — especially at companies building meaningful products.',
  },
  {
    q: 'Do you take freelance projects?',
    a: "Yes! If you have an interesting web application, AI tool, or software project, I'm happy to discuss collaboration. Reach out with your project brief.",
  },
  {
    q: "What's your preferred tech stack?",
    a: 'Python (Django/FastAPI) + PostgreSQL for backend, JavaScript for frontend. Also experienced with Java for enterprise apps and comfortable picking up new technologies quickly.',
  },
]

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/contact', label: 'Contact' },
]
