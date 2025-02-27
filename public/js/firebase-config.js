import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA9Db_Wes7KI7QJW9VBjmkNtV9zc3-l_Vs",
    authDomain: "whowasit-fdb10.firebaseapp.com",
    projectId: "whowasit-fdb10",
    storageBucket: "whowasit-fdb10.firebasestorage.app",
    messagingSenderId: "470099540245",
    appId: "1:470099540245:web:ee75993b12f28a480e911c",
    measurementId: "G-7LY3XP477R"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
