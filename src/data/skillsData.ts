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
import reactTestingLibrary from '../assets/imgs/skillsIcons/reactTestingLibrary.png';
import SkillType from '../types/skill.type';

const skillsData: SkillType[] = [
  { 
    id: 1,
    name: 'Adobe CS',
    iconimg: adobe,
    iconColor: '#d74737',
    category: 'Other',
    url: 'https://www.adobe.com/',
    homePage: false,
  },
  { 
    id: 2,
    name: 'Bootstrap.js',
    iconimg: bootstrap,
    iconColor: '#673ab7',
    category: 'Front-End',
    url: 'https://getbootstrap.com/',
    homePage: false,
  },
  { 
    id: 3,
    name: 'Css',
    iconimg: css,
    iconColor: 'white',
    category: 'Front-End',
    url: 'https://www.w3.org/Style/CSS/',
    abbr: 'Cascading Style Sheets',
    homePage: true,
  },
  { 
    id: 4,
    name: 'Express.js',
    iconimg: express,
    iconColor: '#90c53f',
    category: 'Back-End',
    url: 'https://expressjs.com/',
    homePage: true,
  },
  { 
    id: 5,
    name: 'Git',
    iconimg: git,
    iconColor: '#24292f',
    category: 'Version-Control',
    url: 'https://git-scm.com/',
    homePage: false,
  },
  { 
    id: 6,
    name: 'GitHub',
    iconimg: github,
    iconColor: '#24292f',
    category: 'Version-Control',
    url: 'https://www.github.com/',
    homePage: false,
  },
  { 
    id: 7,
    name: 'Heroku',
    iconimg: heroku,
    iconColor: 'white',
    category: 'Other',
    url: 'https://www.heroku.com/',
    homePage: false,
  },
  { 
    id: 8,
    name: 'Html',
    iconimg: html,
    iconColor: 'white',
    category: 'Front-End',
    url: 'https://www.w3.org/html/',
    abbr: 'HyperText Markup Language',
    homePage: true,
  },
  { 
    id: 9,
    name: 'JavaScript',
    iconimg: javascript,
    iconColor: '#ffd600',
    category: 'Front-End, Back-End, Language',
    url: 'https://www.javascript.com/',
    homePage: true,
  },
  { 
    id: 10,
    name: 'Knex.js',
    iconimg: knex,
    iconColor: 'white',
    category: 'Back-End',
    url: 'https://knexjs.org/',
    homePage: false,
  },
  { 
    id: 11,
    name: 'Mocha & Chai',
    iconimg: mochaChai,
    iconColor: 'white',
    category: 'Testing',
    url: 'https://mochajs.org/',
    homePage: false,
  },
  { 
    id: 12,
    name: 'NPM',
    iconimg: npm,
    iconColor: '#380000',
    category: 'Other',
    url: 'https://www.npmjs.com/',
    abbr: 'Node Package Manager',
    homePage: false,
  },
  { 
    id: 13,
    name: 'PostgreSQL',
    iconimg: postgresql,
    iconColor: 'white',
    category: 'Back-End',
    url: 'https://www.postgresql.org/',
    homePage: false,
  },
  { 
    id: 14,
    name: 'React.js',
    iconimg: react,
    iconColor: 'white',
    category: 'Front-End',
    url: 'https://react.dev/',
    homePage: true,
  },
  { 
    id: 15,
    name: 'RESTful API',
    iconimg: restful,
    iconColor: 'white',
    category: 'Back-End',
    url: 'https://restfulapi.net/',
    abbr: 'Representational State Transfer',
    homePage: false,
  },
  { 
    id: 16,
    name: 'Vercel',
    iconimg: vercel,
    iconColor: 'black',
    category: 'Other',
    url: 'https://vercel.com/',
    homePage: false,
  },
  { 
    id: 17,
    name: 'Redux',
    iconimg: redux,
    iconColor: 'white',
    category: 'Front-End',
    url: 'https://redux.js.org/',
    homePage: false,
  },
  { 
    id: 19,
    name: 'TypeScript',
    iconimg: typescript,
    iconColor: '#3178c6',
    category: 'Front-End, Back-End, Language',
    url: 'https://www.typescriptlang.org/',
    homePage: true,
  },
  { 
    id: 20,
    name: 'Firebase',
    iconimg: firebase,
    iconColor: '#039be5',
    category: 'Other',
    url: 'https://firebase.google.com/',
    homePage: false,
  },
  { 
    id: 21,
    name: 'Node.js',
    iconimg: express,
    iconColor: 'white',
    category: 'Back-End',
    url: 'https://nodejs.org/',
    homePage: true,
  },
  { 
    id: 22,
    name: 'Jest',
    iconimg: jest,
    iconColor: 'black',
    category: 'Testing',
    url: 'https://jestjs.io/',
    homePage: false,
  },
  { 
    id: 23,
    name: 'Vitest',
    iconimg: vitest,
    iconColor: '#4a5326',
    category: 'Testing',
    url: 'https://vitest.dev/',
    homePage: false,
  },
  { 
    id: 24,
    name: 'React Testing Library',
    iconimg: reactTestingLibrary,
    iconColor: '#302c42',
    category: 'Testing',
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
    homePage: false,
  },
];

export default skillsData ;