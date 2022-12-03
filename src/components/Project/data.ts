  export interface Project {
    name: string;
    description: string;
    tags: string[];
    repoLink: string;
    image: string;
  }
  

export const projects: Project[] = [
  {
    name: 'Snake game ',
    description: '',
    tags: ['JavaScript',  'CSS', 'HTML'],
    repoLink: 'https://github.com/1andau/snake-game',
    image: "SnakeGame", 
  },
  {
    name: 'Portfolio',
    description: "",
    tags: ['TypeScript', 'Redux', 'React js', 'SCSS'],
    repoLink: 'https://github.com/1andau/PF',
    image: "PF", 
  },
  {
    name: 'Validate form',
    description: "",
    tags: ['React-hook-form', 'Reatc js', 'TypeScript', 'SASS'],
    repoLink: 'https://github.com/1andau/contact-form-typescript',
    image: "ValidateForm", 
  },
  {
    name: 'Сountry Guide ',
    description: "",
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    repoLink: 'https://github.com/1andau/World-guide-final',
    image: "Guide", 
  },
  {
    name: 'Sneakers Shop',
    description: "",
    tags: ['react js', 'Redux-toolkit', 'SCSS'],
    repoLink: 'https://github.com/1andau/Sneakers-Shop',
    image: "Sneakers", 
  },
  {
    name: 'Spotify-clone',
    description: "",
    tags: ['Bootstrap', 'Typescript', 'styled-components'],
    repoLink: 'https://github.com/1andau/spotify-clone',
    image: "Spotify", 
  },
];
