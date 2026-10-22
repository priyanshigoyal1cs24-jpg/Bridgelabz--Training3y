// Q3. Monthly Expense Tracker
// Expenses for five categories.
const expenses = {
    food: 4000,
    travel: 1500,
    rent: 8000,
    bills: 1200,
    leisure: 1000
};

// Calculate total and average expenses.
let totalExpenses = 0;
for (let category in expenses) {
    totalExpenses += expenses[category];
}

let averageExpense = totalExpenses / Object.keys(expenses).length;

// Add 10% tax using an assignment operator.
let tax = totalExpenses * 0.10;
let finalAmount = totalExpenses;
finalAmount += tax;

console.log("Total Expenses: ₹" + totalExpenses.toFixed(2));
console.log("Average Expense: ₹" + averageExpense.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount After Tax: ₹" + finalAmount.toFixed(2));
