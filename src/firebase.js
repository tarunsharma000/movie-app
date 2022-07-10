// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD6hLrq252mypASWs6dd7NlE4FHg6jbiWw",
  authDomain: "movie-app-73ee2.firebaseapp.com",
  projectId: "movie-app-73ee2",
  storageBucket: "movie-app-73ee2.appspot.com",
  messagingSenderId: "851885575303",
  appId: "1:851885575303:web:6ee9cb2acdbfac982d7c22",
  measurementId: "G-1BKD38G9VY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };