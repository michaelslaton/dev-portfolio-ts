import remazon from '../assets/imgs/projectImages/remazon.jpg';
import ExperienceType from '../types/experienceType';

const experienceData: ExperienceType[] = [
  {
    id: 1,
    name: 'Remazon Prime',
    role: 'Software Engineer',
    startDate: new Date('09-01-2023'),
    img: remazon,
    description: 'A web application for managing a Discord community, allowing users to create and display events on a calendar, track points for friendly competition, and enabling community leaders to communicate directly via messages of the day and notifications.',
    tech: [19, 9, 14, 20, 17, 8, 3, 21, 4, 10, 13,],
    screenShots: [],
    code: 'https://github.com/michaelslaton/remazon',
  },
];

export default experienceData;