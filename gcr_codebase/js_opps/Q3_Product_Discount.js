function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Laptop", 60000),
    new Product("Headphones", 3000),
    new Product("Keyboard", 1500)
];

const discounts = [10, 20, 15];

products.forEach((product, index) => {
    const finalPrice = product.applyDiscount(discounts[index]);
    console.log(`${product.name}: Original Price = ₹${product.price}, Discount = ${discounts[index]}%, Final Price = ₹${finalPrice}`);
});

console.log("Abstraction: applyDiscount() hides the discount calculation. We only provide the discount percentage and receive the final price.");
