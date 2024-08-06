import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Error404 from "./utils/errors/error404/Error404";
import RouteError from "./utils/errors/route-error/RouteError";
import { createContext, useState } from "react";
import Projects from "./layout/projects/Projects";
import Skills from "./layout/skills/Skills";
import Contact from "./layout/contact/Contact";

type portfolioStateType = {power: string};

export const PortfolioState = createContext<portfolioStateType | any>(undefined);


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <RouteError/>,
    children: [
      {
        path: '/projects',
        element: <Projects/>,
        errorElement: <RouteError/>,
      },
      {
        path: '/skills',
        element: <Skills/>,
        errorElement: <RouteError/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
        errorElement: <RouteError/>,
      },
      {
        path: '*',
        element: <Error404/>,
        errorElement: <RouteError/>,
      },
    ],
  }
])

const App: React.FC = () => {

  const [appState, setAppState] = useState<portfolioStateType>({ power: 'off' });

  return (
    <>
      <PortfolioState.Provider value={[appState, setAppState]}>
        <RouterProvider router={router}/>
      </PortfolioState.Provider>
    </>
  );
};

export default App;