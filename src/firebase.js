
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoVlj25eK4SXrWc0aB4hnzrSMqRGrrfeY",
    authDomain: "slackclone-ed42d.firebaseapp.com",
    projectId: "slackclone-ed42d",
    storageBucket: "slackclone-ed42d.appspot.com",
    messagingSenderId: "760435392290",
    appId: "1:760435392290:web:49d8bca1844a86a60a2f7b",
    measurementId: "G-Q3S5L492WM"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new GoogleAuthProvider();
  // console.log(db.collection("rooms"));
  export {auth , provider , db};