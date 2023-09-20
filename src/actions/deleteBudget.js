// -library
import { toast } from "react-toastify"
// -helpers
import { deleteData, getMatchingItems } from "../helpers/helpers"
// -rrd
import { redirect } from "react-router-dom"



export function deleteBudget({params}) {

  try {
    // -delete the budget
  deleteData({
    key: 'budgets',
    id: params.id
  })

  // -First get all the expenses that matches this budget
  const expenses = getMatchingItems({
    category: 'expenses',
    key: 'budgetId',
    budgetId: params.id
  })

  // -then delete all the matched expenses
  expenses && expenses.map(item => {
    deleteData({
      key: 'expenses',
      id: item.id
    })
  })
  
  toast.success('Budget deleted')

  } catch (error) {
    throw new Error("There was some problem in deleting your budget")
  }

  return redirect('/')
}
