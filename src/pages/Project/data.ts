export enum ProjectType {
  WEB = 'Website',
  BOT = 'Bot',
  CLI = 'CLI',
  API = 'API',
  MISC = 'Misc',
}

  export interface Project {
    name: string;
    description: string;
    tags: string[];
    type: ProjectType;
    repoLink: string;
    image: string;
  }
  

export const projects: Project[] = [
  {
    name: 'Google Translate Bot',
    description: 'Google Translate on Telegram Bot',
    type: ProjectType.BOT,
    tags: ['TypeScript', 'Node.js', 'Telegraf'],
    repoLink: 'https://github.com/tfkhdyt/translate-bot',
    image: "moviesApp", 

  },
  {
    name: 'Portfolio Website',
    description: "You're here",
    type: ProjectType.WEB,
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    repoLink: 'https://github.com/tfkhdyt/web-portfolio',
    image: "moviesApp", 

  },
  {
    name: 'Gatotkaca',
    description: 'Metaseach-engine, based on SearXNG',
    type: ProjectType.WEB,
    tags: ['Python', 'SearXNG', 'TypeScript'],
    repoLink: 'https://github.com/tfkhdyt/gatotkaca',
    image: "moviesApp", 
  },
  {
    name: 'Random Quote Generator',
    description: 'A web app that will generate a random quote for you',
    type: ProjectType.WEB,
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    repoLink: 'https://github.com/tfkhdyt/random-quote-generator',
    image: "moviesApp", 
  },
  {
    name: 'Full Stack Roadmap',
    description: 'Roadmap to become a Full Stack Developer',
    type: ProjectType.WEB,
    tags: ['TypeScript', 'Next.js', 'NestJS'],
    repoLink: 'https://github.com/tfkhdyt/full-stack-roadmap',
    image: "moviesApp", 
  },
  {
    name: 'LAM Final Project',
    description: 'Web app to solve some linear algebra and matrices problems',
    type: ProjectType.WEB,
    tags: ['JavaScript', 'Next.js', 'Tailwind CSS'],
    repoLink: 'https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks',
    image: "moviesApp", 
  },
  {
    name: 'KBBI Bot',
    description: 'Indonesian Dictionary in Telegram using web scraping method',
    type: ProjectType.BOT,
    tags: ['TypeScript', 'Cheerio', 'Telegraf'],
    repoLink: 'https://github.com/tfkhdyt/kbbi-bot',
    image: "moviesApp", 
  },
  {
    name: 'Movie Bot',
    description: 'Telegram Bot to search movies information',
    type: ProjectType.BOT,
    tags: ['Node.js', 'JavaScript', 'Telegraf'],
    repoLink: 'https://github.com/tfkhdyt/tfkhdyt-movie-bot',
    image: "moviesApp", 
  },
  {
    name: 'Bayarcoek',
    description: 'Automation script to encrypt all files inside a folder',
    type: ProjectType.CLI,
    tags: ['Node.js', 'JavaScript', 'Commander.js'],
    repoLink: 'https://github.com/tfkhdyt/bayarcoek',
    image: "moviesApp", 
  },
  {
    name: '21 Cineplex API',
    description: 'REST API that scrape the data from 21Cineplex website',
    type: ProjectType.API,
    tags: ['TypeScript', 'NestJS', 'Cheerio'],
    repoLink: 'https://github.com/tfkhdyt/21cineplex-api',
    image: "moviesApp", 
  },
  {
    name: 'Form to Telegram API',
    description:
      'REST API to send message from HTML form into Telegram Messages',
    type: ProjectType.API,
    tags: ['NestJS', 'TypeScript', 'Telegraf'],
    repoLink: 'https://github.com/tfkhdyt/message-form-to-telegram-api',
    image: "moviesApp", 
  },
  {
    name: 'Coursework',
    description: 'All of my college coursework',
    type: ProjectType.MISC,
    tags: ['Java', 'C++', 'Pascal'],
    repoLink: 'https://github.com/tfkhdyt/tugas-kuliah',
    image: "moviesApp", 
  },
  {
    name: 'Anime Naon Ieu?',
    description: 'Telegram Bot to find anime details from a screenshot',
    type: ProjectType.BOT,
    tags: ['Node.js', 'JavaScript', 'Telegraf'],
    repoLink: 'https://github.com/tfkhdyt/anime-naon-ieu',
    image: "moviesApp", 
  },
  {
    name: 'MovieDB',
    description: 'Web app to search movie information',
    type: ProjectType.WEB,
    tags: ['JavaScript', 'Bootstrap'],
    repoLink: 'https://github.com/tfkhdyt/imdb',
    image: "moviesApp", 
  },
  {
    name: '30 Hari Jago JavaScript',
    description: 'Web app to learn JavaScript in 30 days',
    type: ProjectType.WEB,
    tags: ['JavaScript', 'Bootstrap'],
    repoLink: 'https://github.com/tfkhdyt/30DaysJagoJavaScript',
    image: "moviesApp", 
  },
  {
    name: 'School Website',
    description: 'SMKN 7 Baleendah school website with dynamic data',
    type: ProjectType.WEB,
    tags: ['PHP', 'Bootstrap'],
    repoLink: 'https://github.com/tfkhdyt/web-sekolah',
    image: "moviesApp", 
  },
  {
    name: 'Old Portfolio Website',
    description: 'My old portfolio website',
    type: ProjectType.WEB,
    tags: ['JavaScript', 'Bootstrap'],
    repoLink: 'https://github.com/tfkhdyt/tfkhdyt-portfolio',
    image: "moviesApp", 
  }
];
