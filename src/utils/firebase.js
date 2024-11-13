// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Pq5JuKOkhNhroL1qeBSX4pqJajdkzKM",
  authDomain: "netflixclone-856b2.firebaseapp.com",
  projectId: "netflixclone-856b2",
  storageBucket: "netflixclone-856b2.firebasestorage.app",
  messagingSenderId: "363503693852",
  appId: "1:363503693852:web:3ee9db775836c9b250afd9",
  measurementId: "G-5YTL4TH552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();