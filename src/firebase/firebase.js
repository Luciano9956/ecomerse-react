
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHtKlozuFOy-TPCCVm0Z3NvcOGvxl6lPw",
  authDomain: "proyectoreact-4b322.firebaseapp.com",
  projectId: "proyectoreact-4b322",
  storageBucket: "proyectoreact-4b322.appspot.com",
  messagingSenderId: "649355691283",
  appId: "1:649355691283:web:5bac57334df1594063c6e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);