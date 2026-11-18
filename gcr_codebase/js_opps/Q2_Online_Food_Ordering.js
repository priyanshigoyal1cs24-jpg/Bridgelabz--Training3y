const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(itemName => {
        const item = menu.find(menuItem => menuItem.name.toLowerCase() === itemName.toLowerCase());

        if (!item) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return item.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    console.log("Total bill:", calculateBill(["Pizza", "Burger", "Pasta"]));
} catch (error) {
    console.log("Unable to place order:", error.message);
}

try {
    console.log("Total bill:", calculateBill(["Pizza", "Sushi"]));
} catch (error) {
    console.log("Unable to place order:", error.message);
}
