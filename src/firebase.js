// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNkB8ptiPNUoWTMfGfIKrpGjsnV-u4Xyo",
  authDomain: "clone-1d462.firebaseapp.com",
  projectId: "clone-1d462",
  storageBucket: "clone-1d462.appspot.com",
  messagingSenderId: "522214792415",
  appId: "1:522214792415:web:16a4487f12c94c4ce59d6a",
  measurementId: "G-62FD1RZ2HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);