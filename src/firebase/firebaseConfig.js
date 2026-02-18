import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJGT7OmB3usyMCR1HfDC_rnJ4TYWDOfp4",
  authDomain: "workforcehub-1dc23.firebaseapp.com",
  projectId: "workforcehub-1dc23",
  storageBucket: "workforcehub-1dc23.firebasestorage.app",
  messagingSenderId: "211390548740",
  appId: "1:211390548740:web:8740ea5a36aae5df315e51",
  measurementId: "G-Q6ZLN2DC1B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
