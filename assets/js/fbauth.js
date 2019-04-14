var fbconfig = {
    apiKey: "AIzaSyAEHdLLHPhMsl4SUaJGiAt1OZXHcMgsMao",
    authDomain: "bulb-project-177d8.firebaseapp.com",
    databaseURL: "https://bulb-project-177d8.firebaseio.com",
    projectId: "bulb-project-177d8",
    storageBucket: "bulb-project-177d8.appspot.com",
    messagingSenderId: "137184575165"
  };
  firebase.initializeApp(fbconfig);
// Auth
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
 console.log(user);
});
