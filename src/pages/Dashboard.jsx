// - react-router-dom
import { Link, useLoaderData } from "react-router-dom"
// -library
import { toast } from "react-toastify"
// - helpers
import { createBudget, createExpense, deleteData, fetchData } from "../helpers/helpers"
// - components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm"
import BudgetItem from "../components/BudgetItem"
import Table from "../components/Table"



// ---loader
export const dashboardLoader = () => {
  const username = fetchData("username")
  const budgets = fetchData("budgets")
  const expenses = fetchData("expenses")
  return { username, budgets, expenses }
}

// ---actions
export const dashboardAction = async ({ request }) => {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === 'createBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount
      })
      return toast.success("Budget created")
    } catch (error) {
      throw new Error("There was some problem while creating your budget")
    }
  }

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget
      })
      return toast.success("Expense created")
    } catch (error) {
      throw new Error("There was some problem while creating your Expenses")
    }
  }

  if (_action === 'deleteExpense') {
    try {
      deleteData({
        key: 'expenses',
        id: values.expenseId
      })
      return toast.success("Expense deleted")
    } catch (error) {
      throw new Error("There was some problem while creating your Expenses")
    }
  }

}


export default function Dashboard() {
  // - receive data from the loader function ('dashboardLoader')
  const { username, budgets, expenses } = useLoaderData()
  return (
    <>
      {username ? (
        <div className="dashboard">
          <h1>Welcome back <span className="accent">{username}</span></h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ?
              (
                <div className="grid-lg">
                  <div className="flex-lg">
                    <AddBudgetForm />
                    <AddExpenseForm budgets={budgets} />
                  </div>
                  <h2>Existing Budgets</h2>
                  <div className="budgets">
                    {budgets.map((mapItem) => (
                      <BudgetItem key={mapItem.id} budgets={mapItem} />
                    ))}
                  </div>
                  {
                    expenses && expenses.length > 0 && (
                      <div className="grid-md">
                        <h2>Recent Expense</h2>
                        <Table
                          expenses={expenses
                            .sort((a, b) => b.createdAt - a.createdAt)
                            // - only showing the top eight expenses
                            .slice(0, 8)}
                        />
                        {
                          expenses.length > 8 && (
                            <Link
                              to="/expenses"
                              className="btn btn--dark"
                            >
                              View all expenses
                            </Link>
                          )
                        }

                      </div>
                    )
                  }
                </div>
              ) : (
                <div className="grid-lg">
                  <p>Personal budgeting is the secret of financial freedom. Start your journey today.</p>
                  <p>Create a budget.</p>
                  <AddBudgetForm />
                </div>
              )}
          </div>
        </div>
      ) : <Intro />}
    </>
  )
}
