// Q8. Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

// Apply category discounts
for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price = price - price * 0.10;
    } else if (product.category === "fashion") {
        price = price - price * 0.05;
    }

    discountedTotal += price;
}

// Apply extra 5% discount if original cart total is above 50000
if (total > 50000) {
    discountedTotal *= 0.95;
}

console.log("Original Total:", total);
console.log("Final Total:", discountedTotal);
