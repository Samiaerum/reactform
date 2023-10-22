// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt7c5PMyTrXKX4edSfJq5Q4LBmpDl82hc",
    authDomain: "my-smit-project.firebaseapp.com",
    databaseURL: "https://my-smit-project-default-rtdb.firebaseio.com",
    projectId: "my-smit-project",
    storageBucket: "my-smit-project.appspot.com",
    messagingSenderId: "729333477503",
    appId: "1:729333477503:web:c597bd7f2ae3b0c3cfcf4a",
    measurementId: "G-4P5DVENZKC"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

