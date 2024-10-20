import resApp from '../assets/imgs/projectImages/restaurantApp.jpg';
import weLoveMovies from '../assets/imgs/projectImages/weLoveMovies.jpg';
import notflix from '../assets/imgs/projectImages/notflixr.jpg';
// import devPortfolio from '../assets/imgs/projectImages/devPortfolio.jpg';
import ProjectType from '../types/project.type';

const projectData: ProjectType[] = [
  {
    id: 1,
    show: true,
    name: 'Reservations Application',
    img: resApp,
    type: '( Full-Stack )',
    description: 'A retro styled, full-stack web application that allows a restaurant to create, search, and edit reservations as well as manage seating inside the restaurant as their guests arrive.',
    tech: [9, 14, 8, 3, 4, 10, 21, 13,],
    screenShots: [],
    code: 'https://github.com/michaelslaton/ms-restaurant-reservations-front',
    codeb: 'https://github.com/michaelslaton/ms-restaurant-reservations-back',
  },
  {
    id: 2,
    show: true,
    name: 'We Love Movies',
    img: weLoveMovies,
    type: '( Back-End )',
    description: 'A back-end application intended to return data on movies, movie reviews, and theaters a movie is playing at.',
    tech: [9, 21, 4, 10, 13,],
    screenShots: [],
    code: 'https://github.com/michaelslaton/we-love-movies-capstone',
  },
  {
    id: 3,
    show: true,
    name: 'Notflix',
    img: notflix,
    type: '( Full-Stack )',
    description: 'A web app dedicated to delivering information on your favorite movies & media. Users can create accounts with secure login and authorization provided by firebase, customize profiles, save bookmarks as well as generate ratings and comments. My position on this team was Front-End Developer.',
    tech: [9,14, 20, 8, 3, 4, 21, 10, 13,],
    screenShots: [],
    code: 'https://github.com/GolamHossain9355/notflix-front',
    codeb: 'https://github.com/GolamHossain9355/notflix-back',
  },
];

export default projectData;