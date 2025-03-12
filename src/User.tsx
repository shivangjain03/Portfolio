const ProjectInfo = [
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
        title: "SyncCode",
        desc:'SyncCode is a real-time collaborative code editor designed to enable seamless and efficient coding sessions among multiple users. Leveraging modern web technologies, this platform ensures instant updates and minimal latency, providing a robust environment for collaborative coding. The system is engineered with a scalable backend architecture, supporting up to 7 concurrent users per session while maintaining optimized performance. Key features include syntax highlighting, error checking, and version control. SyncCode addresses the challenges of conventional code editors by offering a more interactive and responsive solution for developers.',
        image: "sync-code.png",
        live: true,
        technologies: ["JavaScript", "CSS", "Socket.IO", "HTML"],
        link: "https://synccode-1-2sm8.onrender.com",
        github: "https://github.com/shivangjain03/SyncCode"
    },


    {
        title: "EasyShare",
        desc:'EasyShare is a cloud-based file sharing system designed to facilitate seamless and secure file sharing over the internet. This project leverages modern web technologies to provide users with a robust platform for hosting, storing, and backing up data, ensuring high accessibility and performance. The system is built to address the challenges of conventional file sharing methods by offering a more controlled and efficient solution.',
        image: "easyshare_photo1.png",
        live: true,
        technologies: ["Tailwind", "React", "CSS", "HTML", "JS", "TypeScript", "Clerk", "Firebase"],
        link: "https://easyshare-jade.vercel.app",
        github: "https://github.com/shivangjain03/easyshare"
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
        skills: ["HTML", "CSS", "JavaScript", "React JS",  "Tailwind CSS", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB",  "PostgresSQL", "Flask"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code",  "MongoDB Compass", ]
    }
]



const ExperienceInfo = [
    {
        role: "Software Developer Intern",
        company: "Utechia Inc",
        date: "January 2025 - Present",
        desc: "Implemented and optimized innovative app solutions by collaborating closely with the founder team, leveraging cutting-edge technologies to streamline processes and drive innovation.",
        skills: ["React", "JavaScript", "TypeScript", "Next.js", "Node.js", "Flask", "API Development"]
    },

    {
        role: "Research Assistant",
        company: "Simon Fraser University",
        date: "December 2024 - Present",
        desc: "Implemented and reviewed open-source human and object-tracking tools to develop and optimize pose-tracking systems using Unity and Mediapipe, ensuring seamless integration of AR and motion-tracking technologies.",
        skills: ["Python", "Unity", "Mediapipe"]
    },
    {
        role: "CS Peer Tutor",
        company: "Simon Fraser University",
        date: "September 2024 - December 2024",
        desc: "As a Computer Science Peer Tutor, I provided personalized guidance and support to fellow students, utilizing my knowledge of programming languages, algorithms, and data structures to foster a collaborative learning environment and enhance their understanding of complex concepts.",
        skills: ["C++", "C", "Python", "Computational Mathematics"]
    },
    {
        role: "Full Stack Developer",
        company: "CJSF 90.1FM",
        date: "May 2024 - September 2024",
        desc: "Led the development and maintenance of a responsive website using JavaScript, React.js, Node.js, and PostgreSQL, enhancing user interaction.",
        skills: ["HTML", "CSS", "React", "JavaScript", "Drupal", "Docker", "TypeSript"]
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
    //"amazonaws",
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
