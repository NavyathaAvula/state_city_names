// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyAwudBzkGrR246l0z0uqWYdfoK5Q0NsNW8",
  authDomain: "hello-4fab0.firebaseapp.com",
  databaseURL: "https://hello-4fab0-default-rtdb.firebaseio.com",
  projectId: "hello-4fab0",
  storageBucket: "hello-4fab0.appspot.com",
  messagingSenderId: "523020647993",
  appId: "1:523020647993:web:128b25fabb9e46dca197e8"
 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var email = document.getElementById('email').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
  
    database.ref('users/' + username).set({
      city_name2: email,
      city_nmae1 : password,
      state_name : username,
      city_name3 : say_something,
      city_name4 : favourite_food
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.email)
  
    })
  
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }