const Loaduser = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
  const userContainer = document.getElementById("user-container");
  for (const user of users) {
    console.log(user);
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
      <h3>User Name:${user.name.title} ${user.name.first} ${user.name.last}</h3>
      <p>Email: ${user.email}</p>
      </p>User location: ${user.location.city} ${user.location.country}</P>
      <p>User CellPhone: ${user.cell} </p>
      <p>User Id: ${user.id.value} </p>
      <p>User Login: ${user.login.uuid} </p>
      <img src=" ${user.picture.large}">
      <p>User Id: ${user.id.name} </p>
      
      `;
    userContainer.appendChild(userDiv);
  }
};

Loaduser();
