import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjc_Ng5GyKf4m5OkIlb_A4Ta2f6DcSAhg",

  authDomain: "scavenger-hunt-b242d.firebaseapp.com",

  projectId: "scavenger-hunt-b242d",

  storageBucket: "scavenger-hunt-b242d.appspot.com",

  messagingSenderId: "641028214766",

  appId: "1:641028214766:web:fa574a5170ac1d664e08ff",

  measurementId: "G-286E4NLHHC",
};
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const database = getFirestore();

export const collectionRef = collection(database, "Clues");
export const finalClueRef = collection(database, "Final Clue");

// querys / ordering
export const q = query(collectionRef, orderBy("clueNum"));
export const finalClueData = query(finalClueRef);
