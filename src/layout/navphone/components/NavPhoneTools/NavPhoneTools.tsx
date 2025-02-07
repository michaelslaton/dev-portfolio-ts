import { useContext } from 'react';
import {
  faBatteryThreeQuarters,
  faLightbulb,
  faClock,
  faCalculator,
  faCamera,
 } from '@fortawesome/fontawesome-free-solid';
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
          <div className='phone-tools__grid-4-4'>

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