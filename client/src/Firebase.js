// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7YrYgj27vMl_Hc1FD7jdYoot_p40WLJY",
  authDomain: "nitsuh-e905d.firebaseapp.com",
  projectId: "nitsuh-e905d",
  storageBucket: "nitsuh-e905d.appspot.com",
  messagingSenderId: "413122723492",
  appId: "1:413122723492:web:feb05825143e685c15b031",
  measurementId: "G-XCVC1SN6H3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };
