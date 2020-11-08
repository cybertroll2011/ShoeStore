import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCEP_w0D-eK0sSmcq_oJfUE1Nm_svXs508",
    authDomain: "shoe-store-791ef.firebaseapp.com",
    databaseURL: "https://shoe-store-791ef.firebaseio.com",
    projectId: "shoe-store-791ef",
    storageBucket: "shoe-store-791ef.appspot.com",
    messagingSenderId: "228109450305",
    appId: "1:228109450305:web:c01429eff90128a1e35ac0",
    measurementId: "G-9DYDQJRPTW"
};

export const initializeFirebaseApp = () => firebase.initializeApp(firebaseConfig);

export const getFirebaseDatabase = () => firebase.database();