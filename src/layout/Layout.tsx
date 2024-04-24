import { Outlet } from 'react-router-dom';
import Navphone from './navphone/Navphone';
import './layout.css';

const Layout: React.FC = () => {

  return (
    <>
      <Navphone/>
      <div className="content">
        <Outlet/>
      </div>
      <div data-testid='bg' className="bg"/>
      <div data-testid='bg2' className="bg bg2"/>
      <div data-testid='bg3' className="bg bg3"/>
    </>
  );
};

export default Layout;