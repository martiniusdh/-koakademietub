import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALF7_i6p9B_ZSZwghKELc0MxFvclvJnRk",
  authDomain: "okonomiakademiet-f38e9.firebaseapp.com",
  projectId: "okonomiakademiet-f38e9",
  storageBucket: "okonomiakademiet-f38e9.firebasestorage.app",
  messagingSenderId: "501791489585",
  appId: "1:501791489585:web:d540585d078728c95c9f10",
  measurementId: "G-6PNR2VFGXR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
