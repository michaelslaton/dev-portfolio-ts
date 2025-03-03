import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from './layout/Layout';
import Error404 from './utils/errors/error404/Error404';
import RouteError from './utils/errors/route-error/RouteError';
import { createContext, useState } from 'react';
import SkillsDisplay from './layout/skills/SkillsDisplay';
import Contact from './layout/contact/Contact';
import HomePage from './layout/home-page/HomePage';
import PhotoLayout from './photo-layout/PhotoLayout';
import projectData from './data/projectData';
import ListDisplay from './layout/list-display/ListDisplay';
import experienceData from './data/experienceData';
// import schoolData from './data/schoolsData';

export type ThemeType = 'light' | 'dark';
export type ScreenType = 'main' | 'tools' | 'settings';
export type portfolioStateType = {
  power: boolean;
  theme: ThemeType;
  screen: ScreenType;
  showPhone: boolean;
  lowPower: boolean;
  blueTooth: boolean;
  wifi: boolean;
  airplaneMode: boolean;
  data: boolean;
};

export const PortfolioState = createContext<
  [portfolioStateType, React.Dispatch<React.SetStateAction<portfolioStateType>>] | undefined
>(undefined);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { 
        path: '/',
        element: <HomePage />,
        errorElement: <RouteError />
      },
      { 
        path: '/projects',
        element: <ListDisplay title='Projects' listData={projectData}/>,
        errorElement: <RouteError />
      },
      { 
        path: '/experience',
        element: <ListDisplay title='Experience' listData={experienceData}/>,
        errorElement: <RouteError />
      },
      // { 
      //   path: '/school',
      //   element: <ListDisplay title='School' listData={schoolData}/>,
      //   errorElement: <RouteError />
      // },
      { 
        path: '/skills',
        element: <SkillsDisplay />,
        errorElement: <RouteError />
      },
      { 
        path: '/contact',
        element: <Contact />,
        errorElement: <RouteError />
      },
      { 
        path: '*',
        element: <Error404 />,
        errorElement: <RouteError />
      },
    ],
  },
  {
    path: '/photography',
    element: <PhotoLayout />,
    errorElement: <RouteError />,
    children: [],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  const [appState, setAppState] = useState<portfolioStateType>({ 
    power: false,
    theme: 'dark',
    screen: 'main',
    lowPower: false,
    showPhone: false,
    blueTooth: true,
    wifi: true,
    airplaneMode: false,
    data: true,
  });

  return (
    <>
      <PortfolioState.Provider value={[appState, setAppState]}>
        <RouterProvider router={router}/>
      </PortfolioState.Provider>
    </>
  );
};

export default App;