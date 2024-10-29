/**
 * @type {{ currentColor: String, lastColors: String[] }[]}
 * @description This is a list of colors that the user added
 */
const userColors = [];

/**
 * @type {Function}
 * @description Get's the color from user input to add to the userColors list
 */
function addNewColorItem() {
  const newColorRef = document.getElementById("newColorItem");
  const newColorValue = newColorRef.value;

  userColors.push({ currentColor: newColorValue, lastColors: [] });
  newColorRef.value = "#000000";

  showUserColors();
}

/**
 * @description Loops through userColors list and populates them on the page
 */
function showUserColors() {
  const colorSquares = document.getElementById("color-squares");
  colorSquares.innerHTML = "";

  for (let i = 0; i < userColors.length; i++) {
    const userColor = userColors[i];
    colorSquares.innerHTML += `
    <div>
        <div style="height: 200px; width: 200px; background-color: ${userColor.currentColor}" onclick="openColorChanger(${i})">
            <input 
                type="color" 
                id="user-color-${i}" 
                name="user-color-${i}" 
                hidden 
                value="${userColor.currentColor}"
                />
        </div>
        <button onclick="changeUserColor(${i})">Update Color</button>
        <button onclick="revertUserColor(${i})">Revert Color</button>
    </div>
    
    `;
  }
}

function changeUserColor(userColorIndex) {
  const userColorRef = document.getElementById(`user-color-${userColorIndex}`);

  const oldLastColors = userColors[userColorIndex].lastColors;
  oldLastColors.push(userColors[userColorIndex].currentColor);
  const newUserColor = {
    currentColor: userColorRef.value,
    lastColors: oldLastColors,
  };
  userColors.splice(userColorIndex, 1, newUserColor);

  showUserColors();
}

function revertUserColor(userColorIndex) {
  const lastColors = userColors[userColorIndex].lastColors;
  if (lastColors.length) {
    const currentColor = lastColors[lastColors.length - 1];
    lastColors.splice(lastColors.length - 1, 1);

    const newUserColor = {
      currentColor: currentColor,
      lastColors: lastColors,
    };

    userColors.splice(userColorIndex, 1, newUserColor);

    showUserColors();
  }
}

function openColorChanger(userColorIndex) {
  document.getElementById(`user-color-${userColorIndex}`).click();
}
