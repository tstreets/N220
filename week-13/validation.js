function validatePassword() {
  const passwordRef = document.getElementById("password");

  let containsNumber = false;
  let containsLowercase = false;

  console.log("Password: ", passwordRef.value);
  for (let i = 0; i < passwordRef.value.length; i++) {
    const currentCharacter = passwordRef.value[i];

    // Is there at least 1 number
    if (isNaN(currentCharacter) === false) {
      containsNumber = true;
    }

    // Is there at least 1 lowercase letter
    if (
      currentCharacter == currentCharacter.toLowerCase() &&
      isNaN(currentCharacter)
    ) {
      containsLowercase = true;
    }
  }

  const validPassword = containsNumber && containsLowercase;

  if (validPassword) {
    alert("Woohoo!");
    passwordRef.value = "";
  } else {
    alert("Do better");
  }
  console.log(validPassword);
}

const newBtn = document.createElement("button");
newBtn.innerHTML = "Check Password";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);
