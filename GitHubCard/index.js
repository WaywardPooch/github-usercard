/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const getGitHubUserData = (username) => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      response.data;
    })
    .catch(() => {
      console.log("Error");
    });
};

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const myUserData = getGitHubUserData("WaywardPooch");
const entryPoint = document.querySelector("div.cards");
entryPoint.appendChild(makeUserCard(myUserData));

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeUserCard(userObj) {
  // Create elements
  const userCard = document.createElement("div");
  const userImage = document.createElement("img");
  const userInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userUsername = document.createElement("p");
  const userLocation = document.createElement("p");
  const userProfile = document.createElement("p");
  const userProfileURL = document.createElement("a");
  const userFollowersCount = document.createElement("p");
  const userFollowingCount = document.createElement("p");
  const userBio = document.createElement("p");

  // Append elements
  userCard.appendChild(userImage);
  userCard.appendChild(userInfo);

  userInfo.appendChild(userName);
  userInfo.appendChild(userUsername);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userInfo.appendChild(userFollowersCount);
  userInfo.appendChild(userFollowingCount);
  userInfo.appendChild(userBio);

  userProfile.appendChild(userProfileURL);

  // Assign classes
  userCard.classList.add("card");
  userInfo.classList.add("card-info");
  userName.classList.add("name");
  userUsername.classList.add("username");

  // Assign attributes/content
  userImage.src = userObj["avatar_url"];
  userName.textContent = userObj["name"];
  userUsername.textContent = userObj["login"];
  userLocation.textContent = `Location: ${userObj["location"]}`;
  userProfileURL.href = userObj["url"];
  userProfileURL.textContent = userObj["url"];
  userFollowersCount.textContent = `Followers: ${userObj["followers"]}`;
  userFollowingCount.textContent = `Following: ${userObj["following"]}`;
  userBio.textContent = `Bio: ${userObj["bio"]}`;

  // Return the created markup
  return userCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
