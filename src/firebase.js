// Import the functions you need from the SDKs you need
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCOIVMfvsVLikcJo5UonhPdnpiODVS-9-4",
  authDomain: "disney-fd283.firebaseapp.com",
  projectId: "disney-fd283",
  storageBucket: "disney-fd283.appspot.com",
  messagingSenderId: "895350580797",
  appId: "1:895350580797:web:3f8ee37ee123325d71ac54"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;