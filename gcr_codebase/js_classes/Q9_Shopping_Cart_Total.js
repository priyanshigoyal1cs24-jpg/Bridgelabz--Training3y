class Cart {
    constructor() { this.items=[]; }
    addItem(name,price,quantity) {
        if(!name||!Number.isFinite(price)||price<0||!Number.isInteger(quantity)||quantity<1)throw new Error("Invalid item details");
        this.items.push({name,price,quantity});
    }
    getTotal() { return this.items.reduce((total,item)=>total+item.price*item.quantity,0); }
    applyCoupon(couponCode) {
        if(!/^(SAVE|DISC)(10|20|30|40|50)$/.test(couponCode))throw new Error("Invalid coupon. Use SAVE20 or DISC10 format.");
        const discountPercent=Number(couponCode.match(/\d+$/)[0]),total=this.getTotal();
        return {subtotal:total,discountPercent,discountAmount:total*discountPercent/100,finalTotal:total*(1-discountPercent/100)};
    }
}
const cart=new Cart();
cart.addItem("Keyboard",1500,1);cart.addItem("Mouse",700,2);cart.addItem("USB Cable",250,3);
console.log("Cart items:",cart.items);
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);
try {
 const result=cart.applyCoupon("SAVE20");
 console.log(`Discount: ${result.discountPercent}%`);
 console.log(`Discount amount: ₹${result.discountAmount.toFixed(2)}`);
 console.log(`Final total: ₹${result.finalTotal.toFixed(2)}`);
} catch(error) { console.log(error.message); }
