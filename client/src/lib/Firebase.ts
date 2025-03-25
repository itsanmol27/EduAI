// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoGbU1q-Imdg2H7moRDm6wyJIsV28xUxA",
  authDomain: "social-media-4b9da.firebaseapp.com",
  projectId: "social-media-4b9da",
  storageBucket: "social-media-4b9da.appspot.com",
  messagingSenderId: "516107498718",
  appId: "1:516107498718:web:b982014a2cdec9fb917e4f",
  measurementId: "G-QYCR71N2N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;