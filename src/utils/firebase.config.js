// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiZkg7odt3RwmixHDR5E_fh6GXVgDCfd8",
  authDomain: "redux-task-management.firebaseapp.com",
  projectId: "redux-task-management",
  storageBucket: "redux-task-management.appspot.com",
  messagingSenderId: "437718694923",
  appId: "1:437718694923:web:f7a910ae5c69eae293db0e",
  measurementId: "G-KWVX47Y7Z1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
