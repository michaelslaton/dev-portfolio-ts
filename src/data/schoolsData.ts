import sfccimg from '../assets/imgs/schools/sfcc.png';
import thinkfulimg from '../assets/imgs/schools/thinkful.png';
import SchoolType from '../types/school.type';

const schoolsData: SchoolType[] = [
  {
    id:1,
    name: 'Thinkful',
    course: 'Software Engineering',
    dates: '2021 - 2022',
    link: 'https://www.thinkful.com/',
    img: thinkfulimg,
  },
  {
    id:2,
    name: 'Santa Fe Community College',
    course: 'Creative Photography',
    dates: '2011 - 2014',
    link: 'https://www.sfcc.edu/',
    img: sfccimg,
  },
];

export default schoolsData;