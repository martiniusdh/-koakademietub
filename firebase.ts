
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "DIN-API-KEY",
  authDomain: "DITT-PROSJEKT.firebaseapp.com",
  projectId: "DITT-PROSJEKT",
  storageBucket: "DITT-PROSJEKT.appspot.com",
  messagingSenderId: "ID",
  appId: "APP-ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
