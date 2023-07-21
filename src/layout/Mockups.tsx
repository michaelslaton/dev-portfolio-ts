import Divider from "./components/divider/Divider";
import { useLightTheme } from "../utils/contexts/themeContext";

const Mockups:React.FC = () => {
  const light = useLightTheme();

  return (
    <>
      <div className={`skill ${light ? "" : "dark" }`}>JavaScript</div>
      <Divider />
    </>
  )
}

export default Mockups;