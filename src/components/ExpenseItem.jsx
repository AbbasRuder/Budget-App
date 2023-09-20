// -helpers
import { formatCurrency, formateDate, getMatchingItems } from '../helpers/helpers'
// -rrd
import { Link, useFetcher } from 'react-router-dom'
// -library
import { TrashIcon } from '@heroicons/react/24/solid'


// Table>ExpenseItem
export default function ExpenseItem({ expense, showBudget }) {
    const fetcher = useFetcher()

    const budget = getMatchingItems({
        category: 'budgets',
        key: 'id',
        budgetId: expense.budgetId
    })[0]
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formateDate(expense.createdAt)}</td>
            {showBudget && (
                <td>
                    <Link
                        to={`/budgets/${budget.id}`}
                        style={{
                            '--accent': budget.color
                        }}
                    >
                        {budget.name}
                    </Link>
                </td>
            )}
            <td>
                <fetcher.Form
                    method='post'
                >
                    <input type="hidden" name='_action' value='deleteExpense' />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button className='btn btn--warning'>
                        <TrashIcon width={20} />
                    </button>
                </fetcher.Form>
            </td>
        </>
    )
}
