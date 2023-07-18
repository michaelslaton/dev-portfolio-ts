import adobe from '../assets/imgs/skillsIcons/adobe.png';
import bootstrap from '../assets/imgs/skillsIcons/bootstrap.png';
import css from '../assets/imgs/skillsIcons/css.png';
import express from '../assets/imgs/skillsIcons/express.png';
import git from '../assets/imgs/skillsIcons/git.png';
import github from '../assets/imgs/skillsIcons/github.png';
import heroku from '../assets/imgs/skillsIcons/heroku.png';
import html from '../assets/imgs/skillsIcons/html.png';
import javascript from '../assets/imgs/skillsIcons/javascript.png';
import knex from '../assets/imgs/skillsIcons/knex.png';
import mochaChai from '../assets/imgs/skillsIcons/mochaChai.png';
import npm from '../assets/imgs/skillsIcons/npm.png';
import postgresql from '../assets/imgs/skillsIcons/postgresql.png';
import react from '../assets/imgs/skillsIcons/react.png';
import restful from '../assets/imgs/skillsIcons/restful.png';
import vercel from '../assets/imgs/skillsIcons/vercel.png';
import redux from '../assets/imgs/skillsIcons/redux.png';
import typescript from '../assets/imgs/skillsIcons/typescript.png';

import Skill from '../types/Skill'; // Type

const skills: Skill[] = [
  { 
    id: 1,
    name: 'Adobe Creative Suite',
    img: adobe,
    type: "",
  },
  { 
    id: 2,
    name: 'Bootstrap.js',
    img: bootstrap,
    type: "",
  },
  { 
    id: 3,
    name: 'Css',
    img: css,
    type: "",
    abbr: 'Cascading Style Sheets',
  },
  { 
    id: 4,
    name: 'Express.js',
    img: express,
    type: "",
  },
  { 
    id: 5,
    name: 'Git',
    img: git,
    type: "",
  },
  { 
    id: 6,
    name: 'GitHub',
    img: github,
    type: "",
  },
  { 
    id: 7,
    name: 'Heroku',
    img: heroku,
    type: "",
  },
  { 
    id: 8,
    name: 'Html',
    img: html,
    type: "",
    abbr: 'HyperText Markup Language'
  },
  { 
    id: 9,
    name: 'JavaScript',
    img: javascript,
    type: "",
  },
  { 
    id: 10,
    name: 'Knex.js',
    img: knex,
    type: "",
  },
  { 
    id: 11,
    name: 'Mocha & Chai',
    img: mochaChai,
    type: "",
  },
  { 
    id: 12,
    name: 'NPM',
    img: npm,
    type: "",
    abbr: 'Node Package Manager',
  },
  { 
    id: 13,
    name: 'PostgreSQL',
    img: postgresql,
    type: "",
  },
  { 
    id: 14,
    name: 'React.js',
    img: react,
    type: "",
  },
  { 
    id: 15,
    name: 'RESTful API',
    img: restful,
    type: "",
    abbr: 'Representational State Transfer'
  },
  { 
    id: 16,
    name: 'Vercel',
    img: vercel,
    type: "",
  },
  { 
    id: 17,
    name: 'Redux',
    img: redux,
    type: "",
  },
  { 
    id: 19,
    name: 'TypeScript',
    img: typescript,
    type: "",
  },
];

export default skills ;