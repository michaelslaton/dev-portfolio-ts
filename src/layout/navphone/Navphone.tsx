import { faPowerOff,
  faBatteryThreeQuarters,
  faWifi,
  faSignal,
  faLightbulb,
  faClock,
  faCalculator,
  faCamera,
 } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { PortfolioState } from '../../App';
import PhoneButton from './components/PhoneButton';
import phoneButtonsData from '../../data/phoneButtonsData';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './navphone.css';

const Navphone: React.FC = () => {
  const [ appState, setAppState ] = useContext(PortfolioState);

 const loadTheme = (): void => {
  const root: Element | null = document.querySelector(':root');
  const theme: String = appState.theme;
  if(theme === 'dark') {
    root?.setAttribute('color-scheme', 'light');
    setAppState({ ...appState , theme: 'light' });
  } else {
    root?.setAttribute('color-scheme', 'dark');
    setAppState({ ...appState , theme: 'dark' });
  };
  return;
 };

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
          className='power-button'
          onClick={()=> setAppState({ ...appState , power: true})}>
            <FontAwesomeIcon data-testid='phone power' icon={faPowerOff as IconProp}/>
        </button>
      </div>
    </div>
  );

// On State -------------------------------------->
  else if (appState.screen === 'main') return (
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

// Tools State -------------------------------------->
  else if (appState.screen === 'tools') return (
    <div className='phone-container phone-tools'>
      <div className='phone-top'>
        <div className='phone-top__icons'/>
        <div className='phone-top__middle-bar'/>
        <div className='phone-top__icons'/>
      </div>
      <div className='phone-buttons__container'>
        
        <div className='phone-tools__grids-wrapper'>
          <div className='phone-tools__grid-4-4'>

              <button
                className={`phone-tools__grid-item theme-button ${appState.theme === 'dark' ? '' : 'light'}`}
                onClick={()=> loadTheme()}
              >
                <FontAwesomeIcon
                  icon={faLightbulb as IconProp}
                />
              </button>
              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon
                  icon={faClock as IconProp}
                />
              </button>
              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon
                  icon={faCalculator as IconProp}
                />
              </button>
              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon
                  icon={faCamera as IconProp}
                />
              </button>
              <button
                className={`phone-tools__grid-item ${appState.lowPower ? 'low-power' : ''}`}
                onClick={()=> setAppState({...appState, lowPower: !appState.lowPower })}
              >
                <FontAwesomeIcon
                  icon={faBatteryThreeQuarters as IconProp}
                />
              </button>

          </div>
        </div>

      </div>
      <div
        className='phone-tools__bottom'
        onClick={()=> setAppState({ ...appState, screen: 'main' })}
      >
        <div className='phone-tools__bottom-bar'/>
      </div>
    </div>
  );
};

export default Navphone;