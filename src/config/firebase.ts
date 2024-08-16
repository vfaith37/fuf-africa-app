import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_jNKX8Cyra8xepqOgWhO45JQWJtBW5e4",
  authDomain: "backend-14d9e.firebaseapp.com",
  projectId: "backend-14d9e",
  storageBucket: "backend-14d9e.appspot.com",
  messagingSenderId: "612278107677",
  appId: "1:612278107677:web:84b36ba4c79da4708b90f4",
  measurementId: "G-ME8TPVVN9T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);