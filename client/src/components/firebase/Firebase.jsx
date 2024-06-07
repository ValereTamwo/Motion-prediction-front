// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzJyjAfpAAaj-D7b35T-OQxf0y1bKPIPQ",
  authDomain: "motion-pred.firebaseapp.com",
  projectId: "motion-pred",
  storageBucket: "motion-pred.appspot.com",
  messagingSenderId: "813979079926",
  appId: "1:813979079926:web:5b286e12a8652bdd6f08d7",
  measurementId: "G-4SM3THE97V"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export {app};