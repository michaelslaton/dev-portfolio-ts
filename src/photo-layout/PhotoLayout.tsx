import { Outlet } from "react-router-dom";
import './photolayout.css';
import Navbar from "./navbar/Navbar";

const PhotoLayout: React.FC = () => {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};

export default PhotoLayout;