import firebase from 'firebase';

try{
  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyASOaej7dOYWVo0jjigDNffyqZFPQFVdiM",
      authDomain: "react-todoapp-cf406.firebaseapp.com",
      databaseURL: "https://react-todoapp-cf406.firebaseio.com",
      storageBucket: "react-todoapp-cf406.appspot.com",
      messagingSenderId: "264586583325"
  };
  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
