// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtqVt6tHOtVLt4EkecASuwV-HqmRsnk_w",
  authDomain: "todo-app-fa59a.firebaseapp.com",
  projectId: "todo-app-fa59a",
  storageBucket: "todo-app-fa59a.appspot.com",
  messagingSenderId: "704237256129",
  appId: "1:704237256129:web:15496f696b349f5f314340",
  measurementId: "G-PW22N4T6GY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
