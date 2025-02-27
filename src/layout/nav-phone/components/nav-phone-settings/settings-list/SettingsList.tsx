import {
  faLightbulb,
  faWifi,
  faPlane,
  faBroadcastTower,
} from '@fortawesome/fontawesome-free-solid';
import { useContext } from 'react';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { PortfolioState } from '../../../../../App';
import '../navPhoneSettings.css';

const SettingsList = () => {
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

  return (
    <div className='phone-settings__settings'>
      <div className='phone-settings__item'>
        <div className='phone-settings__item-icon blue-background'>
          <FontAwesomeIcon icon={faLightbulb as IconProp} />
        </div>
        Light Mode
        <div
          className={`phone-settings__switch  ${appState.theme === 'light' && 'switched'}`}
          onClick={()=> loadTheme()}
        >
          <div className={`phone-settings__switch-circle ${appState.theme === 'light' && 'right'}`}/>
        </div>
      </div>

      <div className='phone-settings__item'>
        <div className='phone-settings__item-icon blue-background'>
          <FontAwesomeIcon icon={faWifi as IconProp} />
        </div>
        Wifi
        <div
          className={`phone-settings__switch  ${appState.wifi === true && 'switched'}`}
          onClick={()=> {
            setAppState({...appState, airplaneMode: false, wifi: !appState.wifi})
          }}
        >
          <div className={`phone-settings__switch-circle ${appState.wifi === true && 'right'}`}/>
        </div>
      </div>

      <div className='phone-settings__item'>
        <div className='phone-settings__item-icon green-background'>
          <FontAwesomeIcon icon={faBroadcastTower as IconProp} />
        </div>
        Data
        <div
          className={`phone-settings__switch  ${appState.data === true && 'switched'}`}
          onClick={()=> {
            setAppState({...appState, airplaneMode: false, data: !appState.data})
          }}
        >
          <div className={`phone-settings__switch-circle ${appState.data === true && 'right'}`}/>
        </div>
      </div>

      <div className='phone-settings__item'>
        <div className='phone-settings__item-icon blue-background'>
          <FontAwesomeIcon icon={faBluetoothB as IconProp} />
        </div>
        Bluetooth
        <div
          className={`phone-settings__switch  ${appState.blueTooth === true && 'switched'}`}
          onClick={()=> {
            setAppState({...appState, airplaneMode: false, blueTooth: !appState.blueTooth})
          }}
        >
          <div className={`phone-settings__switch-circle ${appState.blueTooth === true && 'right'}`}/>
        </div>
      </div>
      
      <div className='phone-settings__item last'>
        <div className='phone-settings__item-icon orange-background'>
          <FontAwesomeIcon icon={faPlane as IconProp} />
        </div>
        Airplane Mode
        <div
          className={`phone-settings__switch  ${appState.airplaneMode === true && 'switched'}`}
          onClick={()=> {
            if(!appState.airplaneMode) setAppState({ ...appState, data: false, wifi: false, blueTooth: false, airplaneMode: true });
            else setAppState({ ...appState, airplaneMode: false });
          }}
        >
          <div className={`phone-settings__switch-circle ${appState.airplaneMode === true && 'right'}`}/>
        </div>
      </div>

    </div>
  );
};

export default SettingsList;