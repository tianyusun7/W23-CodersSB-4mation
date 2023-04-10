import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBJ4NdrP0w9Pw8jc1i8jSxn4DDFfFzCZvY",
    authDomain: "mation-fcbb8.firebaseapp.com",
    projectId: "mation-fcbb8",
    storageBucket: "mation-fcbb8.appspot.com",
    messagingSenderId: "908210303130",
    appId: "1:908210303130:web:ba3f2fa32dea5f7edaaf23",
    measurementId: "G-DE06Z800RF"
  };

app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
