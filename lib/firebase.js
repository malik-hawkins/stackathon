// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAO47oEdiVBX_Ol0x4RsScCt1HEQCWwJZo",
    authDomain: "activitytracker-wolves.firebaseapp.com",
    projectId: "activitytracker-wolves",
    storageBucket: "activitytracker-wolves.appspot.com",
    messagingSenderId: "667318633618",
    appId: "1:667318633618:web:c2801b3e76a98018abd24b",
    measurementId: "G-0QL48QXHZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
