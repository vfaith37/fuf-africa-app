import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_jNKX8Cyra8xepqOgWhO45JQWJtBW5e4",
  authDomain: "backend-14d9e.firebaseapp.com",
  projectId: "backend-14d9e",
  storageBucket: "backend-14d9e.appspot.com",
  messagingSenderId: "612278107677",
  appId: "1:612278107677:web:84b36ba4c79da4708b90f4",
  measurementId: "G-ME8TPVVN9T",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
