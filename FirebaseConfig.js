// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg-bcHUFoxewDSN7ucAYW-VD38i8ooquw",
  authDomain: "react-native-007-fc266.firebaseapp.com",
  projectId: "react-native-007-fc266",
  storageBucket: "react-native-007-fc266.appspot.com",
  messagingSenderId: "884774259613",
  appId: "1:884774259613:web:eb33868be1ec0217153d74"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStore = getFirestore(firebaseApp);
