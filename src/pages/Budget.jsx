// -helpers
import { createExpense, deleteData, getMatchingItems } from '../helpers/helpers'
// -rrd
import { useLoaderData } from 'react-router-dom'
// -library
import { toast } from 'react-toastify'
// -components
import BudgetItem from '../components/BudgetItem'
import AddExpenseForm from '../components/AddExpenseForm'
import Table from '../components/Table'



// -loader
export const budgetsLoader = async ({ params }) => {
  const budget = await getMatchingItems({
    category: 'budgets',
    key: 'id',
    budgetId: params.id
  })[0]

  const expenses = await getMatchingItems({
    category: 'expenses',
    key: 'budgetId',
    budgetId: params.id
  })

  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist")
  }

  return { budget, expenses }
}


// -actions
export const budgetsAction = async ({ request }) => {

  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

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
      throw new Error("There was some problem while deleting your Expenses")
    }
  }
}


export default function Budget() {

  const { budget, expenses } = useLoaderData()

  return (
    <div className="grid-lg"
      style={{
        '--accent': budget.color
      }}
    >
      <h1 className="h2">
        <span className="accent">{budget.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budgets={budget} showDelete={true}/>
        <AddExpenseForm budgets={[budget]} />
      </div>
      {
        expenses && expenses.length > 0 && (
          <div className="grid-md">
            <h2><span className='accent'>{budget.name}</span> Expenses</h2>
            <Table expenses={expenses} showBudget={false} />
          </div>
        )
      }
    </div>
  )
}
