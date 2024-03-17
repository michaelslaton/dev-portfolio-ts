import { Outlet } from 'react-router-dom';
import Navphone from './navphone/Navphone';
import './layout.css';

const Layout: React.FC = () => {

  return (
    <>
      <div className="content">
        <Navphone/>
        <Outlet/>
      </div>
      <div className="bg"/>
      <div className="bg bg2"/>
      <div className="bg bg3"/>
    </>
  );
};

export default Layout;