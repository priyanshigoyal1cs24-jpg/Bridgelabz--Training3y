// Q8. Employee Salary Projection
// Current salary and annual increment rate.
let currentSalary = 40000;
let annualIncrementRate = 8;
let projectedSalary = currentSalary;

// Calculate salary for the next five years.
console.log("Current Salary: ₹" + currentSalary.toFixed(2));
for (let year = 1; year <= 5; year++) {
    projectedSalary += projectedSalary * annualIncrementRate / 100;
    console.log(`Year ${year} Salary: ₹${projectedSalary.toFixed(2)}`);
}
