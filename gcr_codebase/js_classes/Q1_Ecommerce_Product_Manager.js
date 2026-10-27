class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }
    getDetails() {
        return `${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
    }
}
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1800, "Electronics"),
    new Product(3, "Notebook", 120, "Stationery"),
    new Product(4, "Watch", 2500, "Accessories")
];
products[0].applyDiscount(10);
console.log("All products:");
products.forEach(product => console.log(product.getDetails()));
console.log("\nProducts priced above ₹1000:");
products.filter(product => product.price > 1000).forEach(product => console.log(product.getDetails()));
