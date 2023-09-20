
// -rrd
import { Form, Link } from 'react-router-dom'
// -helpers
import { formatCurrency, formatPercentage, getTotalSpentFromBudget } from '../helpers/helpers'
// -library
import { BanknotesIcon, TrashIcon } from '@heroicons/react/24/outline'



export default function BudgetItem({ budgets, showDelete = false }) {
    const { name, amount, id, color } = budgets

    const spent = getTotalSpentFromBudget(id)
    return (
        <div className="budget" style={{ '--accent': color }}>
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(spent)} spent</small>
                <small>{formatCurrency(amount - spent)} remaining</small>
            </div>
            {
                showDelete ? (
                    <div className="flex-sm">
                        <Form
                            method='post'
                            action='delete'
                            onSubmit={(event) => {
                                if(!confirm('Are you sure you want to delete the budget?')) {
                                    event.preventDefault()
                                }
                            }}
                        >
                            <button type='submit' className="btn">
                                <span>Delete Budget</span>
                                <TrashIcon width={20}/>
                            </button>
                        </Form>
                    </div>
                ) : (
                    <div className="flex-sm">
                        <Link
                            className='btn'
                            to={`budgets/${id}`}
                        >
                            <span>View Details</span>
                            <BanknotesIcon width={20} />
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
