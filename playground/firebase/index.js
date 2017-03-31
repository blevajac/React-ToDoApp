import firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyASOaej7dOYWVo0jjigDNffyqZFPQFVdiM",
    authDomain: "react-todoapp-cf406.firebaseapp.com",
    databaseURL: "https://react-todoapp-cf406.firebaseio.com",
    storageBucket: "react-todoapp-cf406.appspot.com",
    messagingSenderId: "264586583325"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
