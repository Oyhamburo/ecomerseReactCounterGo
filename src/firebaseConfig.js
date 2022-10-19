// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf8RFakzQuMaKCgpEc7NWp2yEt296UbIE",
  authDomain: "ecommerce-reactjs-a586d.firebaseapp.com",
  projectId: "ecommerce-reactjs-a586d",
  storageBucket: "ecommerce-reactjs-a586d.appspot.com",
  messagingSenderId: "75345578379",
  appId: "1:75345578379:web:24fbc53b3abbd1f59ec78e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db