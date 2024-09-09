import { Outlet, useNavigate } from 'react-router-dom';
import Navphone from './navphone/Navphone';
import { PortfolioState } from '../App';
import './layout.css';
import { useContext, useEffect } from 'react';

const Layout: React.FC = () => {
  const [ appState ] = useContext(PortfolioState);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!appState.power) navigate('/');
  },[]);

  return (
    <>
      <div className='main-screen'>
        <div className='nav-container'>
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