
// -helpers
import { formatCurrency, formatPercentage, getTotalSpentFromBudget } from '../helpers/helpers'

export default function BudgetItem({ budgets }) {
    const {name, amount, id, color} = budgets

    const spent = getTotalSpentFromBudget(id)
    return (
        <div className="budget" style={{'--accent': color }}>
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
        </div>
    )
}
