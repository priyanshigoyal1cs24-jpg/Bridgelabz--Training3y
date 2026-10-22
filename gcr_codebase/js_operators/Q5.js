// Q5. Boolean Logic Access System
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

// Change a value and test another outcome
isAlarmOn = false;
checkSecurity();

// OR and NOT operators
console.log("Any opening unlocked:", !isDoorLocked || !isWindowClosed);
