// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIYseMDPTM9ZVuCfJ6yAsAcE1TRxy17KE",
  authDomain: "auth-email-password-f453e.firebaseapp.com",
  projectId: "auth-email-password-f453e",
  storageBucket: "auth-email-password-f453e.appspot.com",
  messagingSenderId: "692311182932",
  appId: "1:692311182932:web:b5549a0491fa7ae86667c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;