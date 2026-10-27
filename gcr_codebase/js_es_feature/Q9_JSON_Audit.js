"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18 = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    try {
        const record = JSON.parse(rawData[index]);

        if (record.user === undefined || record.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(record.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const cleanRecord = { ...record, age };
        cleanData.push(cleanRecord);
        if (age < 18) under18.push(cleanRecord);
    } catch (error) {
        errors.push({ lineNumber, message: error.message });
        console.log(`Line ${lineNumber} error: ${error.message}`);
        // Break here to inspect lineNumber, rawData[index], and error.
    }
}

console.log("\nClean data:", cleanData);
console.log("Under-18 users:", under18);
console.log("Errors:", errors);
