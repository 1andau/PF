export interface IProjectCard {
    name: string;
    description: string;
    tags: string[];
    repoLink: string;
  }


  export interface Project {
    name: string;
    description: string;
    tags: string[];
    repoLink: string;
  }


  export interface ISkills {
    id?: number;
    title: string;
    icon: string;
    type: string;
    isMainSkill?: boolean;
  }
  