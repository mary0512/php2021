console.log("task1")

const url = 'https://api-f22.herokuapp.com/';
let allUsers = [];

function getUsers (){
    axios.get (url + 'users')
    .then(function (response) {
      // handle success
      allUsers = [];
      allUsers.push(...response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log(allUsers)
    });
};

function createUser(name){
    axios.post (url + 'users', {"name": name}, {haeders: {"Content-Type": "application/json"}})
    .then(function (response) {
      // handle success
      allUsers.push(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log(allUsers)
    });
};

function getUserById(id){
  axios.get (url + 'users/' + id)
  .then(function (response) {
    // handle success
    console.log(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
};

function deleteUserById(id){
  axios.delete (url + 'users/' + id)
  .then(function (response) {
    // handle success
    console.log(response.data)
    let index = allUsers.findIndex(user => user.id === id);
    allUsers.splice(index, 1)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log(allUsers)
  });
};

function updateUserById (id, name){
  axios.patch(url + 'users' , {"name": name, "id": id}, {haeders: {"Content-Type": "application/json"}})
  .then(function (response) {
    // handle success
    console.log(response.data)
    allUsers.find(user => user.id === id).name = name;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log(allUsers)
  });
};

getUsers();

function createFilm(title, author){
  axios.post (url + 'films', {"title": title, "author": author}, {haeders: {"Content-Type": "application/json"}})
  .then(function (response) {
    // handle success
    console.log(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log(allUsers)
  });
};

function addFilm(userId, filmId){
  axios.post (url + 'users/addFilm', {"userId": userId, "filmId": filmId}, {haeders: {"Content-Type": "application/json"}})
  .then(function (response) {
    // handle success
    console.log(response.data)
    let index = allUsers.findIndex(user => user.id === userId);
    allUsers[index] = response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log(allUsers)
  });
};

function showAllUsers (){
  document.body.innerHTML = '';
  for (let user of allUsers) {
      let html = `
          <div class="card">
              <h6>${user.name}</h6>
              <p>Films:</p>
              <ul>`;
      for (let film of user.films) {
        html += `
            <li>
              <p>Title: ${film.title}</p>
              <p>Author: ${film.author}</p>
            </li>
        `;
      }          
      html +=`</ul></div>`;
      document.body.innerHTML += html;
  }
}
