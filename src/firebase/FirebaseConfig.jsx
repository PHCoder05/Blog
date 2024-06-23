// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKKivIx_LmMyFu3htDEFw9RX-PhjSOciY",
  authDomain: "my-blog-60170.firebaseapp.com",
  projectId: "my-blog-60170",
  storageBucket: "my-blog-60170.appspot.com",
  messagingSenderId: "193357911555",
  appId: "1:193357911555:web:43f4f71812b042cb602036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage =getStorage(app);

export {fireDb , auth, storage}