// Q2. String Manipulation Report
let product = " wireless headphones PRO ";

product = product.trim().toLowerCase();

product = product.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");

product = product.replace("Pro", "Pro Edition");

console.log("Product Name:", product);
console.log("Length:", product.length);
