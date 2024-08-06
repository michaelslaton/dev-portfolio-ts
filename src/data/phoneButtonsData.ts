import { faHome, faProjectDiagram, faCog, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import phoneButtonType from "../types/phoneButton.type";

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
      symbol: faCog,
      url: '/skills',
      linkType: 'local',
    },
    {
      id: 3,
      name: 'Contact',
      iconColor: '#d20001',
      fontColor: 'white',
      symbol: faEnvelope,
      url: '/contact',
      linkType: 'local',
    },
  ],
  bottomBar: [
    {
      id: 4,
      name: 'Home',
      iconColor: '#8d00ff',
      fontColor: 'white',
      symbol: faHome,
      url: '/',
      linkType: 'local',
    },
    {
      id: 5,
      name: 'GitHub',
      iconColor: '#24292f',
      fontColor: 'white',
      symbol: faGithub,
      url: 'https://github.com/michaelslaton',
      linkType: 'external',
    },
    {
      id: 6,
      name: 'LinkedIn',
      iconColor: '#0275b4',
      fontColor: 'white',
      symbol: faLinkedin,
      url: 'https://www.linkedin.com/in/michaelslatondev/',
      linkType: 'external',
    },
    {
      id: 7,
      name: 'LinkedIn',
      iconColor: '#0275b4',
      fontColor: 'white',
      symbol: faLinkedin,
      url: 'https://www.linkedin.com/in/michaelslatondev/',
      linkType: 'external',
    },
  ]
};

export default phoneButtonsData;