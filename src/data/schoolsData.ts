import sfccimg from '../assets/imgs/schools/sfcc.png';
import thinkfulimg from '../assets/imgs/schools/thinkful.png';
import SchoolType from '../types/school.type';

const schoolsData: SchoolType[] = [
  {
    id: 1,
    name: 'Santa Fe Community College',
    subTitle: 'Creative Photography',
    dates: '2011 - 2014',
    link: 'https://www.sfcc.edu/',
    img: sfccimg,
    type: 'school',
    course: 'Creative Photography'
  },
  {
    id: 2,
    name: 'Thinkful',
    subTitle: 'Software Engineering',
    dates: '2021 - 2022',
    link: 'https://www.thinkful.com/',
    img: thinkfulimg,
    type: 'school',
    course: 'Software Engineering'
  },
];

export default schoolsData;