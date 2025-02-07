import { useContext, useEffect } from 'react';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import { PortfolioState } from '../App';
import Navphone from './navphone/Navphone';
import PhoneMenuButton from './components/phone-menu-button/PhoneMenuButton';
import './layout.css';

const Layout = () => {
  const context = useContext(PortfolioState);
  if (!context) throw new Error('PortfolioState must be used within a PortfolioState.Provider');
  const [ appState ] = context;
  const navigate: NavigateFunction = useNavigate();

  useEffect(()=>{
    if(!appState.power) navigate('/');
  },[]);

  return (
    <>
      <PhoneMenuButton/>
      <div className='main-screen'>
        <div className={`nav-container ${appState.showPhone || !appState.power ? 'show' : 'no-show'}`}>
          <Navphone/>
        </div>
        <div className={`${appState.power ? `content ${appState.showPhone ? 'content-menu' : ''}` : `content-off`}`}>
          <Outlet/>
        </div>
      </div>
      {appState.power &&
        <>
          <div data-testid='bg' className='bg'/>
          <div data-testid='bg2' className='bg bg2'/>
          <div data-testid='bg3' className='bg bg3'/>
        </>
      }
    </>
  );
};

export default Layout;