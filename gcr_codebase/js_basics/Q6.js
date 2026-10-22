// Q6. Progressive Discount System
let purchaseTotal = 7500;
let discountPercentage;

// Select a discount tier.
if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate the discount and final price.
let discountAmount = purchaseTotal * discountPercentage / 100;
let finalPrice = Math.round(purchaseTotal - discountAmount);

console.log("Original Total: ₹" + purchaseTotal);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Final Price After Discount: ₹" + finalPrice);
