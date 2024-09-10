function simpleFunctionOne() {
  // Code here
  document.getElementById("changeTxt").innerHTML =
    "Don't change this paragraph.";
}

simpleFunctionOne();

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters.";
}
simpleFunctionTwo();

function sayHelloWorld() {
  console.log("Hello, world");
}

sayHelloWorld();

// Started using parameters

function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavoriteBand("Three Days Grace");
sayFavoriteBand("Maroon 5");

function sayMyName(myName) {
  console.log(myName);
}

sayMyName("Say my name");
sayMyName("Say my name");
sayMyName("If no one is around you");
