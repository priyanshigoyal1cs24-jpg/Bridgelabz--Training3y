"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
    try {
        const transaction = transactions[index];
        if (transaction === null) {
            throw new TypeError("Null transaction entry");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new ReferenceError("Missing transaction id or amount");
        }
        if (transaction.amount < 0) {
            throw new RangeError("Negative transaction amount");
        }
        valid.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalid.push({ index, transaction: transactions[index], type: error.name, message: error.message });
        console.log(`Transaction at index ${index} failed: ${error.name} — ${error.message}`);
        // In VS Code, set a breakpoint on this line and inspect index, error, valid, and invalid.
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}; Failed: ${invalid.length}`);
