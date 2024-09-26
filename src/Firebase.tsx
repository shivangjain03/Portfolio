// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEK-twtlTFX7j-CEEq9dMFbQVlbZKa-H8",
  authDomain: "personal-portfolio-d0104.firebaseapp.com",
  projectId: "personal-portfolio-d0104",
  storageBucket: "personal-portfolio-d0104.appspot.com",
  messagingSenderId: "648861291465",
  appId: "1:648861291465:web:c1a479c218ee085f3e0e18",
  measurementId: "G-8H9C4V28Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
