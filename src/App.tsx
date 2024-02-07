import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Error404 from "./utils/errors/error404/Error404";
import RouteError from "./utils/errors/route-error/RouteError";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <RouteError/>,
    children: [
      {
        path: '*',
        element: <Error404/>,
        errorElement: <RouteError/>,
      },
    ],
  }
])

const App: React.FC = () => {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;