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
    iconimg: adobe,
    iconColor: '#d74737',
    learned: true,
    category: 'other',
  },
  { 
    id: 2,
    name: 'Bootstrap.js',
    iconimg: bootstrap,
    iconColor: '#673ab7',
    learned: true,
    category: 'front-end',
  },
  { 
    id: 3,
    name: 'Css',
    iconimg: css,
    iconColor: 'white',
    learned: true,
    category: 'front-end',
    abbr: 'Cascading Style Sheets',
  },
  { 
    id: 4,
    name: 'Express.js',
    iconimg: express,
    iconColor: '#90c53f',
    learned: true,
    category: 'back-end',
  },
  { 
    id: 5,
    name: 'Git',
    iconimg: git,
    iconColor: '#24292f',
    learned: true,
    category: 'version-control',
  },
  { 
    id: 6,
    name: 'GitHub',
    iconimg: github,
    iconColor: '#24292f',
    learned: true,
    category: 'version-control',
  },
  { 
    id: 7,
    name: 'Heroku',
    iconimg: heroku,
    iconColor: 'white',
    learned: true,
    category: 'other',
  },
  { 
    id: 8,
    name: 'Html',
    iconimg: html,
    iconColor: 'white',
    learned: true,
    category: 'front-end',
    abbr: 'HyperText Markup Language'
  },
  { 
    id: 9,
    name: 'JavaScript',
    iconimg: javascript,
    iconColor: '#ffd600',
    learned: true,
    category: 'front-end, back-end, language',
  },
  { 
    id: 10,
    name: 'Knex.js',
    iconimg: knex,
    iconColor: 'white',
    learned: true,
    category: 'back-end',
  },
  { 
    id: 11,
    name: 'Mocha & Chai',
    iconimg: mochaChai,
    iconColor: 'white',
    learned: true,
    category: 'testing',
  },
  { 
    id: 12,
    name: 'NPM',
    iconimg: npm,
    iconColor: '#380000',
    learned: true,
    category: 'other',
    abbr: 'Node Package Manager',
  },
  { 
    id: 13,
    name: 'PostgreSQL',
    iconimg: postgresql,
    iconColor: 'white',
    learned: true,
    category: 'back-end',
  },
  { 
    id: 14,
    name: 'React.js',
    iconimg: react,
    iconColor: 'white',
    learned: true,
    category: 'front-end',
  },
  { 
    id: 15,
    name: 'RESTful API',
    iconimg: restful,
    iconColor: 'white',
    learned: true,
    category: 'back-end',
    abbr: 'Representational State Transfer'
  },
  { 
    id: 16,
    name: 'Vercel',
    iconimg: vercel,
    iconColor: 'black',
    learned: true,
    category: 'other',
  },
  { 
    id: 17,
    name: 'Redux',
    iconimg: redux,
    iconColor: 'white',
    learned: true,
    category: 'front-end',
  },
  { 
    id: 19,
    name: 'TypeScript',
    iconimg: typescript,
    iconColor: '#3178c6',
    learned: true,
    category: 'front-end, back-end, language',
  },
  { 
    id: 20,
    name: 'Firebase',
    iconimg: firebase,
    iconColor: '#039be5',
    learned: true,
    category: 'other',
  },
  { 
    id: 21,
    name: 'Node.js',
    iconimg: express,
    iconColor: 'white',
    learned: true,
    category: 'back-end',
  },
  { 
    id: 22,
    name: 'Jest',
    iconimg: jest,
    iconColor: 'black',
    learned: true,
    category: 'testing',
  },
  { 
    id: 23,
    name: 'Vitest',
    iconimg: vitest,
    iconColor: 'white',
    learned: false,
    category: 'testing',
  },
];

export default skills ;