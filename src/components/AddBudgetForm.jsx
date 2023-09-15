import { CurrencyRupeeIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useReducer, useRef } from 'react'
import { Form, useFetcher } from 'react-router-dom'

export default function AddBudgetForm() {

    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting"
    
    const formRef = useRef()

    useEffect(() => {
        // - to clear out the form after submitting
        if(!isSubmitting) {
            formRef.current.reset()
        }
    }, [isSubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create Budget
            </h2>
            <fetcher.Form
                method='post'
                className='grid-sm'
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input
                        type="text"
                        name='newBudget'
                        id='newBudget'
                        placeholder='eg: Groceries'
                        required
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input
                        type="number"
                        step="0.1"
                        name='newBudgetAmount'
                        id='newBudgetAmount'
                        placeholder='eg: Rs200'
                        required
                        inputMode='decimal'
                    />
                </div>
                <button className='btn btn--dark'>
                    <span>Create Budget</span>
                    <CurrencyRupeeIcon width={20} />
                </button>
            </fetcher.Form>
        </div>
    )
}
