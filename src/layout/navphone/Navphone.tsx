import { faPowerOff,
  faBatteryThreeQuarters,
  faWifi,
  faSignal,
  faLightbulb
 } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { PortfolioState } from '../../App';
import PhoneButton from './components/PhoneButton';
import phoneButtonsData from '../../data/phoneButtonsData';
import './navphone.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Navphone: React.FC = () => {
  const [appState, setAppState] = useContext(PortfolioState);
  const [ phoneState, setPhoneState ] = useState<string>('main');

 const loadTheme = () => {
  const root = document.querySelector(':root');
  const theme = appState.theme;
  if(theme === 'dark') {
    root?.setAttribute('color-scheme', 'light');
    setAppState({ ...appState , theme: 'light' });
  } else {
    root?.setAttribute('color-scheme', 'dark');
    setAppState({ ...appState , theme: 'dark' });
  };
  return;
 }

//  Off State -------------------------------------->
  if (!appState.power) return (
    <div className='phone-container phone-off'>
      <div className='phone-top'>
        <div/>
        <div className='phone-top__middle-bar'/>
        <div/>
      </div>
      <div className='phone-buttons__container phone-off'>
        <button
          className='phone-buttons__power-button'
          onClick={()=> setAppState({...appState , power: true})}>
            <FontAwesomeIcon data-testid='phone power' icon={faPowerOff as IconProp}/>
        </button>
      </div>
    </div>
  );

// On State -------------------------------------->
  else if (phoneState === 'main') return (
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
          onClick={()=> setPhoneState('tools')}
        >
          <FontAwesomeIcon data-testid='phone signal' icon={faSignal as IconProp}/>
          <FontAwesomeIcon data-testid='phone wifi' icon={faWifi as IconProp}/>
          <FontAwesomeIcon data-testid='phone battery' className="phone-top__battery" icon={faBatteryThreeQuarters as IconProp}/>
        </div>
      </div>
      <div className='phone-buttons__container'>
        <div className="phone-buttons__grid">
          {phoneButtonsData.mainButtons.map((button)=>(
            <PhoneButton
              key={button.id}
              data={button}
              position='main'
              setPhoneState={setPhoneState}
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

// Tools State -------------------------------------->
  else if (phoneState === 'tools') return (
    <div className='phone-container phone-tools'>
      <div className='phone-top'>
        <div className='phone-top__icons'/>
        <div className='phone-top__middle-bar'/>
        <div className='phone-top__icons'/>
      </div>
      <div className='phone-buttons__container'>
        <button
          className={`theme-button ${appState.theme === 'dark' ? 'dark' : 'light'}`}
          onClick={()=> loadTheme()}
        >
          <FontAwesomeIcon data-testid='phone power' icon={faLightbulb as IconProp}/>
        </button>

      </div>
      <div
        className='phone-tools__bottom'
        onClick={()=> setPhoneState('main')}
      >
        <div className='phone-tools__bottom-bar'/>
      </div>
    </div>
  );
};

export default Navphone;