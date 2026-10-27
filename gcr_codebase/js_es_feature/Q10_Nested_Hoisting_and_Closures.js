"use strict";

function outer() {
    console.log(count); // undefined: outer's var is hoisted but not initialized yet.
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner has its own hoisted local count.
        var count = 10;
    }

    inner();
    console.log("Outer count:", count); // 5
}
outer();

// Output:
// undefined
// undefined
// Outer count: 5
//
// Arrow-function comparison: replacing inner with an arrow does not change
// the local var hoisting shown here. Arrow functions differ mainly in `this`,
// `arguments`, and constructor behavior; they still have their own function scope
// for `var` declared inside their body.
function outerWithArrow() {
    console.log(count); // undefined
    var count = 5;

    const inner = () => {
        console.log(count); // undefined because inner's local var shadows outer count
        var count = 10;
    };

    inner();
    console.log("Outer count:", count);
}
outerWithArrow();

// Debug tip: set breakpoints on both console.log statements in inner functions.
// Inspect count in Local/Closure scopes and use the Call Stack to see outer -> inner.
