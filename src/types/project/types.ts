export interface IProjectCard {
    name: string;
    description: string;
    tags: string[];
    repoLink: string;
    type: 'Website' | 'CLI' | 'Misc' | string;
  }


  export interface Project {
    name: string;
    description: string;
    tags: string[];
    type: ProjectType;
    repoLink: string;
  }

export interface IDestinations{
  worked: string; 
  name: string;
  description: string; 
  distance: string; 
}

export enum ProjectType {
  WEB = 'Website',
  BOT = 'Bot',
  CLI = 'CLI',
  API = 'API',
  MISC = 'Misc',
}