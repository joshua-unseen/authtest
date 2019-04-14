var fbconfig = {
    apiKey: "AIzaSyAEHdLLHPhMsl4SUaJGiAt1OZXHcMgsMao",
    authDomain: "bulb-project-177d8.firebaseapp.com",
    databaseURL: "https://bulb-project-177d8.firebaseio.com",
    projectId: "bulb-project-177d8",
    storageBucket: "bulb-project-177d8.appspot.com",
    messagingSenderId: "137184575165"
  };
  firebase.initializeApp(fbconfig);
  var DB = firebase.database();
// Auth
var uid = "";
// Using a popup.
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
firebase.auth().signInWithPopup(provider).then(function(result) {
 // This gives you a Google Access Token.
 var token = result.credential.accessToken;
 console.log(token);
 // The signed-in user info.
 var user = result.user;
 uid = user.uid;
 console.log("user id: " + uid);
});

firebase.auth().onAuthStateChanged(function(user){
    console.log(DB.ref("users/" + user.uid + "/headers"));
});
function SetToken(newToken) {
    DB.ref("users/" + uid).set({headers: {"Authorization": "Bearer " + newToken}});
}

/*
    Flow: when user authenticates, check database for lifx connection parameters.
    If none, prompt for them using bootstrap modal, store in the database.
*/