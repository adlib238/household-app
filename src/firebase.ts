// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjfQMq3T6ngeQgwqTzfOlNNIkQb83aAsU",
  authDomain: "householdtypescript-add7b.firebaseapp.com",
  projectId: "householdtypescript-add7b",
  storageBucket: "householdtypescript-add7b.appspot.com",
  messagingSenderId: "919856151602",
  appId: "1:919856151602:web:900fcf0819b1da2580902b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
