"use strict";

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unknown operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "divide":
            if (b === 0) throw new RangeError("Cannot divide by zero");
            return a / b;
        case "power": return a ** b;
        case "root":
            if (a < 0) throw new RangeError("Cannot take the square root of a negative number");
            return Math.sqrt(a);
        default: throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation.toUpperCase()}: ${result}`);
    } catch (error) {
        console.log(`${operation.toUpperCase()} ERROR: ${error.name} — ${error.message}`);
    }
}

try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`CUSTOM ERROR: ${error.name} — ${error.message}`);
}
