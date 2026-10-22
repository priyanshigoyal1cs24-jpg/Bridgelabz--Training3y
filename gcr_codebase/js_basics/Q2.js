// Q2. Multi-Type Data Summary
// Create values of different JavaScript data types.
let userName = "Priyanshi";
let age = 19;
let isActive = true;
let subjects = ["JavaScript", "HTML", "CSS"];
let user = { city: "Mathura", role: "student" };
let emptyValue = null;
let notAssigned;

const dataSummary = [
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isActive", Value: isActive, Type: typeof isActive },
    { Label: "subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "user", Value: JSON.stringify(user), Type: typeof user },
    { Label: "emptyValue", Value: String(emptyValue), Type: "null" },
    { Label: "notAssigned", Value: String(notAssigned), Type: typeof notAssigned }
];

// Print all values and types in one table.
console.table(dataSummary);
