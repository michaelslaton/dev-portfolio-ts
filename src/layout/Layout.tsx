import { useLightTheme } from "../utils/contexts/themeContext";
import LightSwitch from "./components/LightSwitch/LightSwitch";
import Mockups from "./Mockups";
import "./layout.css";

const Layout: React.FC = () => {
  const light = useLightTheme();

  return (
    <div className={`main-screen ${ light ? "" : "dark"}`}>
      <LightSwitch/>
      <Mockups/>
    </div>
  );
}

export default Layout;