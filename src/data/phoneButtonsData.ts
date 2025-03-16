import { faHome, faProjectDiagram, faCog, faEnvelope, faGlobe, faBook, faChalkboard } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import phoneButtonType from '../types/phoneButton.type';

const phoneButtonsData: { mainButtons: phoneButtonType[], bottomBar: phoneButtonType[] } = {
  mainButtons: [
    {
      id: 1,
      name: 'Projects',
      iconColor: '#f5c84c',
      fontColor: 'black',
      symbol: faProjectDiagram,
      url: '/projects',
      linkType: 'local',
    },
    {
      id: 2,
      name: 'Skills',
      iconColor: '#61c1e9',
      fontColor: 'white',
      symbol: faBook,
      url: '/skills',
      linkType: 'local',
    },
    {
      id: 3,
      name: 'Experience',
      iconColor: '#4376f7',
      fontColor: 'white',
      symbol: faChalkboard,
      url: '/experience',
      linkType: 'local',
    },
    {
      id: 4,
      name: 'Contact',
      iconColor: '#d20001',
      fontColor: 'white',
      symbol: faEnvelope,
      url: '/contact',
      linkType: 'local',
    },
    {
      id: 5,
      name: 'Settings',
      iconColor: '#888888',
      fontColor: 'black',
      symbol: faCog,
      url: '',
      linkType: 'local',
    },
  ],
  bottomBar: [
    {
      id: 6,
      name: 'Home',
      iconColor: '#8d00ff',
      fontColor: 'white',
      symbol: faHome,
      url: '/',
      linkType: 'local',
    },
    {
      id: 7,
      name: 'GitHub',
      iconColor: '#24292f',
      fontColor: 'white',
      symbol: faGithub,
      url: 'https://github.com/michaelslaton',
      linkType: 'external',
    },
    {
      id: 8,
      name: 'LinkedIn',
      iconColor: '#0275b4',
      fontColor: 'white',
      symbol: faLinkedin,
      url: 'https://www.linkedin.com/in/michaelslatondev/',
      linkType: 'external',
    },
    {
      id: 9,
      name: 'Browser',
      iconColor: 'white',
      fontColor: '#07bbd3',
      symbol: faGlobe,
      url: 'https://www.google.com/',
      linkType: 'external',
    },
  ]
};

export default phoneButtonsData;