 import firebase from 'firebase'
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_wzKRIxJ3c4o5xFsnCFW-zIMN9GBVkbc",
    authDomain: "todo-list-redux-acd46.firebaseapp.com",
    databaseURL: "https://todo-list-redux-acd46.firebaseio.com",
    projectId: "todo-list-redux-acd46",
    storageBucket: "todo-list-redux-acd46.appspot.com",
    messagingSenderId: "418119437772"
  };
  firebase.initializeApp(config);

  export const database = firebase.database()
  export const auth = firebase.auth()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()