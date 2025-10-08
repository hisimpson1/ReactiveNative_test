import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

//firebase에서 가져온 정보
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxx",
  authDomain: "xxxxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxxx-xxxxx-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "xxxxxxxx-xxxxxxx",
  storageBucket: "xxxxxxxxxx-xxxxxx.firebasestorage.app",
  messagingSenderId: "xxxxxxxx",
  appId: "1:xxxxxxx:web:eedxxxxxxxxxxx",
  measurementId: "X-1xxxxxxxxx"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()