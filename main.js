var firebaseConfig = {
    apiKey: "AIzaSyDJ8Ip-G_ZInAVvQL0Xkg2jBDa-bAuhxUw",
    authDomain: "kwitter-1a69a.firebaseapp.com",
    databaseURL: "https://kwitter-1a69a-default-rtdb.firebaseio.com",
    projectId: "kwitter-1a69a",
    storageBucket: "kwitter-1a69a.appspot.com",
    messagingSenderId: "449752124133",
    appId: "1:449752124133:web:b579fa5532d6e14bd0220c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser() 
{ 
 user_name = document.getElementById("user_name").value;
 localStorage.setItem("user_name", user_name); 
 window.location = "kwitter_room.html"; 
}