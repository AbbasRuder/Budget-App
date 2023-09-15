// - react-router-dom
import { useLoaderData } from "react-router-dom"

// -library
import { toast } from "react-toastify"

// - helpers
import { createBudget, fetchData } from "../helpers/helpers"

// - components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"


export const dashboardLoader = () => {
  const username = fetchData("username")
  const budget = fetchData("budgets")
  return { username, budget }
}

export const dashboardAction = async ({request}) => {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    createBudget({
      name: formData.newBudget,
      amount: formData.newBudgetAmount
    })
    return toast.success("Budget created")
  } catch (error) {
    throw new Error("There was some problem while creating your budget")
  }
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
