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