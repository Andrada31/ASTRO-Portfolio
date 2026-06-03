import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCitwP5Y1R9vOgwd9auBVQ3kbehV9ZGq-Y",
  authDomain: "astro-portfolio-88ff5.firebaseapp.com",
  projectId: "astro-portfolio-88ff5",
  storageBucket: "astro-portfolio-88ff5.firebasestorage.app",
  messagingSenderId: "501402397957",
  appId: "1:501402397957:web:d291fb95f6d1d3c1ac1b6c",
  measurementId: "G-5N8H6BE6QV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCitwP5Y1R9vOgwd9auBVQ3kbehV9ZGq-Y",
//   authDomain: "astro-portfolio-88ff5.firebaseapp.com",
//   projectId: "astro-portfolio-88ff5",
//   storageBucket: "astro-portfolio-88ff5.firebasestorage.app",
//   messagingSenderId: "501402397957",
//   appId: "1:501402397957:web:d291fb95f6d1d3c1ac1b6c",
//   measurementId: "G-5N8H6BE6QV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);