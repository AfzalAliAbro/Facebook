import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_Uu7KgHM-_CxDKX4fmyRIsRguP5qcBoo",
  authDomain: "clone-facebook-8f653.firebaseapp.com",
  databaseURL: "https://clone-facebook-8f653-default-rtdb.firebaseio.com",
  projectId: "clone-facebook-8f653",
  storageBucket: "clone-facebook-8f653.appspot.com",
  messagingSenderId: "133997608300",
  appId: "1:133997608300:web:4a1673b8dd2318e2c64749",
  measurementId: "G-8EFSF460JY"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
