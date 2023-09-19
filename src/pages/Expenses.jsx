// -rrd
import { useLoaderData } from "react-router-dom"
// -helpers
import { deleteData, fetchData } from "../helpers/helpers"
// -components
import Table from "../components/Table"
// -library
import { toast } from "react-toastify"


// -loader
export const expensesLoader = () => {
    const expenses = fetchData('expenses')
    return expenses
}

// -actions
export const expensesAction = async ({ request }) => {

    const data = await request.formData()
    const { _action, ...values } = Object.fromEntries(data)

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

export default function Expenses() {
    const expenses = useLoaderData()

    return (
        <div className="grid-lg">
            <h2>All Expenses <small>({expenses.length} total)</small></h2>
            {
                expenses && expenses.length > 0 ? (
                    <Table expenses={expenses} />
                ) : (
                    <p>No Expenses</p>
                )
            }
        </div>
    )
}
