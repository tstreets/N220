/*
1. Create variable tracking currentCount

2. Create function addCount to add to the currentCount then update the "counter" p tag to show the currentCount

*/

let currentCount = 0;

function showCurrentCount() {
  document.querySelector("#counter").innerHTML = currentCount;
}

showCurrentCount();

function addCount() {
  currentCount++;
  showCurrentCount();
}
