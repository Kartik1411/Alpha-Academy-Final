import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBMpe1WB5qTxvgusNskL9HAgQmnQZZsamA",
    authDomain: "react-firebase-cef59.firebaseapp.com",
    projectId: "react-firebase-cef59",
    storageBucket: "react-firebase-cef59.appspot.com",
    messagingSenderId: "97842983847",
    appId: "1:97842983847:web:2f193e26214ba77acc7c82"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

export {
    db, storage, firebase as default
}