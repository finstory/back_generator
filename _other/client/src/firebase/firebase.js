// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrm9939-hEod1WBCHE03gB9COkndfUE44",
  authDomain: "drives-634cf.firebaseapp.com",
  databaseURL: "https://drives-634cf-default-rtdb.firebaseio.com",
  projectId: "drives-634cf",
  storageBucket: "drives-634cf.appspot.com",
  messagingSenderId: "966859765852",
  appId: "1:966859765852:web:d00574e2000a23e2744e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
