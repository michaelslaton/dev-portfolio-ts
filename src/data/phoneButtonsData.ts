import { faDiagramProject, faHome } from "@fortawesome/free-solid-svg-icons";
import phoneButtonType from "../types/phoneButton.type";

const phoneButtonsData: { mainButtons: phoneButtonType[], bottomBar: phoneButtonType[] } = {
  mainButtons: [
    {
      id: 1,
      name: 'Projects',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faDiagramProject,
      url: '/projects',
    },
    {
      id: 2,
      name: 'Skills',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faDiagramProject,
      url: '/skills',
    },
    {
      id: 3,
      name: 'Contact',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faDiagramProject,
      url: '/contact',
    },
  ],
  bottomBar: [
    {
      id: 1,
      name: 'Home',
      iconColor: '#FFFFFF',
      fontColor: 'black',
      symbol: faHome,
      url: '/',
    },
  ]
};

export default phoneButtonsData;