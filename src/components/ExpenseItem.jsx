import React from 'react'
import { formatCurrency, formateDate } from '../helpers/helpers'

export default function ExpenseItem({ expense }) {
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formateDate(expense.createdAt)}</td>
        </>
    )
}
