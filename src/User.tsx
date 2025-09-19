const ProjectInfo = [
    {
        title: "DocForge",
        desc:"DocForge is an AI-powered documentation platform that automates code parsing, multi-language summarization, version comparison, and GitHub integration to streamline complex documentation workflows. Core Features include: FastAPI microservices with OAuth2 auth, PostgreSQL-based multi-tenant storage, real-time document diffing, and version control. Built for scale with Docker and Kubernetes for future cloud-native deployment.",
        image: "DocForge.png",
        live: false,
        technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker", "Kubernetes"],
        link: "https://github.com/shivangjain03/DocForge",
        github: "https://github.com/shivangjain03/DocForge"
    },
    
    {
        title: "SyncCode",
        desc:'SyncCode is a real-time collaborative code editor designed to enable seamless and efficient coding sessions among multiple users. Leveraging modern web technologies, this platform ensures instant updates and minimal latency, providing a robust environment for collaborative coding. The system is engineered with a scalable backend architecture, supporting up to 7 concurrent users per session while maintaining optimized performance. Key features include syntax highlighting, error checking, and version control. SyncCode addresses the challenges of conventional code editors by offering a more interactive and responsive solution for developers.',
        image: "sync-code.png",
        live: true,
        technologies: ["React", "Node.js", "Socket.IO", "JavaScript", "Tailwind CSS"],
        link: "https://synccode-1-2sm8.onrender.com",
        github: "https://github.com/shivangjain03/SyncCode"
    },


    {
        title: "EasyShare",
        desc:'EasyShare is a cloud-based file sharing system designed to facilitate seamless and secure file sharing over the internet. This project leverages modern web technologies to provide users with a robust platform for hosting, storing, and backing up data, ensuring high accessibility and performance. The system is built to address the challenges of conventional file sharing methods by offering a more controlled and efficient solution.',
        image: "easyshare_photo1.png",
        live: true,
        technologies: ["Next.js", "React", "Firebase", "JavaScript", "Tailwind CSS"],
        link: "https://easyshare-jade.vercel.app",
        github: "https://github.com/shivangjain03/easyshare"
    },

    {
        title: "Chaos Learn",
        desc:"Chaos Learn automatically generates a lesson plan based on your study topic and curates a mix of: Educational videos 📖 – Structured lessons tailored to your topic. Fun videos – Interleaved for better engagement, based on a fun theme you pick! Quizzes – Automatically generated quizzes based on the content of the videos you’ve watched. Core Features Smart Video Curation – Uses GPT-4o and YouTube search to fetch relevant lessons. Easy Navigation – Click to play videos in a seamless playlist. Fun Mode – Adjust the fun video frequency (e.g., every 3rd video). Quiz Mode – Auto-generated quizzes to reinforce key takeaways.",
        image: "chaos-learn.png",
        live: true,
        technologies: ["Python", "Flask", "React","OpenAI API", "Rag"],
        link: "https://devpost.com/software/chaoslearn",
        github: "https://github.com/teddymalhan/chaoslearn"
    },

    {
        title: "Smile Please",
        desc:"Smile Please is an AI-powered Web3 platform that rewards users with small cryptocurrency payments when they smile. Using facial recognition and sentiment analysis, the system detects and verifies genuine smiles, then triggers a micro-payment in crypto. The goal is to encourage positivity and well-being while showcasing the potential of AI and blockchain in a fun and engaging way.",
        image: "gallery.jpg",
        live: true,
        technologies: ["Next.js", "Ethers.js", "Web3"],
        link: "https://smile-please-pi.vercel.app",
        github: "https://github.com/shivangjain03/Smile_Please"
    },
    {
        title: "Personal Portfolio ",
        desc:'I developed a responsive and interactive personal portfolio website using React for a modular, component-based architecture, and Tailwind CSS for streamlined, responsive styling. The site structure was built with HTML and CSS, while JavaScript was utilized to enhance interactivity and functionality. The portfolio is designed to showcase my projects, skills, and experience in a professional and user-friendly manner, with a focus on performance optimization and accessibility.',
        image: "Portfolio.png",
        live: true,
        technologies: ["React", "Tailwind", "CSS", "HTML", "JS", "TypeScript", "Firebase"],
        link: "",
        github: ""
    },
    
    
   
]


const SkillInfo = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "Django", "Supabase"]
  },
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "JavaScript", "TypeScript"]
  },
  
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "VS Code", "MongoDB Compass", "Docker", "Kubernetes", "AWS", "Azure", "JIRA"]
  }
];



const ExperienceInfo = [
    {
        role: "Software Developer Intern",
        company: "Kinaxis",
        date: "September 2025 - Present",
        desc: "Core Algorithm, Product Team",
        skills: ["C++", "C#", "Git", "Bitbucket", "Jenkins", "NUnit"]
    },
    {
        role: "Software Developer",
        company: "SFU Blueprint (Mosaic)",
        date: "April 2025 - Present",
        desc: "Developed and optimized dynamic UI components using React and Next.js, improving Lighthouse scores by 35% and enhancing mobile responsiveness for MOSAIC’s 26,000+ annual clients. Integrated Supabase for real-time updates and secure JWT-based authentication, and shipped 10+ production-ready features through Agile sprints with CI/CD automation.",
        skills: ["React", "Next.js", "Supabase", "PostgreSQL", "CI/CD", "Agile", "GitHub Actions"]
    },
    {
        role: "HCI Researcher",
        company: "ixlab",
        date: "April 2025 - September 2025",
        desc: "Designed and developed a proof-of-concept extension, “TeachMate,” integrated with Canvas LMS to streamline workflows for instructors and TAs. Conducted user and pilot studies with teaching staff, synthesized feedback, and iteratively refined features to enhance usability, reduce AI hallucinations, and improve instructional efficiency. Established a validated foundation for scalable adoption.",
        skills: ["Flask", "Python", "React", "JavaScript", "Git", "Docker", "Kubernetes"]
    },
    {
        role: "Machine Learning Intern",
        company: "Simon Fraser University",
        date: "January 2025 - September 2025",
        desc: "Designed and deployed an LLM-based static analysis system to detect async anti-patterns in Node.js projects, improving code audit efficiency by 50%. Built a benchmarking pipeline to evaluate LLM-generated patches against industry standards and ran empirical validations across 20+ JavaScript repositories, achieving 80%+ detection accuracy.",
        skills: ["LLM", "Node.js", "JavaScript", "Python", "Static Analysis"]
    },
    {
        role: "CS Peer Tutor",
        company: "Simon Fraser University",
        date: "September 2024 - December 2024",
        desc: "As a Computer Science Peer Tutor, I provided personalized guidance and support to fellow students, utilizing my knowledge of programming languages, algorithms, and data structures to foster a collaborative learning environment and enhance their understanding of complex concepts.",
        skills: ["C++", "C", "Python", "Computational Mathematics"]
    },
    {
        role: "Software Engineer Intern",
        company: "CJSF 90.1FM",
        date: "May 2024 - September 2024",
        desc: "Led the development of a responsive web platform using React.js, Node.js, and PostgreSQL, boosting user engagement by 21%. Built scalable REST APIs and integrated audio streaming endpoints for reliable live broadcasts. Designed an internal admin dashboard for real-time stream and payment monitoring, reducing manual ops by 70%.",
        skills: ["React", "JavaScript","Docker", "TypeSript", "PostgreSQL", "Node.js", "REST API", "Express.js"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "python",
    "c",
    "cplusplus",
    
    //"dart",
    "java",
    "react",
    "angular",
    //"flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    //"selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    //"prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    //"nginx",
    //"vercel",
    //"testinglibrary",
    //"jest",
    //"cypress",
    "docker",
    "git",
    //"jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    //"sonarqube",
    "figma",
];
export {  ProjectInfo, SkillInfo, ExperienceInfo, Slugs };
