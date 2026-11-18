const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Phone", category: "Electronics", price: 25000, stock: 12 },
    { id: 3, name: "Notebook", category: "Stationery", price: 60, stock: 3 },
    { id: 4, name: "Pen", category: "Stationery", price: 20, stock: 30 },
    { id: 5, name: "Chair", category: "Furniture", price: 3500, stock: 6 },
    { id: 6, name: "Table", category: "Furniture", price: 7000, stock: 2 }
];

function getLowStockProducts(items) {
    return items.filter(product => product.stock < 5);
}

function sortProductsByPrice(items) {
    return [...items].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(items) {
    return items.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(items) {
    return items.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:", getLowStockProducts(products));
console.log("Products sorted by price:", sortProductsByPrice(products));
console.log("Total inventory value: ₹" + calculateTotalInventoryValue(products));
console.log("Products grouped by category:", groupByCategory(products));
