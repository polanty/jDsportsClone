// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import category from "../assets/products/categories";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-4sM-Wz4SAP3JFtAb-Y-rixIMJRjUAIc",
  authDomain: "jd-sport-clone.firebaseapp.com",
  projectId: "jd-sport-clone",
  storageBucket: "jd-sport-clone.appspot.com",
  messagingSenderId: "62799010057",
  appId: "1:62799010057:web:bca2ef5ca3a467677f1bd8",
  measurementId: "G-NGNG9DW3DE",
};

export const dataretriever = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/photos");

  return await data.json();
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const writeToDataBase = async () => {
  try {
    const docRef = await addDoc(collection(db, "products"), category);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// writeToDataBase();

export const getAllProductsFromCloud = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  let products = [];
  querySnapshot.docs.forEach((docSnapShot) =>
    products.push({ ...docSnapShot.data() })
  );

  return products;
};

//getAllProductsFromCloud().then((res) => console.log(res));
