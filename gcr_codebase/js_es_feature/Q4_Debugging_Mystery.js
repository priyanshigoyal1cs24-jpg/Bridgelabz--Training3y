"use strict";

function showMessage() {
    // Declaring the variable prevents a strict-mode ReferenceError.
    const greeting = "Welcome";
    console.log(greeting);
}
showMessage();

// Debug tip: add a breakpoint on the console.log line.
// Watch: greeting. Call Stack should show showMessage, then the global script.
