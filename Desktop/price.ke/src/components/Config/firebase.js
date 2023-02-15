// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIBRwdrIztjsOsSgwryiDT_v5q5fVSEVg",
  authDomain: "priceke-b110c.firebaseapp.com",
  databaseURL: "https://priceke-b110c-default-rtdb.firebaseio.com",
  projectId: "priceke-b110c",
  storageBucket: "priceke-b110c.appspot.com",
  messagingSenderId: "917469743472",
  appId: "1:917469743472:web:f3799d18a3804f172a27b5",
  measurementId: "G-PDWMZ8MQZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = firebase.auth();

export { auth };
export default firebase;