import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_ER5j7gHz8akeDLwFNuXZCtZaYAInz0Y",
    authDomain: "hench-printworks.firebaseapp.com",
    databaseURL: "https://hench-printworks.firebaseio.com",
    projectId: "hench-printworks",
    storageBucket: "hench-printworks.appspot.com",
    messagingSenderId: "436711454618",
    appId: "1:436711454618:web:fd0beeeb9d5f26d557ec23",
    measurementId: "G-L66B70GBZ1"
});

const db = fireBaseApp.firestore();

const auth = firebase.auth();

export { db, auth };