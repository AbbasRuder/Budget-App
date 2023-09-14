// - react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// - routes
import Main, { mainLoader } from './layouts/Main.jsx';
import Dashboard, { dashboardLoader } from './pages/dashboard.jsx';
import Error from './pages/Error.jsx';

// - actions
import { logoutAction } from "./actions/logoutAction.js";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
