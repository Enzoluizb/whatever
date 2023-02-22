import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChWVLdBlEAzw-0naXFa-lsodwjDvhBKmQ",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);