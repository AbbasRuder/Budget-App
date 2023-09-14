// - react-router-dom
import { useLoaderData } from "react-router-dom"

// - helpers
import { fetchData } from "../helpers/localStorage"

// - components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"


export const dashboardLoader = () => {
  const username = fetchData("username")
  const budget = fetchData("budget")
  return { username, budget }
}


export default function Dashboard() {
  // - receive data from the loader
  const { username, budget } = useLoaderData()

  return (
    <>
      {username ? (
        <div className="dashboard">
          <h1>Welcome back <span className="accent">{username}</span></h1>
          <div className="grid-sm">
            {/* {budget ? () : ()} */}
            <div className="grid-lg">
              <div className="flex lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : <Intro />}
    </>
  )
}
