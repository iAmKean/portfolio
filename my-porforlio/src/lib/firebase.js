import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDp5CllsguF5MVFRAGlrpxLUqoPpkGWv2M",
  authDomain: "my-portfolio-db-a948d.firebaseapp.com",
  databaseURL: "https://my-portfolio-db-a948d.firebaseio.com",
  projectId: "my-portfolio-db-a948d",
  storageBucket: "my-portfolio-db-a948d.appspot.com",
  messagingSenderId: "43372862185",
  appId: "1:43372862185:web:757c9dc20a16eac9b9ee78",
  measurementId: "G-3L6N507NGX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users").doc("q2YEnXADuqmNI66R7BW1"); //.doc(the document in the user table)

export { db, auth, usersCollection };

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2020, 12, 14);
//     }
//   }
// }
