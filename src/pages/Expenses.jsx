// -rrd
import { useLoaderData } from "react-router-dom"
// -helpers
import { fetchData } from "../helpers/helpers"
// -components
import Table from "../components/Table"


export const expensesLoader = () => {
    const expenses = fetchData('expenses')
    return expenses
}

export default function Expenses() {
    const expenses = useLoaderData()

    return (
        <div className="grid-lg">
            <h2>All Expenses <small>({expenses.length} total)</small></h2>
            {
                expenses && expenses.length > 0 ? (
                    <Table expenses={expenses}/>
                ) : (
                    <p>No Expenses</p>
                )
            }
        </div>
    )
}
