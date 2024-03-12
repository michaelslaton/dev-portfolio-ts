import { Outlet } from 'react-router-dom';
import './layout.css';
import Navbar from './navbar/Navbar';

const Layout: React.FC = () => {

  return (
    <>
      <div className="content">
        <Navbar/>
        <Outlet/>
      </div>
      <div className="bg"/>
      <div className="bg bg2"/>
      <div className="bg bg3"/>
    </>
  );
};

export default Layout;