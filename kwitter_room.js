
//Añade los enlaces de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAJqX6pdLKRt4WvsxYPAdJ8JdgqRXzJ74",
  authDomain: "ordenarcomidadb2.firebaseapp.com",
  databaseURL: "https://ordenarcomidadb2-default-rtdb.firebaseio.com",
  projectId: "ordenarcomidadb2",
  storageBucket: "ordenarcomidadb2.appspot.com",
  messagingSenderId: "424110272862",
  appId: "1:424110272862:web:1bfcbc6dfd4372708fdfcf"
};

firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
