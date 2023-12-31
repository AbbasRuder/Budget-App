// - library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// - react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// - routes
import Main, { mainLoader } from './layouts/Main.jsx';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/dashboard.jsx';
import Error from './pages/Error.jsx';
import Expenses, { expensesAction, expensesLoader } from './pages/Expenses.jsx';
import Budget, { budgetsAction, budgetsLoader } from './pages/Budget.jsx';

// - only actions
import { logoutAction } from "./actions/logoutAction.js";
import { createUser } from './actions/createUser.js';
import { deleteBudget } from './actions/deleteBudget.js';



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
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <Expenses />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />
      },
      {
        path: "budgets/:id",
        element: <Budget />,
        loader: budgetsLoader,
        action: budgetsAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget
          }
        ]
      },
      {
        path: "logout",
        action: logoutAction
      },
      {
        path: "create-user",
        action: createUser
      }
    ]
  },
]);

function App() {

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
