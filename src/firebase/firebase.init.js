// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpodX7_byHYWIrP8D6JMJPQvuGQTuOU74",
  authDomain: "assignment-10-92bc6.firebaseapp.com",
  projectId: "assignment-10-92bc6",
  storageBucket: "assignment-10-92bc6.firebasestorage.app",
  messagingSenderId: "9218143788",
  appId: "1:9218143788:web:e816bd770ee5b761484389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);