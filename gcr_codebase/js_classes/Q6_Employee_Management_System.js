class Employee {
    constructor(id, name, department, salary) { this.id=id; this.name=name; this.department=department; this.salary=salary; }
    getAnnualSalary() { return this.salary * 12; }
    applyBonus(percent) { this.salary += this.salary * percent / 100; }
}
const employees=[
 new Employee(1,"Amit","IT",45000),new Employee(2,"Sara","HR",38000),
 new Employee(3,"Kiran","Finance",52000),new Employee(4,"Neha","Sales",41000),
 new Employee(5,"Rohan","IT",60000)
];
employees.forEach(employee=>console.log(`${employee.name} | ${employee.department} | Annual Salary: ₹${employee.getAnnualSalary().toFixed(2)}`));
const totalAnnualPayout=employees.reduce((total,employee)=>total+employee.getAnnualSalary(),0);
console.log(`Total annual payout: ₹${totalAnnualPayout.toFixed(2)}`);
employees[0].applyBonus(10);
console.log(`Amit's annual salary after 10% bonus: ₹${employees[0].getAnnualSalary().toFixed(2)}`);
