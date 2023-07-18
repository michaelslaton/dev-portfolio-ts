import devPort from '../assets/imgs/projectImages/devPortfolio.jpg';
import resApp from '../assets/imgs/projectImages/restaurantApp.jpg';
import weLoveMovies from '../assets/imgs/projectImages/weLoveMovies.jpg';

import Project from '../types/Project'; // Type

const projectList: Project[] = [
  {
    id:1,
    show: true,
    name: 'Reservations Application',
    img: resApp,
    type: '(Full-Stack)',
    description: 'A retro styled, full-stack web application that allows a restaurant to create, search, and edit reservations as well as manage seating inside the restaurant as their guests arrive.',
    tech: ['Javascript','React.js','HTML','Css','Knex.js','Express.js'],
    demo: 'https://ms-restaurant-reservations-front.vercel.app/dashboard',
    codeF: 'https://github.com/michaelslaton/ms-restaurant-reservations-front',
    codeB: 'https://github.com/michaelslaton/ms-restaurant-reservations-back',
  },
  {
    id:2,
    show: true,
    name: 'We Love Movies',
    img: weLoveMovies,
    type: '(Back-End)',
    description: 'A back-end application intended to return data on movies, movie reviews, and theaters a movie is playing at.',
    tech: ['Javascript','Knex.js','Express.js'],
    codeF: 'https://github.com/michaelslaton/we-love-movies-capstone',
  },
  {
    id:3,
    show: true,
    name: 'Developer Portfolio',
    img: devPort,
    type: '(Front-End)',
    description: 'I learned a lot while building this portfolio, and I intend to continue learning as I update it throughout my career as a software developer. I have designed this portfolio to be easy to customize and add data to as I acquire new skills and create or contribute to new projects.',
    tech: ['Javascript','React.js', 'HTML', 'Css'],
    codeF: 'https://github.com/michaelslaton/dev-portfolio',
  },
];

export default projectList;