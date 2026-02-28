// Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
// Score 90–100 → A
// Score 80–89  → B
// Score 70–79  → C
// Score 60–69  → D
// Score 0–59   → F
// Invalid      → Error message

let grade
let score = "Deepti"

if (typeof score !== "number") {
    console.log("Enter your valid number");
    return;
}

if (score < 0 || score > 100) {
    console.log("you are gving score <0 or. > 100");
    return;
}

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("For the score", score, "Grade is ->", grade);
console.log(`For the score ${score} "Grade is -> ", ${grade}`);