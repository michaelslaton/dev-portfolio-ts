import remazon from '../assets/imgs/projectImages/remazon.jpg';
import ExperienceType from '../types/experienceType';

const experienceData: ExperienceType[] = [
  {
    id: 1,
    name: 'Remazon Prime',
    subTitle: 'Software Engineer',
    startDate: new Date('09-01-2023'),
    endDate: new Date('09-01-2024'),
    employmentType: 'Contract',
    img: remazon,
    description: 'A web application for managing a Discord community, allowing users to create and display events on a calendar, track points for friendly competition, and enabling community leaders to communicate directly via messages of the day and notifications.',
    bulletPoints: [
      "Collaborated closely with stakeholders to gather requirements, iterate on design concepts, and deliver a tailored solution that met the client's needs and expectations.",
      "Utilized Redux and React.js to create a seamless and intuitive user interface, resulting in a 20% reduction in user friction and task completion time.",
      "Enhanced user engagement and experience through interactive features such as event creation and points for competition, resulting in noticeable increases in user interaction and community participation.",
    ],
    tech: [19, 9, 14, 20, 17, 8, 3, 21, 4, 10, 13,],
    screenShots: [],
    code: 'https://github.com/michaelslaton/remazon',
  },
];

export default experienceData;