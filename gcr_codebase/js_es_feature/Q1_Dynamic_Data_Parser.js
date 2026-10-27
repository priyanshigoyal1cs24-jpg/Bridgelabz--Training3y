"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidData = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Reject blank strings and values that cannot be parsed as a finite number.
    const isBlank = typeof value === "string" && value.trim() === "";
    if (isBlank || !Number.isFinite(numberValue)) {
        invalidData.push({ index: i, original: value, numberValue });
    } else {
        validNumericData.push({ index: i, original: value, numberValue });
    }

    console.log(`Index ${i}: original=${stringValue}, Number=${numberValue}, Boolean=${booleanValue}, String="${stringValue}"`);
}

console.log("\nValid numeric data:");
console.log(validNumericData);
console.log("\nInvalid numeric data (including blank strings and non-numeric values):");
console.log(invalidData);
console.log(`Valid count: ${validNumericData.length}; Invalid count: ${invalidData.length}`);
