// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mkt.firebaseapp.com",
  projectId: "estate-mkt",
  storageBucket: "estate-mkt.appspot.com",
  messagingSenderId: "829284343615",
  appId: "1:829284343615:web:5181527cc13ef51246fd8a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
