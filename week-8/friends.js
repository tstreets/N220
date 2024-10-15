// Reference variables
const friendNameInputRef = document.getElementById("friendName");
const friendsListRef = document.getElementById("friendsList");

// Variable to track my friends
const myFriends = [];

// Function for adding friend
function addFriend() {
  // get the name the user typed in
  const nameValue = friendNameInputRef.value;

  // add friend to myFriends list
  myFriends.push({ name: nameValue, color: "black" });

  showFriends();

  // clear the name the user typed
  friendNameInputRef.value = "";
}

function removeFriend(friendIndex) {
  // remove the person from the list
  myFriends.splice(friendIndex, 1);

  showFriends();
}

// function to loop through myFriends and show 'em on the page
function showFriends() {
  // clear pages old friends list
  friendsListRef.innerHTML = "";

  // loop through friends
  myFriends.forEach(function (friend, friendIndex) {
    // add the name to the friends list
    friendsListRef.innerHTML += `<li>
    <span style="color: ${friend.color}">${friend.name}</span>
    <button onclick="removeFriend(${friendIndex})">X</button>
    <button onclick="moveFriend('${friend.name}', true)">&#8593;</button>
    <button onclick="moveFriend('${friend.name}', false)">&#8595;</button>
    
    <input 
        type="color" 
        name="friendTextColor${friendIndex}"
        id="friendTextColor${friendIndex}"
        onchange="changeFriendTextColor(${friendIndex}, event.currentTarget)"
    />
    
 </li>`;
  });
}

function changeFriendTextColor(friendIndex, inputRef) {
  const friendName = myFriends[friendIndex].name;
  myFriends.splice(friendIndex, 1, { name: friendName, color: inputRef.value });

  showFriends();
}

// function to clear list of friends
function clearList() {
  myFriends.splice(0, myFriends.length);

  showFriends();
}

// function to move friends ranking
function moveFriend(friendName, isMovingUp) {
  let friendIndex;
  let friendNewIndex;

  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i].name === friendName) {
      friendIndex = i;

      if (isMovingUp) {
        friendNewIndex = friendIndex - 1;
      } else {
        friendNewIndex = friendIndex + 1;
      }
    }
  }

  // remove friend from old space
  myFriends.splice(friendIndex, 1);
  // add friend to new space
  myFriends.splice(friendNewIndex, 0, { name: friendName, color: "black" });

  showFriends();
}
