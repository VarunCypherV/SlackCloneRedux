
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
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
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  export {auth , provider , db};