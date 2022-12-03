export interface IAboutInfo{
    worked: string; 
    name: string;
    description: string; 
  }

  export const aboutInfo: IAboutInfo[]= [
    {
      worked: 'Software engeneer',
      name: 'Sarah Landau',
      description:
        'Hello! My name is Sarah Landau. I am a frontend dev from St. Petersburg. I love open-source, beautiful solutions, clean code, and all sorts of geeky stuff. In my free time, I learn new technology,  ride a board, run a Telegram channel, create small projects, work with 3d printing.',
      },
  ];

  export enum ExperienceType{
    WEXP = 'Work experience',
    ED = 'Education', 
  }
  export interface EducationAndExperience{
    name: string; 
    company: string; 
    startDate: string; 
    endDate: string; 
    type: ExperienceType;
    responsibilities: string[]; 
    stack: string[]; 
  }

  export const experienceData: EducationAndExperience[] = [
  {
    name: 'frontent / fullstack developer',
    company: 'UpWORK',
    startDate: 'January 21',
    endDate: 'until now',
    type: ExperienceType.WEXP, 
    responsibilities: [
      'Ensuring user experience determines design choices.', 
      'Developing features to enhance the user experience.',
      'Building reusable code for future use.', 
    ],
    stack: ['JavaScript', 'React', 'Redux', 'TypeScript', 'Webpack', 'Sass', 'Next JS' ], 
  }, 
  {
    name: 'Frontend developer',
    company: 'T-Mobile',
    startDate: 'December 2021',
    endDate: 'March 2022',
    type: ExperienceType.WEXP, 
    responsibilities: [
      'Development of authorization/validation forms', 
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.'
    ],
    stack: ['JavaScript', 'React', 'Redux', 'TypeScript', 'Webpack', 'Sass', ], 
  },

  {
    name: 'Aerospace Instrumentation Engineer',
    company: 'St. Petersburg State University of Aerospace Instrumentation',
    startDate: 'June 2014',
    endDate: 'June 2018',
    type: ExperienceType.ED, 
    responsibilities: [
      'The Department of Gyroscopic Systems and Stabilizing Devices of air and space vehicles was established in September 1945 within the Faculty of Aviation Devices and Automation of Leningrad Aviation Institute (at present – Saint Petersburg State University of Aerospace Instrumentation).', 
      'The merger of the Department of Space Navigation Systems, Navigation and Stabilization and the Department of Space Systems Operation in September 2013resulted in the establishment of the Department of Operation and Management of Space Systems.'
    ],
    stack: [''], 
  },  
   {
    name: 'Java Development',
    company: 'LevelUP',
    startDate: 'June 2018',
    endDate: 'December 2018',
    type: ExperienceType.ED, 
    responsibilities: ['basic Java learning'],
    stack: ['Java' ], 
  }, 
  {
    name: 'Frontend development',
    company: 'Hexlet',
    startDate: 'June 2019',
    endDate: 'March 2020',
    type: ExperienceType.ED, 
    responsibilities: ['Global course in JavaScript, learning React js frameworks, react native, React js functional and class components, learning git'],
    stack: ['React', 'JavaScript', 'React js', 'React Native', 'Git', 'GitFlow' ], 
  }, 

  ]


