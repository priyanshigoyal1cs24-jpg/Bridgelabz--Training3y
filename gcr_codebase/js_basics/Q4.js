// Q4. Academic Performance Evaluator
// Marks for five subjects (each out of 100).
const marks = [88, 76, 91, 68, 82];

// Calculate total, average, and overall percentage.
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// If any subject is below 35, the student is detained automatically.
if (marks.some(mark => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Average Marks:", average.toFixed(2));
console.log("Overall Percentage:", percentage.toFixed(2) + "%");
