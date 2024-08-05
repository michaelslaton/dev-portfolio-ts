import { faHome, faProjectDiagram } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import phoneButtonType from "../types/phoneButton.type";

const phoneButtonsData: { mainButtons: phoneButtonType[], bottomBar: phoneButtonType[] } = {
  mainButtons: [
    {
      id: 1,
      name: 'Projects',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faProjectDiagram,
      url: '/projects',
      linkType: 'local',
    },
    {
      id: 2,
      name: 'Skills',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faProjectDiagram,
      url: '/skills',
      linkType: 'local',
    },
    {
      id: 3,
      name: 'Contact',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faProjectDiagram,
      url: '/contact',
      linkType: 'local',
    },
  ],
  bottomBar: [
    {
      id: 1,
      name: 'Home',
      iconColor: '#8d00ff',
      fontColor: 'black',
      symbol: faHome,
      url: '/',
      linkType: 'local',
    },
    {
      id: 2,
      name: 'GitHub',
      iconColor: '#24292f',
      fontColor: 'white',
      symbol: faGithub,
      url: 'https://github.com/michaelslaton',
      linkType: 'external',
    },
    {
      id: 3,
      name: 'LinkedIn',
      iconColor: '#0275b4',
      fontColor: 'white',
      symbol: faLinkedin,
      url: '/',
      linkType: 'external',
    },
  ]
};

export default phoneButtonsData;