// ==========================================
// SpendWise Interactive Budget Dashboard
// ==========================================


// 1. Application data

let monthlyBudget = 1000;


// Array for storing multiple expense records

let expenses = [
    {
        name: "Food",
        amount: 120
    },
    {
        name: "Transport",
        amount: 80
    }
];


// ==========================================
// 2. Calculate total expenses
// ==========================================

function calculateTotalExpenses() {

    let total = 0;

    expenses.forEach(function(expense) {
        total += expense.amount;
    });

    return total;
}


// ==========================================
// 3. Calculate remaining balance
// ==========================================

function calculateRemainingBalance() {

    let totalExpenses = calculateTotalExpenses();

    return monthlyBudget - totalExpenses;
}


// ==========================================
// 4. Make budgeting decisions
// ==========================================

function getBudgetMessage(balance) {

    if (balance < 0) {

        return "⚠️ You have exceeded your budget.";

    } else if (balance === 0) {

        return "⚠️ You have used your entire budget.";

    } else if (balance <= monthlyBudget * 0.2) {

        return "⚠️ Your remaining balance is getting low.";

    } else {

        return "✅ You are within your budget.";

    }
}


// ==========================================
// 5. Update the dashboard
// ==========================================

function updateDashboard() {

    let totalExpenses = calculateTotalExpenses();

    let remainingBalance = calculateRemainingBalance();


    // Update budget

    document.getElementById("budget-display").textContent =
        "$" + monthlyBudget.toFixed(2);


    // Update expenses

    document.getElementById("expenses-display").textContent =
        "$" + totalExpenses.toFixed(2);


    // Update remaining balance

    document.getElementById("remaining-display").textContent =
        "$" + remainingBalance.toFixed(2);


    document.getElementById("remaining-balance").textContent =
        "$" + remainingBalance.toFixed(2);


    // Decision-making message

    document.getElementById("budget-message").textContent =
        getBudgetMessage(remainingBalance);


    // Display expense records

    displayExpenses();
}


// ==========================================
// 6. Display expense records
// ==========================================

function displayExpenses() {

    let expenseList = document.getElementById("expense-list");


    // Clear existing records

    expenseList.innerHTML = "";


    // Check whether the array is empty

    if (expenses.length === 0) {

        expenseList.innerHTML =
            "<p>No expenses added yet.</p>";

        return;
    }


    // Loop through the expenses array

    expenses.forEach(function(expense, index) {

        let expenseItem = document.createElement("div");

        expenseItem.classList.add("expense-item");


        expenseItem.innerHTML = `
            <span>
                ${index + 1}. ${expense.name}
            </span>

            <strong>
                $${expense.amount.toFixed(2)}
            </strong>
        `;


        expenseList.appendChild(expenseItem);
    });
}


// ==========================================
// 7. Handle user interaction
// ==========================================

document
    .getElementById("expense-form")
    .addEventListener("submit", function(event) {

        // Prevent page refresh

        event.preventDefault();


        // Get user input

        let expenseName =
            document.getElementById("expense-name").value.trim();

        let expenseAmount =
            Number(
                document.getElementById("expense-amount").value
            );


        // Validate the input

        if (expenseName === "" || expenseAmount <= 0) {

            alert("Please enter a valid expense name and amount.");

            return;
        }


        // Add new record to the array

        expenses.push({
            name: expenseName,
            amount: expenseAmount
        });


        // Update dashboard

        updateDashboard();


        // Clear form

        document.getElementById("expense-form").reset();

    });


// ==========================================
// 8. Load dashboard when page opens
// ==========================================

updateDashboard();