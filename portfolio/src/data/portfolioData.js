
import profileImg from "../assets/images/profile/profile.jpg";

import aiChatbotImg from "../assets/images/projects/ai-chatbot.jpg";
import signBridgeImg from "../assets/images/projects/signbridge-ai.jpg";
import utilityDashboardImg from "../assets/images/projects/utility-dashboard.jpg";
import carRentalImg from "../assets/images/projects/car-rental.jpg";
export const personal = {
  name: 'Tejasvi Kesharwani',
  titles: [
    'Frontened Developer',
    'AI/ML Enthusiast',
    'React.js Developer',
    'Problem Solver',
  ],
  tagline:
    "Computer Science Engineering undergraduate passionate about crafting modern, responsive, and user-friendly web experiences. Recently completed a Generative AI Internship, where I explored AI-powered applications and intelligent solutions. Always eager to learn, build, and create meaningful digital experiences..",
  summary:
    "B.Tech Computer Science and Engineering student at United College of Engineering and Research, passionate about frontened development, artificial intelligence, and building products that genuinely help people. Hands-on experience with React, Python, FastAPI, and modern AI tooling gained through hackathons, internships, and personal projects.",
  objective:
  
"To begin my career as a Frontend Developer, contribute to innovative projects, continuously enhance my technical skills, and build impactful digital products by combining modern web technologies with Artificial Intelligence.", 
  location: 'Prayagraj, Uttar Pradesh, India',
  email: 'tejasvikeshari0708@gmail.com',
  phone: '+91 8299279120',
  resumeFile: '/resume.pdf', // place your resume PDF in the /public folder with this name
  avatar: profileImg,
}

export const socials = [
  { name: 'GitHub', url: 'https://github.com/tejasvikeshari', icon: 'FaGithub' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tejasvi-kesharwani-9b6706336',
    icon: 'FaLinkedin',
  },
  { name: 'LeetCode', url: 'https://leetcode.com/u/07Z1oLCLp7/', icon: 'SiLeetcode' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/tejasvikeshari', icon: 'FaHackerrank' },
  { name: 'Email', url: 'mailto:tejasvikeshari0708@gmail.com', icon: 'FaEnvelope' },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'United College of Engineering and Research',
    duration: '2024 – 2028',
    details: 'CGPA: 8.86 (1st Year) · 8.65 (2nd Year)',
  },
]

export const interests = [
  'Artificial Intelligence',
  'Frontened Development',
  'Open Source',
  'Hackathons',
  'Singing / Rap',
  'NCC & Sports',
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: 'SiC' },
      { name: 'Java', icon: 'FaJava' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'JavaScript', icon: 'SiJavascript' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
      { name: 'React.js', icon: 'SiReact' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'FastAPI', icon: 'SiFastapi' },
      { name: 'Node.js', icon: 'SiNodedotjs' },
    ],
  },
  
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'VS Code', icon: 'SiVisualstudiocode' },
    
    ],
  },
]

export const projects = [
  {
    title: 'AI Chatbot for Student Support Services',
    image: aiChatbotImg,
    description:
      'An AI-powered PDF chatbot that lets users upload documents and get accurate, context-aware answers using semantic search and a React + FastAPI architecture.',
    features: [
      'Upload PDFs and ask natural-language questions',
      'Context-aware answers via Google Gemini API',
      'FAISS + Sentence Transformers for semantic search',
      'React frontend with a FastAPI backend',
    ],
    tech: ['React.js', 'Vite', 'Python', 'FastAPI', 'Google Gemini API', 'FAISS', 'Sentence Transformers', 'PyPDF'],
    github: 'https://github.com/tejasvikeshari',
    demo: '',
  },
  {
    title: 'SignBridge AI — Uhack 4.0',
    image: signBridgeImg,
    description:
      'An accessibility-first platform built at Uhack 4.0 with three modules supporting deaf-mute, visually impaired, and dyslexic users — placed among the Top 66 out of 260+ teams.',
    features: [
      'Deaf-Mute Module: real-time sign language recognition → text & speech',
      'Visually Impaired Module: voice-assisted navigation & audio feedback',
      'Dyslexic Module: adaptive reading UI with custom fonts & spacing',
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'HTML', 'CSS', 'JavaScript', 'React.js'],
    github: 'https://github.com/tejasvikeshari',
    demo: '',
  },
  {
    title: 'React Utility Dashboard & Portfolio',
    image: utilityDashboardImg,
    description:
      'A responsive, dark-themed utility dashboard integrating 10+ modules including authentication, real-time weather, Google Maps, and arithmetic tools.',
    features: [
      '10+ integrated modules in one dashboard',
      'React Hooks for state, React Router for navigation',
      'Dark / Light theme switching',
      'Reusable utility components (Palindrome & Prime checkers)',
    ],
    tech: ['React.js', 'React Router', 'CSS3', 'JavaScript'],
    github: 'https://github.com/tejasvikeshari',
    demo: '',
  },
  {
    title: 'Car Rental Management System',
    image: carRentalImg,
    description:
      'A Java-based Car Rental Management System built on core OOP principles to automate bookings, returns, and billing while streamlining fleet and customer data.',
    features: [
      'Booking, return, and billing automation',
      'OOP design using Inheritance & Encapsulation',
      'Reduced manual record-keeping errors',
      'Improved overall system efficiency',
    ],
    tech: ['Java', 'OOP'],
    github: 'https://github.com/tejasvikeshari',
    demo: '',
  },
]


export const achievements = [
  {
    title: 'Girls in Tech Empowerment Award — UHack 4.0',
    description: 'Secured Top 66 Finalist position among 260+ teams at UHack 4.0.',
    date: '2025',
    image: '/src/assets/images/achievements/uhack.jpg',
  },
  {
    title: 'NCC "B" Certificate — Grade A',
    description: "Passed the NCC 'B' Certificate examination with an 'A' Grade.",
    date: '2025',
    image: '/src/assets/images/achievements/ncc-b-certificate.jpg',
  },
  {
    title: 'Gold & Silver Medals — NCC Camps',
    description: 'Won Gold and Silver medals across various curriculum events at two NCC training camps.',
    date: '2024 – 2025',
    image: '/src/assets/images/achievements/ncc-medals.jpg',
  },
  {
    title: 'Gold Medal — Kho-Kho, Udaan Sports Fest',
    description: 'Performed NCC piloting to inaugurate Udaan Sports Fest and secured a Gold Medal in Kho-Kho.',
    date: '2025',
    image: '/src/assets/images/achievements/kho-kho-gold.jpg',
  },
  {
    title: 'Bronze Medal — Relay Race, Udaan Sports Fest',
    description: 'Secured a Bronze Medal in the Relay Race at Udaan Sports Fest.',
    date: '2025',
    image: '/src/assets/images/achievements/relay-bronze.jpg',
  },
  {
    title: 'Letter of Appreciation (x2)',
    description: 'Received twice from United College of Engineering and Research for top academic performance in sessionals.',
    date: '2024 – 2025',
    image: '/src/assets/images/achievements/letter-of-appreciation.jpg',
  },
]

export const certificates = [
  {
    name: 'Deloitte Virtual Internship — Technology',
    organization: 'Deloitte',
    date: 'Jul 30, 2025',
    image: '/src/assets/images/certificates/deloitte.jpg',
  },
  {
    name: 'Virtual Internship — Generative AI, ML & LLMs',
    organization: 'IBM',
    date: '2025',
    image: '/src/assets/images/certificates/ibm.jpg',
  },
  {
    name: 'Summer Training — Core Java with Collections',
    organization: 'United College of Engineering and Research',
    date: 'Jun – Aug 2025',
    image: '/src/assets/images/certificates/core-java.jpg',
  },
  {
    name: 'Generative AI Workshop',
    organization: 'NXT Wave',
    date: '2025',
    image: '/src/assets/images/certificates/nxtwave-genai.jpg',
  },
  {
    name: "NCC 'B' Certificate",
    organization: 'National Cadet Corps',
    date: '2025',
    image: '/src/assets/images/certificates/ncc-b.jpg',
  },
  {
    name: 'Smart India Hackathon — Participation & Winning',
    organization: 'Smart India Hackathon (SIH)',
    date: '2025',
    image: '/src/assets/images/certificates/sih.jpg',
  },
  {
    name: 'Python for Data Science',
    organization: 'NPTEL / Online Course',
    date: '2025',
    image: '/src/assets/images/certificates/python-ds.jpg',
  },
]

export const experience = [
  {
    company: 'United College of Engineering and Research',
    logo: '/src/assets/images/experience/ucer.jpg',
    position: 'Summer Training — Core Java with Collection Framework',
    duration: 'Jun 2025 – Aug 2025',
    description:
      'Completed 60 hours of summer training in Core Java, gaining hands-on experience with object-oriented programming, data handling, and the Java Collections Framework.',
  },
  {
    company: 'Deloitte',
    logo: '/src/assets/images/experience/deloitte.jpg',
    position: 'Virtual Internship — Technology',
    duration: 'Completed Jul 30, 2025',
    description:
      "Completed Deloitte's Technology virtual internship program, working through real-world style business technology case studies.",
  },
  {
    company: 'IBM',
    logo: '/src/assets/images/experience/ibm.jpg',
    position: 'Virtual Internship — Generative AI & ML',
    duration: '2025',
    description:
      'Focused on Generative AI, Machine Learning, LLMs, and prompt engineering techniques through guided, hands-on modules.',
  },
  {
    company: 'NXT Wave',
    logo: '/src/assets/images/experience/nxtwave.jpg',
    position: 'Generative AI Workshop — Attendee',
    duration: '2025',
    description:
      'Attended an intensive workshop on Generative AI concepts, gaining exposure to LLMs, prompt engineering, and modern AI tools.',
  },
]

export const codingProfiles = [
  {
    platform: 'LeetCode',
    icon: 'SiLeetcode',
    username: 'tejasvikeshari',
    rating: '',
    url: 'https://leetcode.com/tejasvikeshari',
  },
  {
    platform: 'HackerRank',
    icon: 'FaHackerrank',
    username: 'tejasvikeshari',
    rating: '',
    url: 'https://www.hackerrank.com/profile/tejasvikeshari',
  },
]

export const github = {
  username: 'tejasvikeshari',
}

export const contact = {
  address: 'Prayagraj, Uttar Pradesh, India',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.0!2d81.8546!3d25.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPrayagraj%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1620000000000',
  // EmailJS — create a free account at https://www.emailjs.com and paste your own IDs here
  emailjs: {
    serviceId: 'YOUR_EMAILJS_SERVICE_ID',
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  },
}

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Experience', href: '#experience' },
  { name: 'My Journey', href: '#journey' },
  { name: 'GitHub', href: '#github' },
  { name: 'Coding', href: '#coding' },
  { name: 'Contact', href: '#contact' },
]
