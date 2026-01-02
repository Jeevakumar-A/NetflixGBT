// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1l2A7cz5Q0-pHVDcXKJ97zvkXm2ku0tQ",
    authDomain: "netflixgpt-91bf8.firebaseapp.com",
    projectId: "netflixgpt-91bf8",
    storageBucket: "netflixgpt-91bf8.firebasestorage.app",
    messagingSenderId: "435910032079",
    appId: "1:435910032079:web:05cca2c34e84d5977b95ba",
    measurementId: "G-Y3HJ0GWQW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;