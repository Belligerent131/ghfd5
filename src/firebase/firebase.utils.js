import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaSUWv1dj2erDvvH3eNBoEQ_5wKumY3Hk",
    authDomain: "ghfd5-de689.firebaseapp.com",
    databaseURL: "https://ghfd5-de689.firebaseio.com",
    projectId: "ghfd5-de689",
    storageBucket: "ghfd5-de689.appspot.com",
    messagingSenderId: "1086382159627",
    appId: "1:1086382159627:web:4c5256f85dd79f93e9540e",
    measurementId: "G-RRM1R8CB53"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.storage();