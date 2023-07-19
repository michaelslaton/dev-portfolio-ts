import LightThemeProvider from "./utils/contexts/themeContext";
import Layout from "./layout/Layout";


const App: React.FC = () => {


  return (
    <>
      <LightThemeProvider>
        <Layout/>
      </LightThemeProvider>
    </>
  );
};

export default App;