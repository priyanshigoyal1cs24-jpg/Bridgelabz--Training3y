class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log(`Deposited ₹${amount}`);
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log(`Withdrawn ₹${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

try {
    account.deposit(2000);
    console.log("Current balance: ₹" + account.getBalance());
} catch (error) {
    console.log("Transaction failed:", error.message);
}

try {
    account.withdraw(1000);
    console.log("Current balance: ₹" + account.getBalance());
} catch (error) {
    console.log("Transaction failed:", error.message);
}

try {
    account.withdraw(10000);
} catch (error) {
    console.log("Transaction failed:", error.message);
}

console.log("Final balance: ₹" + account.getBalance());
