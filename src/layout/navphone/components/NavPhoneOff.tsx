import { faPowerOff } from '@fortawesome/fontawesome-free-solid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useContext } from 'react';
import { PortfolioState } from '../../../App';
import '../navphone.css';

const NavPhoneOff = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [appState, setAppState] = context;


  return (
    <div className='phone-container phone-off'>
      <div className='phone-top'>
        <div/>
        <div className='phone-top__middle-bar'/>
        <div/>
      </div>
      <div className='phone-buttons__container phone-off'>
        <button
          className='power-button'
          onClick={()=> setAppState({ ...appState , power: true})}>
            <FontAwesomeIcon data-testid='phone power' icon={faPowerOff as IconProp}/>
        </button>
      </div>
    </div>
  );
};

export default NavPhoneOff;