import { useLightTheme } from "../../../utils/contexts/themeContext";
import "./divider.css";

const Divider: React.FC = () => {
  const light = useLightTheme();

  return (
    <>
      <div className={`divider ${ light ? "" : "dark" }`}/>
    </>
  )
}

export default Divider;