import  firebase from "firebase/app";
/*import  from 'firebase/storage';
import  from 'firebase/firestore'
*/
 var firebaseConfig = {
    apiKey: "AIzaSyCbk5wCzzQvg1kPjgwndg5xMC7N02cZN3o",
    authDomain: "sadyfile-ffb0b.firebaseapp.com",
    databaseURL: "https://sadyfile-ffb0b.firebaseio.com",
    projectId: "sadyfile-ffb0b",
    storageBucket: "sadyfile-ffb0b.appspot.com",
    messagingSenderId: "66727530614",
    appId: "1:66727530614:web:d91e2e5530322247d7cf57"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorge = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorge,projectFirestore} 
