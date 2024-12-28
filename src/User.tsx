const ProjectInfo = [
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
    {
        title: "Tic-tac-toe",
        desc:"In this project, I implemented several adversarial search algorithms for an extended n x n TicTacToe game. The task involved developing MinMax, MinMax with AlphaBeta Pruning, and MonteCarlo Tree Search (MCTS) algorithms. The game includes a timer setting to limit the depth of search for MinMax and AlphaBeta algorithms, requiring the implementation of depth-cutoff versions. I also designed a smart evaluation function to assess board configurations, enhancing the AI's decision-making process. The goal was to ensure the AI never loses, achieving a solved game state. Additionally, I analyzed why the AI might exceed the set time limit and proposed solutions to ensure the runtime respects the time limit.",
        image: "tic-tac-toe.png",
        live: false,
        technologies: ["Python", "NumPy", "Tkinter"],
        link: "https://github.com/shivangjain03/tic-tac-toe",
        github: "https://github.com/shivangjain03/tic-tac-toe"
    },
    
    {
        title: "Vaccum Cleaner",
        desc:"In this project, I implemented several search algorithms for a cleaning robot navigating a grid-based environment. The robot's task was to clean dirty cells while avoiding walls, using uninformed (DFS, BFS, UCS) and informed (Greedy, A*) search algorithms. I also implemented a reflex agent for random movement. The GUI displayed the robot's path and explored cells, with counters tracking steps and explored nodes. I incorporated cost functions, such as turn costs and grid preferences, along with heuristic options like Manhattan and Euclidean distance, to optimize the robots pathfinding efficiency.",
        image: "vaccum1.png",
        live: false,
        technologies: ["Python", "Pygame", "Tkinter"],
        link: "https://github.com/shivangjain03/Vaccum-Cleaner",
        github: "https://github.com/shivangjain03/Vaccum-Cleaner"
    },
    {
        title: "Stock Management System",
        desc: "I designed and implemented a stock management application using Python and SQL, allowing for efficient inventory management. Python was used to integrate dynamic functionalities with the SQL database, enabling seamless CRUD operations (Create, Read, Update, Delete) for stock items. The application features a user-friendly interface for efficient data manipulation and inventory tracking, ensuring smooth management of stock levels and transactions.",
        image: "Stock.png",
        live: false,
        technologies: ["Python", "MySQL"],
        link: "https://github.com/shivangjain03/Stock-Management-System",
        github: "https://github.com/shivangjain03/Stock-Management-System"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS",  "Tailwind CSS", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB",  "PostgresSQL"]
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
        role: "Software Engineer",
        company: "CJSF 90.1FM",
        date: "May 2024 - September 2024",
        desc: "I spearheaded the migration of the organization's website from Drupal 7 to Drupal 8, leveraging my expertise in PHP, HTML5, CSS3, JavaScript and Drupal to ensure a seamless and efficient transition.",
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
