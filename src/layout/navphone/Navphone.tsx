import { useContext } from 'react';
import { PortfolioState } from '../../App';
import NavPhoneTools from './components/NavPhoneTools/NavPhoneTools';
import NavPhoneMain from './components/NavPhoneMain';
import NavPhoneOff from './components/NavPhoneOff';
import './navphone.css';

const Navphone = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState ] = context;

  if (!appState.power) return (<NavPhoneOff/>);
  if (appState.screen === 'main') return (<NavPhoneMain/>);
  if (appState.screen === 'tools') return (<NavPhoneTools/>);
  return null;
};

export default Navphone;