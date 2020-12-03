import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBuOiZH2KXW3bLFg0NxaAoa34aMwgSjILs",
    authDomain: "auth-7802a.firebaseapp.com",
    databaseURL: "https://auth-7802a.firebaseio.com",
    projectId: "auth-7802a",
    storageBucket: "auth-7802a.appspot.com",
    messagingSenderId: "228205630630",
    appId: "1:228205630630:web:dba0ea94da734cbc625067",
    measurementId: "G-60HCDZF8VQ"
});

export const auth = app.auth();
export default app;
