// Q6. Event-Based Counter Simulation
let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}

function decrement() {
    count--;
    console.log("Count:", count);
}

function showCounter() {
    // Nested function can access count from the outer scope
    function display() {
        console.log("Current Count:", count);
    }

    display();
}

// Simulate clicks by calling the functions
increment();
increment();
decrement();
showCounter();
