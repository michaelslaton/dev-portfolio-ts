import { Outlet } from 'react-router-dom';
import Navphone from './navphone/Navphone';
import { PortfolioState } from '../App';
import './layout.css';
import { useContext } from 'react';

const Layout: React.FC = () => {
  const [ appState ] = useContext(PortfolioState);

  return (
    <>
      <Navphone/>
      <div className={`${appState.power === 'on' ? 'content' : `content-off`}`}>
        <Outlet/>
      </div>
      {appState.power === 'on' &&
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