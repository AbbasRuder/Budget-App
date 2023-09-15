import { useRef, useEffect } from 'react'
// -rrd
import { useFetcher } from 'react-router-dom'
// -library
import { PlusCircleIcon } from '@heroicons/react/24/solid'

export default function AddExpenseForm({ budgets }) {
    const formRef = useRef()
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
        }
    }, [isSubmitting])
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                {budgets && budgets.length === 1 ? (
                    <>
                        Add new <span className='accent'>{budgets[0].name}</span> Expenses
                    </>
                ) : (
                    "Add new Expenses"
                )}
            </h2>
            {/* --A form with out action will be submitted to the same page. Here it will get submitted to <Dashboard> where 'dashboardAction' will handle the rest. */}
            <fetcher.Form
                method='post'
                className='grid-sm'
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newExpense">Expense name</label>
                    <input
                        type="text"
                        name='newExpense'
                        id='newExpense'
                        placeholder='eg: Coffee'
                        required
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input
                        type="number"
                        step="0.1"
                        name='newExpenseAmount'
                        id='newExpenseAmount'
                        placeholder='eg: Rs50'
                        required
                        inputMode='decimal'
                    />
                </div>
                <div className="grid-xs" hidden={budgets.length === 1}>
                    <label htmlFor="newExpenseBudget">Select Category</label>
                    <select name="newExpenseBudget" id="newExpenseBudget">
                        {budgets && budgets
                            .sort((a, b) => a.createdAt - b.createdAt)
                            .map(mapItem => {
                                return (
                                    <option key={mapItem.id} value={mapItem.id}>
                                        {mapItem.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                {/* this is to uniquely handle form submission in our <Dashboard> */}
                <input type='hidden' name='_action' value='createExpense' />
                <button className='btn btn--dark'>
                    <span>Create Expense</span>
                    <PlusCircleIcon width={20} />
                </button>
            </fetcher.Form>
        </div>
    )
}
