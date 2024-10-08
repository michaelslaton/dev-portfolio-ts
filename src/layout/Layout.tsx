import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import Navphone from './navphone/Navphone';
import { PortfolioState } from '../App';
import { useContext, useEffect } from 'react';
import './layout.css';
import PhoneMenuButton from './components/phone-menu-button/PhoneMenuButton';

const Layout: React.FC = () => {
  const [ appState ] = useContext(PortfolioState);
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
        <div className={`${appState.power ? 'content' : `content-off`}`}>
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