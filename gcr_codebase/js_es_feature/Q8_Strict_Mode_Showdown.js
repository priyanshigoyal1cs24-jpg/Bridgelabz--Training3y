"use strict";

// In strict mode, duplicate parameter names in ordinary functions are illegal.
// Also, assigning to an undeclared variable throws ReferenceError, and
// deleting an unqualified identifier is a SyntaxError.
function demo(a, b) {
    const total = 10;
    console.log(`a=${a}, b=${b}, total=${total}`);
}
demo(5, 10);

// To compare without strict mode, make a separate file and remove "use strict".
// In non-strict mode duplicate parameters and implicit globals may be accepted
// in classic scripts, but creating implicit globals is error-prone and should be avoided.
// Correct ES6-style version uses distinct parameters and declared variables.
