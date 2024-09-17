const studentGrades = [78, 86, 92, 77, 50];

const answersPTag = document.getElementById("answers");

function printAnswer(answer) {
  answersPTag.innerHTML += `<br /> ${answer}`;
}

// 1. Arrays will print as a string seperated with commas by default
answersPTag.innerHTML += studentGrades;

// 2. Access specific values in array using indexes
// studentGrades[0]; indexes start at 0
// answersPTag.innerHTML += `<br /> ${studentGrades[1]}`;
printAnswer(studentGrades[1]);

// 3. Assign new values to array items in the same way that you would a variable declared with let
studentGrades[1] = 83;

// 4. Same as 1
// answersPTag.innerHTML += `<br /> ${studentGrades}`;
printAnswer(studentGrades);

// 5. All array have a length even if it is zero
printAnswer(studentGrades.length);

// 6. Arrays have a forEach method that takes a function as the parameter
// That function has access to the values and indexes in the array
studentGrades.forEach(function (currentStudent, currentStudentIndex) {
  // Loop here
  studentGrades[currentStudentIndex] += 1;
  printAnswer(studentGrades[currentStudentIndex]);
});

// 7. Same as 1
printAnswer(studentGrades);

// 8. Similar to 2
const indexOfLastStudent = studentGrades.length - 1;
printAnswer(studentGrades[indexOfLastStudent]);

// 9. Use variable to track total of grades added together.
// Looped through array and added to total
// Mathed up the average
let totalOfGrades = 0;

studentGrades.forEach(function (currentGrade) {
  totalOfGrades += currentGrade;
});

const averageGrade = totalOfGrades / studentGrades.length;
printAnswer(averageGrade);

// 10.
printAnswer(averageGrade > 80);
