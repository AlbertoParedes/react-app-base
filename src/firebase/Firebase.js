import * as fb from 'firebase/app';
var config = {
    apiKey: "AIzaSyD2UWsMbfCUtOWf7XQXns8mEvKaD1nwk6Y",
    authDomain: "w2a-managment.firebaseapp.com",
    databaseURL: "https://w2a-managment.firebaseio.com",
    projectId: "w2a-managment",
    storageBucket: "w2a-managment.appspot.com",
    messagingSenderId: "256969615040"
  };
const firebase = fb.initializeApp(config);
export default firebase;
