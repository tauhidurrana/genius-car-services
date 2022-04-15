import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmFER--pxFc_zYm0JA7JeELyW6zmDCuAI",
  authDomain: "genius-car-services-8b9d2.firebaseapp.com",
  projectId: "genius-car-services-8b9d2",
  storageBucket: "genius-car-services-8b9d2.appspot.com",
  messagingSenderId: "726811481627",
  appId: "1:726811481627:web:ed213cf5f432ca0df24abe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
