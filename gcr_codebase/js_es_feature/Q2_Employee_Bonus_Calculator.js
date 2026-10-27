"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        if (!employee || employee.name == null || employee.salary == null || employee.years == null) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);
        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Salary or years is not a valid number");
        }

        const bonus = salary * (years > 3 ? 0.10 : 0.05);
        console.log(`${employee.name}: Salary = ₹${salary.toFixed(2)}, Experience = ${years} years, Bonus = ₹${bonus.toFixed(2)}`);
    } catch (error) {
        console.log(`Employee record error: ${error.message}`);
    }
}
