class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket Price: ₹${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket1 = new OnlineTicket("Inception", "A5", 250, 30);
const ticket2 = new OnlineTicket("Interstellar", "B7", 300, 35);

ticket1.printTicket();
console.log("Total Amount: ₹" + ticket1.getTotalAmount());

ticket2.printTicket();
console.log("Total Amount: ₹" + ticket2.getTotalAmount());

console.log("printTicket() is found through the prototype chain because OnlineTicket inherits from MovieTicket.");
