// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW9BZiHrlR6s1LNSg60b7BkZIdGfsyDpM",
  authDomain: "yashvi-store.firebaseapp.com",
  projectId: "yashvi-store",
  storageBucket: "yashvi-store.appspot.com",
  messagingSenderId: "642566394397",
  appId: "1:642566394397:web:7be28c095c8797fdcd2cf4",
  measurementId: "G-D3QGYGZWW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();