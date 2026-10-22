// Q7. Customer Feedback Processor
let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.trim().split(/\s+/);
console.log("Word Count:", words.length);

let lowerFeedback = feedback.toLowerCase();

if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
