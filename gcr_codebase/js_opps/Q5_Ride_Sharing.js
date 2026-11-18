class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance must be provided.");
        }

        if (typeof this.distance !== "number" || this.distance < 0) {
            throw new Error("Trip distance must be a non-negative number.");
        }

        return this.distance * 12;
    }
}

const driver = new Driver("Rahul", 4.8, "Car", "UP85AB1234");
console.log(`Driver: ${driver.name}, Rating: ${driver.rating}, Vehicle: ${driver.vehicle}, Number: ${driver.vehicleNumber}`);

try {
    const trip = new Trip("Mathura", "Vrindavan", 15);
    console.log(`Fare: ₹${trip.calculateFare()}`);
} catch (error) {
    console.log("Unable to calculate fare:", error.message);
}

try {
    const invalidTrip = new Trip("Mathura", "Agra", -10);
    console.log(`Fare: ₹${invalidTrip.calculateFare()}`);
} catch (error) {
    console.log("Unable to calculate fare:", error.message);
}
