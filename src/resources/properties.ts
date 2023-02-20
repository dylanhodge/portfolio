type Skill = {
    skill: string,
    level: 1 | 2 | 3 | 4 | 5
};

type Certification = {
    name: string,
    link: string
}

type Properties = {
    name: string,
    title: string,
    company: string,
    email: string,
    linkedIn: string,
    github: string,
    messages: {
        welcome: string
    },
    skills: Skill[],
    certifications: Certification[]
};

const properties: Properties = {
    name: "Dylan Hodge",
    title: "Software Engineer",
    company: "John Deere",
    email: "djhodge77@gmail.com",
    linkedIn: "www.linkedin.com/in/dylan-j-hodge",
    github: "github.com/dylanhodge",
    messages: {
        welcome: "Hello! My name is Dylan Hodge and I am the developer you need. I have a passion for all parts of a " +
            "full-stack web application, and my experience backs it up. Through 5+ years at John Deere, I have worked " +
            "on cloud security, front end, back end, AWS, and CI-CD related projects and tasks. On these teams, I have " +
            "developed proficiency and expertise in Python, JavaScript & TypeScript, Java, ReactJS, Spring Boot, Git, " +
            "Github Actions, Jenkins, and Amazon Web Services. Outside of work, I enjoy expanding my repertoire through " +
            "the online learning platforms Udemy and Coursera and developing my own personal projects. Currently I am " +
            "trying to teach myself machine learning and game development with Unity. Below you can find a detailed " +
            "description of personal projects I have created over the years. Enjoy!"
    },
    skills: [
        {
            skill: "Python",
            level: 5
        },
        {
            skill: "JavaScript",
            level: 5
        },
        {
            skill: "TypeScript",
            level: 4
        },
        {
            skill: "CSS",
            level: 4
        },
        {
            skill: "Java",
            level: 3
        },
        {
            skill: "ReactJS",
            level: 4
        },
        {
            skill: "Spring Boot",
            level: 4
        },
        {
            skill: "Git",
            level: 5
        },
        {
            skill: "Github Actions",
            level: 3
        },
        {
            skill: "Jenkins",
            level: 2
        },
        {
            skill: "RTL",
            level: 3
        },
        {
            skill: "Bootstrap",
            level: 2
        },
        {
            skill: "MongoDB",
            level: 3
        },
        {
            skill: "SQL",
            level: 2
        },
        {
            skill: "AWS",
            level: 4
        },
        {
            skill: "AWS Lambda",
            level: 4
        },
        {
            skill: "AWS IAM",
            level: 4
        },
        {
            skill: "Agile",
            level: 5
        }
    ],
    certifications: [
        {
            name: "Nielsen-Norman UI Certificate",
            link: ""
        }
    ]
};

export default properties;
