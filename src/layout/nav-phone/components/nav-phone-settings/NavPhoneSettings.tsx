import { useContext } from 'react';
import { PortfolioState } from '../../../../App';
import SettingsList from './settings-list/SettingsList';
import mike from '../../../../assets/imgs/mike.jpg';
import './navPhoneSettings.css';

const NavPhoneSettings = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState, setAppState ] = context;

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

      <div className='settings-profile'>
        <img
          src={mike}
          alt='Mike'
          className='settings-profile__img'
        />
        <h2 className='settings-profile__name'>
          Michael Slaton
        </h2>
      </div>

      <SettingsList/>
    </div>
  );
};

export default NavPhoneSettings;