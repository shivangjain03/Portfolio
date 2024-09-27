const ProjectInfo = [
    {
        title: "Personal Portfolio Website",
        desc:'I developed a responsive and interactive personal portfolio website using React for a modular, component-based architecture, and Tailwind CSS for streamlined, responsive styling. The site structure was built with HTML and CSS, while JavaScript was utilized to enhance interactivity and functionality. The portfolio is designed to showcase my projects, skills, and experience in a professional and user-friendly manner, with a focus on performance optimization and accessibility.',
        image: "Portfolio.png",
        live: true,
        technologies: ["React", "Tailwind", "CSS", "HTML", "JS", "TypeScript"],
        link: "https://shivangjain.vercel.app",
        github: ""
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
        role: "CS Peer Tutor",
        company: "Simon Fraser University",
        date: "September 2024 - Present",
        desc: "As a Computer Science Peer Tutor, I provided personalized guidance and support to fellow students, utilizing my knowledge of programming languages, algorithms, and data structures to foster a collaborative learning environment and enhance their understanding of complex concepts.",
        skills: ["C++", "C", "Python", "Computational Mathematics"]
    },
    {
        role: "Web Developer",
        company: "CJSF 90.1FM",
        date: "May 2023 - Present",
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
