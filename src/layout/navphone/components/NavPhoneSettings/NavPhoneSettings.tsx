import { useContext } from 'react';
import { PortfolioState } from '../../../../App';
import {
  faLightbulb,
  faPlane,
  faBroadcastTower,
  faWifi,
 } from '@fortawesome/fontawesome-free-solid';
import './navPhoneSettings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const NavPhoneSettings = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState, setAppState ] = context;

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

   const switchButton = (fn: Function) => {

    return (
      <div
        className={`phone-settings__switch  ${appState.theme === 'light' && 'switched'}`}
        onClick={()=> fn()}
      >
        <div className={`phone-settings__switch-circle ${appState.theme === 'light' && 'right'}`}/>
      </div>
    );
   };

  return (
    <div className='phone-container phone-settings'>
      <div className='phone-top'>
        <div className='phone-top__icons'/>
        <div className='phone-top__middle-bar'/>
        <div className='phone-top__icons'/>
      </div>

      

      <div className='phone-settings__top'>
        <h2>
          Settings
        </h2>
        <button
          className='phone-settings__close'
          onClick={()=> setAppState({...appState, screen: 'main' })}
        >
          X
        </button>
      </div>

      {/* <div className='phone-settings__profile'>
        Profile
      </div> */}

      <div className='phone-settings__settings'>
        <div className='phone-settings__item'>
          <div className='phone-settings__item-icon'>
            <FontAwesomeIcon icon={faLightbulb as IconProp} />
          </div>
          Light Mode
          {switchButton(loadTheme)}
        </div>
      </div>

    </div>
  );
};

export default NavPhoneSettings;