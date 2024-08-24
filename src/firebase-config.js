
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE3QTUsKfKuWlYDQ_SD6WGI7G7ruf-j4s",
  authDomain: "osdiadefestavacation.firebaseapp.com",
  projectId: "osdiadefestavacation",
  storageBucket: "osdiadefestavacation.appspot.com",
  messagingSenderId: "990134976713",
  appId: "1:990134976713:web:b7cabfb0932fd45e82cd18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);