import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    errorElement: <></>,
    children: [
      {
        path: '*',
        element: <></>,
        errorElement: <></>,
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