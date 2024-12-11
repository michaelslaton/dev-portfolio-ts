import { useContext } from 'react';
import { PortfolioState } from '../../App';
import NavPhoneTools from './components/NavPhoneTools';
import NavPhoneMain from './components/NavPhoneMain';
import NavPhoneOff from './components/NavPhoneOff';
import './navphone.css';

const Navphone: React.FC = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState ] = context;

//  Off State -------------------------------------->
  if (!appState.power) return (
    <NavPhoneOff/>
  );

// On State ---------------------------------------->
  else if (appState.screen === 'main') return (
    <>
      <NavPhoneMain/>
    </>
  );

// Tools State -------------------------------------->
  else if (appState.screen === 'tools') return (
    <>
      <NavPhoneTools/>
    </>
  );

// This should never happen :D ----------------------->
  else return <></>;
};

export default Navphone;