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

  export interface IEducationAndExperience{
    id?: number;
    JobTitle: string; 
    experience: string; 
    startDate: string; 
    endDate: string; 
    type: string;
    responsibilities: string[]; 
    stack: string[]; 
    
  }
  
  export const experience:IEducationAndExperience[] = [
  {
    JobTitle: 'frontent / fullstack developer',
    experience: 'UpWork',
    startDate: 'January 21',
    endDate: 'until now',
    type: 'upwork', 
    responsibilities: [
      'Ensuring user experience determines design choices.', 
      'Developing features to enhance the user experience.',
      'Building reusable code for future use.', 
    ],
    stack: ['JavaScript', 'React', 'Redux', 'TypeScript', 'Webpack', 'Sass', 'Next JS' ], 
  }, 
  {
    JobTitle: 'Frontend developer',
    experience: 'Deutsche Telekom IT Solutions',
    startDate: 'December 2021',
    endDate: 'March 2022',
    type: '', 
    responsibilities: [
      'Development of authorization/validation forms', 
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.'
    ],
    stack: ['JavaScript', 'React', 'Redux', 'TypeScript', 'Webpack', 'Sass', ], 
  }
  ]


