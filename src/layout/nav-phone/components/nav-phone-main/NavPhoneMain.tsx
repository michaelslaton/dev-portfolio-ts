import {
  faBatteryThreeQuarters,
  faWifi,
  faSignal,
 } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import PhoneButton from '../PhoneButton';
import phoneButtonsData from '../../../../data/phoneButtonsData';
import { useContext } from 'react';
import { PortfolioState } from '../../../../App';
import '../../navphone.css';

const NavPhoneMain = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState, setAppState ] = context;

  return (
    <div className='phone-container phone-main'>
      <div className='phone-top'>
        <div className='phone-top__icons'>
          <div
            className='phone-top__time'
          >
            7:00pm    
          </div>
        </div>
        <div className='phone-top__middle-bar'/>
        <div
          className='phone-top__icons right'
          onClick={()=> setAppState({ ...appState , screen: 'tools' })}
        >
          <FontAwesomeIcon data-testid='phone signal' icon={faSignal as IconProp}/>
          <FontAwesomeIcon data-testid='phone wifi' icon={faWifi as IconProp}/>
          <FontAwesomeIcon data-testid='phone battery' className='phone-top__battery' icon={faBatteryThreeQuarters as IconProp}/>
        </div>
      </div>

      <div className='phone-buttons__container'>
        <div className='phone-buttons__grid'>
          {phoneButtonsData.mainButtons.map((button)=>(
            <PhoneButton
              key={button.id}
              data={button}
              position='main'
            />
          ))}
        </div>
        
        <div className='phone-buttons__bottom-bar'>
          {phoneButtonsData.bottomBar.map((button)=>(
            <PhoneButton
              key={button.id}
              data={button}
              position='bottom'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavPhoneMain;