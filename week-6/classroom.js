/*

1. Create a classroom object with properties / methods for:
    - the list of students
    - class name
    - show students function
    - max students

2. The show students function / method for your classroom object should:
    - clear current students shown in p tag
    - loop through list of students and add them to p tag (use <br /> after each student)

3. Create a function for adding the new student (make sure it matches the button onclick function call). 

This function should check if there is a seat available for the student. 

If there is not then console.log("No seats available"). 

If there are then add the student's name to the list of students on the classroom object then run the show students method.


 */

const classroom = {
  students: [],
  name: "Ty's Class",
  showStudents() {
    document.getElementById("students").innerHTML = "";

    // this.students.forEach(function (studentName) {
    //   document.getElementById("students").innerHTML += studentName + "<br />";
    // });
    for (let i = 0; i < this.students.length; i++) {
      const studentName = this.students[i];
      document.getElementById("students").innerHTML += studentName + "<br />";
    }
  },
  maxStudents: 6,
};

function addNewStudent() {
  const currentStudents = classroom.students.length;

  if (currentStudents >= classroom.maxStudents) {
    console.log("No seats available");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}
