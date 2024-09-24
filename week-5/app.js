const codeChallenge = {
  courseNumber: "N220",
  courseTitle: "Intro to Media Application",
  totalSeats: 20,
  enrolledStudents: 18,
  getAvailibility: function () {
    // return (this.totalSeats - this.enrolledStudents) !== 0;
    return this.totalSeats > this.enrolledStudents;
  },
};

// 1. Are seats available
console.log(`N220 Open: ${codeChallenge.getAvailibility()}.`);

// 2. Two more peeps
codeChallenge.enrolledStudents += 2;
console.log(`Total Students: ${codeChallenge.enrolledStudents}`);

// 3. Check available again
console.log(`N220 Open: ${codeChallenge.getAvailibility()}.`);

// BUILT-IN OBJECTS!!!!!!!!
var tacocat = "wednesday";

function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Inner Width: ${window.innerWidth}`);
  console.log(`Outer Width: ${window.outerWidth}`);

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += codeChallenge.courseTitle;

document.querySelector("#domain").innerHTML += "Hi";

const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));

console.log(String(100).length, 100);
console.log(String(100).includes("2"), 100);
console.log("100".replace("0", "2"), 100);
console.log("100".replaceAll("0", "2"), 100);
console.log("1,2,3,4".split(","));
console.log("  123  ");
console.log("  123  ".trim());
