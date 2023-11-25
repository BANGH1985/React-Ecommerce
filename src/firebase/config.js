// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFGfkBk5WKNIU27xBnq0XEH52b17Az-gQ",
  authDomain: "ecommercereactjs-5535f.firebaseapp.com",
  projectId: "ecommercereactjs-5535f",
  storageBucket: "ecommercereactjs-5535f.appspot.com",
  messagingSenderId: "580719459652",
  appId: "1:580719459652:web:67bb3a8c358396b99fab11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app