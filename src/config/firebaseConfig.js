import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCuAl68Fz_ppN9JlcY6UT6OyxNVpPBwVqU",
  authDomain: "task-9733a.firebaseapp.com",
  databaseURL: "https://task-9733a-default-rtdb.firebaseio.com",
  projectId: "task-9733a",
  storageBucket: "task-9733a.appspot.com",
  messagingSenderId: "815281447380",
  appId: "1:815281447380:web:2c06d25bc0a6a0080ab641"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => console.log(error.message))
}

export const database = getFirestore(app)