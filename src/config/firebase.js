
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBMFE6e9bp0OfMs2ffId754ue9PgHny8nQ",
  authDomain: "tiktok-clone-ebac-27198.firebaseapp.com",
  projectId: "tiktok-clone-ebac-27198",
  storageBucket: "tiktok-clone-ebac-27198.appspot.com",
  messagingSenderId: "606073684495",
  appId: "1:606073684495:web:66b36e58b220fcc326d97a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export default db;