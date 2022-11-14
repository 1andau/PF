
export interface IAboutInfo{
  worked: string; 
  education: string; 
  name: string;
  description: string; 
}

interface IVariants {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
  };
  startFade: {
    opacity: number;
  };
  endFade: {
    opacity: number;
  };
}
  export interface ISkillBox {
    title: string;
    icon: string;
    isMainSkill?: boolean;

  }
  
  export interface ISkills {
    id?: number;
    title: string;
    icon: string;
    type: string;
    isMainSkill?: boolean;
  }
  