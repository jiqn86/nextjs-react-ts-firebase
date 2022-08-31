// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWX-jmUm-6zCwxDs72wObLKN3ny1ZK5Vc",
  authDomain: "jiqnz-tweet.firebaseapp.com",
  projectId: "jiqnz-tweet",
  storageBucket: "jiqnz-tweet.appspot.com",
  messagingSenderId: "659264824174",
  appId: "1:659264824174:web:ef118276221dd28f2a177f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();