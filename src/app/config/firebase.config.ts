// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChy16KhjospA3OrrT9e_10yma1IQTITHM",
  authDomain: "headphone-project.firebaseapp.com",
  projectId: "headphone-project",
  storageBucket: "headphone-project.appspot.com",
  messagingSenderId: "636300857082",
  appId: "1:636300857082:web:ef583d1b5fc46fe5e38343",
  measurementId: "G-JQRG3C8B9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
