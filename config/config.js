// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhZtxoWz7CjV9b7LfwDI9H2wUVtM9oLA",
  authDomain: "yellowcomic-6cc57.firebaseapp.com",
  databaseURL: "https://yellowcomic-6cc57-default-rtdb.firebaseio.com",
  projectId: "yellowcomic-6cc57",
  storageBucket: "yellowcomic-6cc57.firebasestorage.app",
  messagingSenderId: "795444809503",
  appId: "1:795444809503:web:9d0b6c45acc839deafaa2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;