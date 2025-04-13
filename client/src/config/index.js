export const registerFormControls = [
    {
        name: "userName",
        label: "User name",
        placeholder: "Enter Your Name",
        type: "text",
        componentType: "input"
    },
    {
        name: 'email',
        label: 'email',
        placeholder: 'Enter Your Email',
        componentType: 'input',
        type: 'email',
    },
    {
        name: 'password',
        label: 'password',
        placeholder: 'Enter Your Password',
        componentType: 'input',
        type: 'password',
    }
]



export const loginFormControls = [
    {
        name: 'email',
        label: 'email',
        placeholder: 'Enter Your Email',
        componentType: 'input',
        type: 'email',
    },
    {
        name: 'password',
        label: 'password',
        placeholder: 'Enter Your Password',
        componentType: 'input',
        type: 'password',
    }
]


export const userViewHeaderMenuItems = [
    {
        neme: 'home',
        id: 'home',
        label: 'Home',
        path: '/user/home',
        tooltip: 'All In One'
    },
    {
        neme: 'about',
        id: 'about',
        label: 'About',
        path: '/user/about',
        tooltip: 'About Me'
    },
    {
        neme: 'projects',
        id: 'projects',
        label: 'Projects',
        path: '/user/projects',
        tooltip: 'My HardWorks'
    },
    {
        neme: 'skills',
        id: 'skills',
        label: 'Skills',
        path: '/user/skills',
        tooltip: 'What I Gained'
    },
    {
        neme: 'blogs',
        id: 'blogs',
        label: 'Blogs',
        path: '/user/blogs',
        tooltip: "Let's Think"
    },
    {
        neme: 'contact',
        id: 'contact',
        label: 'Contact',
        path: '/user/contact',
        tooltip: "Let's Connect"
    },
]

export const AboutCardDialogContent = [
    {
       name: "Who I Am",
       heading: "About Me",
       description: "Hi, I'm Muhammad Adnan, a self-taught full-stack developer from Kerala, India. I craft web experiences using the MERN stack (MongoDB, Express, React, Node.js) along with Tailwind CSS for clean, responsive design. My journey into coding didn’t start in a classroom—it started with curiosity, late-night tutorials, and the determination to build something meaningful. With a passion for both the logic of development and the creativity behind it, I love turning ideas into real, usable applications. I’m constantly exploring new technologies, currently focusing on Next.js and AI-driven web development, while staying rooted in the foundations I’ve built myself. When I’m not coding, you’ll probably find me on the football field, buried in a good book, or geeking out over anything tech. Let’s build something awesome together!"
    },
    {
       name: "Tech Stack",
       heading: "What I Gained",
       description: "As a self-taught MERN stack developer, I have honed my skills in building full-stack web applications using the latest technologies. My journey has been driven by curiosity and the desire to create impactful and user-centric applications. I am proficient in MongoDB, Express.js, React.js, Node.js and ect... through consistent learning and hands-on experiencce, I've built projects that showcase my ability to integrate these technologies into a seamless full-stack development process. I am passionate about continuous learning and always eager to explore new tools and frameworks that enhance web development efficiency."
    },
    {
       name: "My Journey",
       heading: "My Way",
       description: "My journey into web development began as a personal challenge to learn and grow as a self-taught developer. Starting with the basics of HTML, CSS,and JavaScript, I quickly realized my love for creating things that people could interact whith. As I delved deeper into the world of web development, I discovered the power of Node.js,Express.js, MongoDB, and React.js. I have spent countless hours building projects, breakiing them down, and learning through practice. With each project, I've gained confidence in my ability to develop full-stack applications using the MERN stack. From building e-commerce sites to creating personal projects, I've continuously pushed myself to learn new concepts and implement them effectively. Through dedication and persistence, I've honed my skills as a MERN stack developer. I'am excited to continue growing, solving problems, and building applications that make an impact."
    },
    {
       name: "Education",
       heading: "Education",
       description: "After completing my higher secondary education (Plus Two), I joined a Polytechnic course in Computer Engineering. However, during the first semester, I realized the syllabus mainly focused on general science subjects and didn't introduce me to actual coding or development. With no exposure to programming and a growing curiosity for how software works, I decided to step away and take a different path. That’s when my real education began—self-taught, driven by passion. I started learning web development at night, often teaching myself through online resources and projects. During the day, I worked various jobs to support my learning journey. It wasn't the traditional route, but it built resilience, discipline, and a deep love for what I do today."
    },
    {
       name: "Hobbies",
       heading: "Interested",
       description: "When I'm not writing code, you'll probably find me on the football field, lost in a book, or geeking out over the latest in tech."
    },
    {
       name: "Current Focus",
       heading: "Current Focus",
       description: "I've built a strong base in the MERN stack and Tailwind CSS, and now I’m leveling up by learning Next.js and experimenting with AI-driven web experiences."
    },
    {
       name: "Let's Connect",
       heading: "Let's Connect",
       description: "Hiring? Got a cool collab idea? Or just wanna geek out over some code? Hit me up—I’m always up for a good dev chat! I genuinely enjoy connecting with fellow developers, sharing ideas, and learning from different perspectives. Whether it's building something exciting together, exchanging thoughts on tech trends, or even just giving or receiving recommendations, I’m just a message away. Let’s connect, collaborate, and grow—one line of code at a time!"
    },
    {
       name: "Journey",
       heading: "Journey",
       description: "My journey into web development started with pure curiosity—what began as a simple 'How does this website work?' moment quickly turned into a passion for building things from scratch. I dove into the MERN stack, learning React, MongoDB, Express, and Node.js through self-driven projects, late-night bugs, and a lot of coffee-fueled problem-solving. As I grew, I started combining design with logic using Tailwind CSS, and now I’m pushing into the world of Next.js and AI-powered applications. Every project I take on teaches me something new, and I’m excited to keep growing, building, and solving real-world problems through code."
    },
    {
       name: "Philosophy",
       heading: "My Thoughts",
       description: "I believe great code is like great coffee—clean, strong, and best when shared. I'm not just here to write functions; I'm here to create meaningful experiences, one component at a time. I see bugs as puzzles, feedback as fuel, demotivate as motivate, and learning as a lifelong quest. Whether it's building a product or leveling up my skills, my goal is simple: stay curious, stay kind, and keep shipping."
    },
]


export const newProjectAddControlls = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter the project name",
    conpomentType: "input",
    type: "text",
  },
  {
    name: "technologies",
    label: "Technologies",
    placeholder: "Technologies used (e.g. React, Node.js, MongoDB)",
    conpomentType: "input",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Write a short project description",
    conpomentType: "textarea",
    type: "text",
  },
  {
    name: "deployUrl",
    label: "Live URL",
    placeholder: "https://yourproject.com",
    conpomentType: "input",
    type: "url",
  }
];



export const userContactControlls = [ 
    {
        name: "name",
        label: "Name",
        placeholder: "Enter your name",
        componentType: "input",
        type: "text"
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email"
    },
    {
        name: "subject",
        label: "Subject",
        placeholder: "Enter the subject",
        componentType: "input",
        type: "text"
    },
    {
        name: "message",
        label: "Message",
        placeholder: "Write your message here...",
        componentType: "textarea",
        type: "text"
    }
]


