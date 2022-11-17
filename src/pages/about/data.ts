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
    UW = 'UpWork',
    TM = 'T-Mobile', 
  }
  export interface IEducationAndExperience{
    id?: number;
    name: string; 
    company: string; 
    startDate: string; 
    endDate: string; 
    type: ExperienceType;
    responsibilities: string[]; 
    stack: string[]; 
  }


  
  
  export const experienceData: IEducationAndExperience[] = [
  {
    name: 'frontent / fullstack developer',
    company: 'UpWORK',
    startDate: 'January 21',
    endDate: 'until now',
    type: ExperienceType.UW, 
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
    type: ExperienceType.TM, 
    responsibilities: [
      'Development of authorization/validation forms', 
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.'
    ],
    stack: ['JavaScript', 'React', 'Redux', 'TypeScript', 'Webpack', 'Sass', ], 
  }
  ]


