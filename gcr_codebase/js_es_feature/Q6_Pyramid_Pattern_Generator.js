"use strict";

const rawLimit = prompt("Enter pyramid height (default = 5):");
let limit = rawLimit === null || rawLimit.trim() === "" ? 5 : Number(rawLimit);

if (!Number.isInteger(limit) || limit < 1) {
    console.log("Invalid height. Using default height 5.");
    limit = 5;
}

for (let row = 1; row <= limit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line.trim());
}

// To observe var reuse, change `let row` and `let column` to `var`,
// then inspect them in the debugger after the loops. var is function-scoped,
// while let is block-scoped. The pattern remains the same in this example.
// Run in a browser console because prompt() is used for input.
