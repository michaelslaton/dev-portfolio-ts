import { useLightThemeToggle, useLightTheme } from "../../../utils/contexts/themeContext"
import "./lightSwitch.css";

const LightSwitch: React.FC = () => {
  const light = useLightTheme();
  const themeToggle = useLightThemeToggle();

  return <button
          className={`light-switch ${ light ? "" : "dark"}`}
          onClick={()=>themeToggle()}
          >
            { light ? "On" : "Off"}
          </button>
}

export default LightSwitch;