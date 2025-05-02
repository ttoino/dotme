import * as cv from "@/types/cv";

const info: cv.info = {
  name: "Diogo Fernandes",
  roles: [
    "Vice-president @ NIAEFEUP",
    "Head of Program @ ENEI",
    "MSc in Computer Engineering @ FEUP",
  ],
  bio: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Diogo Fernandes is a Master's student in Informatics Engineering at FEUP, with hands-on experience in software development and leadership in student-driven initiatives.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        { type: "text", text: "As " },
        { type: "text", text: "Vice President", bold: true },
        { type: "text", text: " of NIAEFEUP and " },
        { type: "text", text: "Head of Program", bold: true },
        {
          type: "text",
          text: " for ENEI 2025, he has played key roles in organizing large-scale events and driving open-source projects.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "His technical background includes building component libraries in ",
        },
        { type: "text", text: "React", bold: true },
        { type: "text", text: ", deploying with modern toolchains like " },
        { type: "text", text: "NPM", bold: true },
        { type: "text", text: " and " },
        { type: "text", text: "Storybook", bold: true },
        { type: "text", text: ", and managing team workflows using " },
        { type: "text", text: "Agile methodologies", bold: true },
        { type: "text", text: "." },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Diogo has also earned recognition at national hackathons and brings strong collaboration, communication, and problem-solving skills to every challenge he takes on.",
        },
      ],
    },
  ],
};

const contacts: cv.contacts = {
  email: "diogotvf7@gmail.com",
  github: "github.com/diogotvf7",
  linkedin: "linkedin.com/in/diogotv-fernandes",
};

const kevel_internship: cv.role = {
  title: "Software Engineer Intern",
  startDate: "July 2023",
  endDate: "July 2023",
  description: [
    {
      type: "paragraph",
      children: [
        { type: "text", text: "Used " },
        { type: "text", text: "Storybook", bold: true },
        { type: "text", text: " to develop a " },
        { type: "text", text: "React component library", bold: true },
        { type: "text", text: " to be used across the company's products." },
      ],
    },
    {
      type: "paragraph",
      children: [
        { type: "text", text: "Used " },
        { type: "text", text: "NPM", bold: true },
        { type: "text", text: " to publish Kevel's theme." },
      ],
    },
    {
      type: "paragraph",
      children: [
        { type: "text", text: "Deployed the component library to " },
        { type: "text", text: "GitHub Pages", bold: true },
        { type: "text", text: "." },
      ],
    },
  ],
};

const kevel: cv.experience = {
  organization: "Kevel",
  description: [
    {
      type: "paragraph",
      children: [
        { type: "text", text: "Kevel provides " },
        { type: "text", text: "ad-serving APIs", bold: true },
        { type: "text", text: " that help businesses build " },
        { type: "text", text: "custom ad platforms", bold: true },
        { type: "text", text: ", offering greater control over " },
        { type: "text", text: "monetization", bold: true },
        { type: "text", text: " and " },
        { type: "text", text: "user privacy", bold: true },
        { type: "text", text: "." },
      ],
    },
  ],
  location: "Porto, Portugal",
  roles: [kevel_internship],
  x: 0,
  y: 0,
  w: 4,
  h: 4,
};

const work: cv.area = {
  name: "Experience",
  entries: [kevel],
};

const ni_vice: cv.role = {
  title: "Vice-President and Head of Human Resources",
  startDate: "Jun 2022",
  endDate: "Present",
  description: [
    {
      type: "list",
      items: [
        [
          { type: "text", text: "As the " },
          { type: "text", text: "Vice President", bold: true },
          {
            type: "text",
            text: ", I support the President in decision-making and organize regular meetings to enhance communication and cohesion within ",
          },
          { type: "text", text: "NIAEFEUP", bold: true },
          { type: "text", text: "." },
        ],
        [
          { type: "text", text: "As the " },
          { type: "text", text: "Head of Human Resources", bold: true },
          {
            type: "text",
            text: ", I managed recruitment and coordinate team-building activities to improve member integration and organizational cohesion.",
          },
        ],
      ],
    },
  ],
};

const ni_tts: cv.role = {
  title: "Project Manager of TTS",
  startDate: "Jun 2022",
  endDate: "Present",
  description: [
    {
      type: "paragraph",
      children: [
        { type: "text", text: "As the " },
        { type: "text", text: "Project Manager", bold: true },
        {
          type: "text",
          text: " for TTS, I oversaw strategic planning and team management to align with project objectives.",
        },
      ],
    },
    {
      type: "list",
      items: [
        [
          {
            type: "text",
            text: "Led a refactor of the codebase to enhance ",
          },
          { type: "text", text: "maintainability", bold: true },
          { type: "text", text: " and " },
          { type: "text", text: "scalability", bold: true },
          { type: "text", text: "." },
        ],
        [
          {
            type: "text",
            text: "Implemented a ",
          },
          { type: "text", text: "Kanban board", bold: true },
          { type: "text", text: " to optimize workflow." },
        ],
        [
          {
            type: "text",
            text: "Integrated ",
          },
          { type: "text", text: "Scrum methodologies", bold: true },
          { type: "text", text: " for efficient project management." },
        ],
        [
          {
            type: "text",
            text: "Introduced UI/UX enhancements such as ",
          },
          { type: "text", text: "streamlined navigation", bold: true },
          { type: "text", text: " and " },
          { type: "text", text: "intuitive interface elements", bold: true },
          { type: "text", text: " to improve the TTS experience." },
        ],
      ],
    },
  ],
};

const ni_member: cv.role = {
  title: "Member SINF Program Department",
  startDate: "Jun 2022",
  endDate: "Present",
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Contributed to the SINF Program Department's efforts in organizing an event with 20 companies and over 350 participants.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Assisted in planning the event's schedule and in establishing partnerships with companies for activities.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "As a member, I helped on the development of projects and on the organization of internal and external, recreational and pedagogical events.",
        },
      ],
    },
  ],
};

const ni: cv.experience = {
  organization: "NIAEFEUP",
  description: [
    {
      type: "paragraph",
      children: [
        { type: "text", text: "NIAEFEUP is the " },
        { type: "text", text: "Informatics Student Group", bold: true },
        {
          type: "text",
          text: " at the Faculty of Engineering of the University of Porto (",
        },
        { type: "text", text: "FEUP", bold: true },
        { type: "text", text: "), dedicated to promoting " },
        { type: "text", text: "student development", bold: true },
        { type: "text", text: " through " },
        { type: "text", text: "academic events", bold: true },
        { type: "text", text: ", " },
        { type: "text", text: "workshops", bold: true },
        { type: "text", text: ", and " },
        { type: "text", text: "open-source projects", bold: true },
        { type: "text", text: "." },
      ],
    },
  ],
  location: "Porto, Portugal",
  roles: [ni_member, ni_tts, ni_vice],
  x: 4,
  y: 0,
  w: 4,
  h: 4,
};

const enei: cv.experience = {
  organization: "ENEI'25",
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "The program will count with over 40 lectures and workshops, with speakers from different areas of expertise, some of which are internationally recognized.",
        },
      ],
    },
  ],
  location: "Porto, Portugal",
  roles: [
    {
      title: "Head of Program Department",
      startDate: "Jun 2024",
      endDate: "Present",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Responsible for the organization of the event's schedule and for developing Gammification strategies to engage participants.",
            },
          ],
        },
      ],
    },
  ],
  x: 8,
  y: 0,
  w: 4,
  h: 4,
};

const extracurricular: cv.area = {
  name: "Extracurricular Activities",
  entries: [ni, enei],
};

const shift_appens: cv.role = {
  title: "2nd Place",
  startDate: "Apr 2024",
  endDate: "Apr 2024",
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Created an innovative solution to facilitate book selection by providing comprehensive information through a simple scan.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Contributed to a project with potential real-world impact, showcasing effective teamwork and problem-solving skills.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Engaged in discussions with students from other branches, gaining valuable insights and innovative ideas for my college branch.",
        },
      ],
    },
  ],
};

const code_hero: cv.role = {
  title: "3rd Place",
  startDate: "2021",
  endDate: "2021",
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "First time at a programming competition and first contact with JavaScript.",
        },
      ],
    },
  ],
};

const achievements: cv.area = {
  name: "Achievements",
  entries: [
    {
      organization: "Shift Appens 10th edition",
      location: "Coimbra, Portugal",
      roles: [shift_appens],
    },
    {
      organization: "Code Hero 2nd Edition",
      location: "Aveiro, Portugal",
      roles: [code_hero],
    },
  ],
};

const skills: cv.skill[] = [
  { title: "C" },
  { title: "C++" },
  { title: "Dart" },
  { title: "Haskell" },
  { title: "Java" },
  { title: "Javascript" },
  { title: "PHP" },
  { title: "Prolog" },
  { title: "Python" },
  { title: "Julia" },
  { title: "Golang" },
  { title: "Bootstrap" },
  { title: "Figma" },
  { title: "Flutter" },
  { title: "Git" },
  { title: "Laravel" },
  { title: "MySQL" },
  { title: "NcvDataPM" },
  { title: "PostgreSQL" },
  { title: "React" },
  { title: "SQL" },
  { title: "SQLite" },
  { title: "Storybook" },
  { title: "Tailwind" },
  { title: "Typescript" },
  { title: "Docker" },
];

const languages: cv.skill[] = [
  { title: "Portuguese (Native)" },
  { title: "English (C2-Cambridge)" },
];

const education_feup_msc: cv.role = {
  title: "MSC IN INFORMATICS ENGINEERING AND COMPUTATION - 16.6 AVERAGE",
  startDate: "Oct 2024",
  endDate: "2026",
  description: [], // You can add a description if needed
};

const education_feup_bsc: cv.role = {
  title: "BSC IN INFORMATICS ENGINEERING AND COMPUTATION - 16.45 AVERAGE",
  startDate: "Oct 2021",
  endDate: "2024",
  description: [], // You can add a description if needed
};

const education: cv.area = {
  name: "Education",
  entries: [
    {
      organization: "Faculty of Engineering - University of Porto",
      location: "Porto, Portugal",
      roles: [education_feup_bsc, education_feup_msc],
    },
  ],
};

const cvData: cv.CV = {
  info: info,
  contacts: contacts,
  areas: [work, extracurricular, achievements, education],
  skills: [...skills, ...languages],
};

const roles: cv.role[] = [
  kevel_internship,
  ni_vice,
  ni_tts,
  ni_member,
  shift_appens,
  code_hero,
];
const experiences: cv.experience[] = [kevel, ni, enei];
const areas: cv.area[] = [work, extracurricular, achievements, education];

export { cvData, roles, experiences, areas };
