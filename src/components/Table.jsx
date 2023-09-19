// - components
import ExpenseItem from "./ExpenseItem"


export default function Table({ expenses }) {
    const sortedExpenses = expenses.sort((a, b) => b.createdAt - a.createdAt)
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            ['Name', 'Amount', 'Date', 'Budgets', ''].map((item, index) => (
                                <th key={index}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedExpenses.map((expenseItem) => (
                            <tr key={expenseItem.id}>
                                <ExpenseItem expense={expenseItem}/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
