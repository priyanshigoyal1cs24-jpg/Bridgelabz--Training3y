class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

const students = [
    new Student("Aarav", [85, 90, 88]),
    new Student("Riya", [72, 68, 75]),
    new Student("Kabir", [35, 42, 30])
];

students.forEach(student => {
    console.log(`${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`);
});
