// Initialize Firebase
var config = {
    apiKey: "AIzaSyCv_8xey9wTe2r5gl8twHpmzrWUnlAW6wQ",
    authDomain: "afripaper2.firebaseapp.com",
    databaseURL: "https://afripaper2.firebaseio.com",
    projectId: "afripaper2",
    storageBucket: "afripaper2.appspot.com",
    messagingSenderId: "233984910956"
  };
  firebase.initializeApp(config);

  firebase.auth.Auth.Persistence.LOCAL;

  $("btn-login").click(function() {
      var email = $("email").val();
      var password = $("password").val();

    var result = firebase.auth().signInWithEmailAndPassword(email, password)

    result.catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
    });
  });