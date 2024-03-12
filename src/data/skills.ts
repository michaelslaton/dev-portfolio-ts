import adobe from '../assets/imgs/skillsIcons/adobe.png';
import bootstrap from '../assets/imgs/skillsIcons/bootstrap.png';
import css from '../assets/imgs/skillsIcons/css.png';
import express from '../assets/imgs/skillsIcons/express.png';
import firebase from '../assets/imgs/skillsIcons/firebase.png';
import git from '../assets/imgs/skillsIcons/git.png';
import github from '../assets/imgs/skillsIcons/github.png';
import heroku from '../assets/imgs/skillsIcons/heroku.png';
import html from '../assets/imgs/skillsIcons/html.png';
import javascript from '../assets/imgs/skillsIcons/javascript.png';
import jest from '../assets/imgs/skillsIcons/jest.png';
import knex from '../assets/imgs/skillsIcons/knex.png';
import mochaChai from '../assets/imgs/skillsIcons/mochaChai.png';
import npm from '../assets/imgs/skillsIcons/npm.png';
import postgresql from '../assets/imgs/skillsIcons/postgresql.png';
import react from '../assets/imgs/skillsIcons/react.png';
import restful from '../assets/imgs/skillsIcons/restful.png';
import vercel from '../assets/imgs/skillsIcons/vercel.png';
import redux from '../assets/imgs/skillsIcons/redux.png';
import typescript from '../assets/imgs/skillsIcons/typescript.png';
import vitest from '../assets/imgs/skillsIcons/vitest.png';
import SkillType from '../types/skill.type';

const skills: SkillType[] = [
  { 
    id: 1,
    name: 'Adobe Creative Suite',
    img: adobe,
    learned: true,
    category: 'other',
  },
  { 
    id: 2,
    name: 'Bootstrap.js',
    img: bootstrap,
    learned: true,
    category: 'front-end',
  },
  { 
    id: 3,
    name: 'Css',
    img: css,
    learned: true,
    category: 'front-end',
    abbr: 'Cascading Style Sheets',
  },
  { 
    id: 4,
    name: 'Express.js',
    img: express,
    learned: true,
    category: 'back-end',
  },
  { 
    id: 5,
    name: 'Git',
    img: git,
    learned: true,
    category: 'version-control',
  },
  { 
    id: 6,
    name: 'GitHub',
    img: github,
    learned: true,
    category: 'version-control',
  },
  { 
    id: 7,
    name: 'Heroku',
    img: heroku,
    learned: true,
    category: 'other',
  },
  { 
    id: 8,
    name: 'Html',
    img: html,
    learned: true,
    category: 'front-end',
    abbr: 'HyperText Markup Language'
  },
  { 
    id: 9,
    name: 'JavaScript',
    img: javascript,
    learned: true,
    category: 'front-end, back-end, language',
  },
  { 
    id: 10,
    name: 'Knex.js',
    img: knex,
    learned: true,
    category: 'back-end',
  },
  { 
    id: 11,
    name: 'Mocha & Chai',
    img: mochaChai,
    learned: true,
    category: 'testing',
  },
  { 
    id: 12,
    name: 'NPM',
    img: npm,
    learned: true,
    category: 'other',
    abbr: 'Node Package Manager',
  },
  { 
    id: 13,
    name: 'PostgreSQL',
    img: postgresql,
    learned: true,
    category: 'back-end',
  },
  { 
    id: 14,
    name: 'React.js',
    img: react,
    learned: true,
    category: 'front-end',
  },
  { 
    id: 15,
    name: 'RESTful API',
    img: restful,
    learned: true,
    category: 'back-end',
    abbr: 'Representational State Transfer'
  },
  { 
    id: 16,
    name: 'Vercel',
    img: vercel,
    learned: true,
    category: 'other',
  },
  { 
    id: 17,
    name: 'Redux',
    img: redux,
    learned: true,
    category: 'front-end',
  },
  { 
    id: 19,
    name: 'TypeScript',
    img: typescript,
    learned: true,
    category: 'front-end, back-end, language',
  },
  { 
    id: 20,
    name: 'Firebase',
    img: firebase,
    learned: true,
    category: 'other',
  },
  { 
    id: 21,
    name: 'Node.js',
    img: express,
    learned: true,
    category: 'back-end',
  },
  { 
    id: 22,
    name: 'Jest',
    img: jest,
    learned: true,
    category: 'testing',
  },
  { 
    id: 23,
    name: 'Vitest',
    img: vitest,
    learned: false,
    category: 'testing',
  },
];

export default skills ;