import { useContext } from 'react';
import {
  faBatteryThreeQuarters,
  faLightbulb,
  faClock,
  faCalculator,
  faCamera,
  faLock,
  // faLockOpen,
  faClone,
  faMoon,
  faSun,
  faVolumeDown,
  faPlane,
  faBroadcastTower,
  faWifi,
 } from '@fortawesome/fontawesome-free-solid';
 import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
 import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PortfolioState } from '../../../../App';
import './navPhoneTools.css';

const NavPhoneTools = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [appState, setAppState] = context;

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

  return (
    <div className='phone-container phone-tools'>
      <div className='phone-top'>
        <div className='phone-top__icons'/>
        <div className='phone-top__middle-bar'/>
        <div className='phone-top__icons'/>
      </div>

      <div className='phone-buttons__container'>
        <div className='phone-tools__grids-wrapper'>
          <div className='phone-tools__grid-2-1'>
              <div className='phone-tools__big-box'>
                <button
                  className={`phone-tools__big-box--item ${appState.airplaneMode && 'orange-background'}`}
                  onClick={()=> {
                    if(!appState.airplaneMode) setAppState({ ...appState, data: false, wifi: false, blueTooth: false, airplaneMode: true });
                    else setAppState({ ...appState, airplaneMode: false });
                  }}
                >
                  <FontAwesomeIcon icon={faPlane as IconProp} />
                </button>
                <button
                  className={`phone-tools__big-box--item ${appState.data && 'green-background'}`}
                  onClick={()=> {
                    setAppState({...appState, airplaneMode: false, data: !appState.data})
                  }}
                >
                  <FontAwesomeIcon icon={faBroadcastTower as IconProp} />
                </button>
                <button
                  className={`phone-tools__big-box--item ${appState.wifi && 'blue-background'}`}
                  onClick={()=> {
                    setAppState({...appState, airplaneMode: false, wifi: !appState.wifi})
                  }}
                >
                  <FontAwesomeIcon icon={faWifi as IconProp} />
                </button>
                <button
                  className={`phone-tools__big-box--item ${appState.blueTooth && 'blue-background'}`}
                  onClick={()=> {
                    setAppState({...appState, airplaneMode: false, blueTooth: !appState.blueTooth})
                  }}
                >
                  <FontAwesomeIcon icon={faBluetoothB as IconProp} />
                </button>
              </div>
              <div className='phone-tools__big-box'>
              </div>
          </div>

          <div className='phone-tools__grid-2-2'>
            <div className='phone-tools__grid-2-2--inner-2-2'>
              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon icon={faLock as IconProp} />
              </button>
              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon icon={faClone as IconProp} />
              </button>
              <button className='phone-tools__grid-item span2'>
                <FontAwesomeIcon icon={faMoon as IconProp} />
                <span>Focus</span>
              </button>
            </div>
            <div className='phone-tools__grid-2-2--inner-2-2'>
              <div className='phone-tools__grid-slider'>
                <FontAwesomeIcon icon={faSun as IconProp} />  
              </div>
              <div className='phone-tools__grid-slider'>
                <FontAwesomeIcon icon={faVolumeDown as IconProp} />
              </div>
            </div>
          </div>

          <div className='phone-tools__grid-4-2'>

              <button
                className={`phone-tools__grid-item theme-button ${appState.theme === 'dark' ? '' : 'light'}`}
                onClick={()=> loadTheme()}
              >
                <FontAwesomeIcon icon={faLightbulb as IconProp} />
              </button>

              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon icon={faClock as IconProp} />
              </button>

              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon icon={faCalculator as IconProp} />
              </button>

              <button className='phone-tools__grid-item'>
                <FontAwesomeIcon icon={faCamera as IconProp} />
              </button>

              <button
                className={`phone-tools__grid-item ${appState.lowPower ? 'low-power' : ''}`}
                onClick={()=> setAppState({...appState, lowPower: !appState.lowPower })}
              >
                <FontAwesomeIcon icon={faBatteryThreeQuarters as IconProp} />
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

export default NavPhoneTools;