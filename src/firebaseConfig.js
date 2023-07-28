import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsOYDExcK9H9GzWlxM_JRLTArqYhlCEHo",
  authDomain: "comision-55185.firebaseapp.com",
  projectId: "comision-55185",
  storageBucket: "comision-55185.appspot.com",
  messagingSenderId: "564892836515",
  appId: "1:564892836515:web:5f15679e45aa1499b4d516"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)