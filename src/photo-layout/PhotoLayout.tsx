import { Outlet } from "react-router-dom";
import './photolayout.css';
import Navbar from "./navbar/Navbar";

const PhotoLayout: React.FC = () => {

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