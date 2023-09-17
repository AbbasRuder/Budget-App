
// - to fetch data from local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// - to delete data from local storage
export const deleteData = ({ key }) => {
    return localStorage.removeItem(key)
}

export const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0
    return `${existingBudgetLength * 34} 65% 50%`
}


// - to create new budget
export const createBudget = ({  name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        amount: Number(amount),
        createdAt: Date.now(),
        color: generateRandomColor()
    }

    const existingBudget = fetchData("budgets") ?? []
    return localStorage.setItem("budgets", JSON.stringify([...existingBudget, newItem]))
}

// - to create new expenses
export const createExpense = ({  name, amount, budgetId }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        amount: Number(amount),
        createdAt: Date.now(),
        budgetId: budgetId
    }

    const existingExpense = fetchData("expenses") ?? []
    return localStorage.setItem("expenses", JSON.stringify([...existingExpense, newItem]))
}



// - Calculating total amount spent from the budget
export const getTotalSpentFromBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? []
    const totalSpent = expenses.reduce((acc, expenseItem) => {
        // - checking if the expense matches the budget
        if(expenseItem.budgetId === budgetId){
            // - calculating total expenses
            return acc + expenseItem.amount
        }
        return acc
    }, 0)
    return totalSpent
}


// ------ Formatting -------

// - format currency
export const formatCurrency = (amount) => {
    return amount.toLocaleString(undefined, {
        style: "currency",
        currency: "INR"
    })
}

// - format percentage
export const formatPercentage = (amount) => {
    return amount.toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0
    })
}