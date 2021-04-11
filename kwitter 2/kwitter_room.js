
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBkswBU5fyD5DDYfUmTwOrDc_Xuy7E6IuU",
      authDomain: "enter-your-project-name-8c366.firebaseapp.com",
      projectId: "enter-your-project-name-8c366",
      storageBucket: "enter-your-project-name-8c366.appspot.com",
      messagingSenderId: "599260245166",
      appId: "1:599260245166:web:6cacd9bdaca629a90e113f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
