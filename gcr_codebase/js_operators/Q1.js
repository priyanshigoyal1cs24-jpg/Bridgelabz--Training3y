// Q1. Scope Conflict Resolver
let bonus = 5000; // Global variable

function calculateSalary() {
    let salary = 40000; // Local variable
    let isPermanent = true;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary:", salary);

    // Changing isPermanent does not change the global bonus
    isPermanent = false;
    console.log("Global Bonus:", bonus);
}

calculateSalary();
