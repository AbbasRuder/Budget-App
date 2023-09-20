// - components
import ExpenseItem from "./ExpenseItem"


export default function Table({ expenses, showBudget = true }) {
    const sortedExpenses = expenses.sort((a, b) => b.createdAt - a.createdAt)

    const tableHeaders = [
        'Name', 
        'Amount', 
        'Date', 
        showBudget ? 'Budgets' : '', 
        ''
    ]
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            tableHeaders.map((item, index) => (
                                <th key={index}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedExpenses.map((expenseItem) => (
                            <tr key={expenseItem.id}>
                                <ExpenseItem expense={expenseItem} showBudget={showBudget}/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
