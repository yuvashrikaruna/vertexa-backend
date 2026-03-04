import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGEyaoYXApXErPsF0AGl69ABl0BPp25gE",
  authDomain: "vertexa-6617a.firebaseapp.com",
  projectId: "vertexa-6617a",
  storageBucket: "vertexa-6617a.firebasestorage.app",
  messagingSenderId: "310141572517",
  appId: "1:310141572517:web:bca38a2c60ab9f9984844c",
  measurementId: "G-30W2WBH6LJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);