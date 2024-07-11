// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGmNtFSuVedbraBoe2kbQtO4fxyOrv3MA",
  authDomain: "signup-login-2f5ee.firebaseapp.com",
  projectId: "signup-login-2f5ee",
  storageBucket: "signup-login-2f5ee.appspot.com",
  messagingSenderId: "71194839659",
  appId: "1:71194839659:web:e42a7a50be7ae8b30d3f2e",
  measurementId: "G-7CWJSV22W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
