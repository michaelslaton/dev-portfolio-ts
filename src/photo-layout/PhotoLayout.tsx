import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import './photolayout.css';

const PhotoLayout = () => {

  return (
    <div
      className='photo__main-screen'
    >
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default PhotoLayout;