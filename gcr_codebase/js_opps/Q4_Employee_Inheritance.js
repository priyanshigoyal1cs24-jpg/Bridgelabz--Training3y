class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the ${this.department} department and guides the team.`;
    }
}

const employee = new Employee("Aman", "Development");
const manager = new Manager("Neha", "Sales");

const team = [employee, manager];

team.forEach(person => console.log(person.work()));
console.log("The same work() call gives different results for Employee and Manager objects. This is runtime polymorphism.");
