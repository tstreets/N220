const theBoxRef = document.getElementById("theBox");

theBoxRef.style.border = "3px solid black";
theBoxRef.style.minHeight = "300px";
theBoxRef.style.display = "grid";
theBoxRef.style.gridTemplateColumns = "1fr 1fr 1fr";

function addToBox() {
  const newThing = prompt("Thing to Add:");

  const newDiv = document.createElement("div");
  newDiv.style.height = "100px";
  newDiv.style.width = "100px";
  newDiv.style.backgroundColor = "lightgrey";
  newDiv.style.margin = "5px";
  newDiv.classList.add("box");
  newDiv.innerHTML = newThing;

  theBoxRef.appendChild(newDiv);

  const allBoxes = document.querySelectorAll(".box");
  for (let i = 0; i < allBoxes.length; i++) {
    const box = allBoxes[i];
    box.onclick = clickBox;
  }
}

function clickBox(e) {
  if (e.currentTarget.style.backgroundColor === "lightcoral") {
    e.currentTarget.style.backgroundColor = "lightgray";
  } else {
    e.currentTarget.style.backgroundColor = "lightcoral";
  }
}

function toggleTheBoxHidden() {
  if (theBoxRef.style.display !== "none") {
    theBoxRef.style.display = "none";
  } else {
    theBoxRef.style.display = "grid";
  }
}
