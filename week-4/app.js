const studentGrades = [78, 86, 92, 77, 50];

const answersPTag = document.getElementById("answers");

function printAnswer(answer) {
  answersPTag.innerHTML += `<br /> ${answer}`;
}

// ARRAY BASICS

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

// ARRAY MORE!!!!!!!!!

// 0. Create an array
const friends = [
  "Elmo",
  "Spongebob",
  "CatDog",
  "Danny Phantom",
  "Timmy Turner",
];

function printFriends() {
  document.querySelector("#extraAnswers").innerHTML += `<br /> ${friends}`;
}

// 1. Add items to an array using the push method
friends.push("Jimmy Neutron");
printFriends();

// 2. Remove the last item to an array using the pop method
friends.pop();
printFriends();

// 3. Remove the first item to an array using the slice method
friends.splice(0, 1);
printFriends();

// 4. Add item to front of array using the
friends.splice(0, 0, "Invader Zim");
printFriends();

// 5. Use splice again
friends.splice(2, 1);
printFriends();

// 6. Splice
friends.splice(2, 0, "Gir");
printFriends();

// 7. Splice
friends.splice(3, 1, ["Patrick", "Squidward"]);
printFriends();

// splice method takes three parameters
// 1. What index to start at
// 2. How many elements starting from that index should be deleted
// 3. What to add to the array
//      This could be just a value or an array of values to add multiple

// Objects
