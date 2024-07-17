// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "resume-builder-1a702.firebaseapp.com",
  projectId: "resume-builder-1a702",
  storageBucket: "resume-builder-1a702.appspot.com",
  messagingSenderId: "453078692776",
  appId: "1:453078692776:web:accd3d06672289f143639d",
  measurementId: "G-6EVJMB4N23",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);