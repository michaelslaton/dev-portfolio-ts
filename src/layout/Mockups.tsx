import Divider from "./components/divider/Divider";
import { useLightTheme, useLightThemeToggle } from "../utils/contexts/themeContext";

const Mockups:React.FC = () => {
  const setLight = useLightThemeToggle();
  const light = useLightTheme();


  return (
    <>
      <div className="skill">JavaScript</div>
      <button onClick={setLight}>Toggle Theme</button>
      { light ? "It's on" : "It's not on"}
      <Divider />
    </>
  )
}

export default Mockups;