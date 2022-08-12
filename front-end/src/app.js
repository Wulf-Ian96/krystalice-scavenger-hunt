import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import Admin from "./pages/admin";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBjc_Ng5GyKf4m5OkIlb_A4Ta2f6DcSAhg",

    authDomain: "scavenger-hunt-b242d.firebaseapp.com",

    projectId: "scavenger-hunt-b242d",

    storageBucket: "scavenger-hunt-b242d.appspot.com",

    messagingSenderId: "641028214766",

    appId: "1:641028214766:web:fa574a5170ac1d664e08ff",

    measurementId: "G-286E4NLHHC",
  };

  // initialize firebase

  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);

  const database = getFirestore();

  const collectionRef = collection(database, "Clues");

  // querys / ordering
  const q = query(collectionRef, orderBy("clueNum"));

  const [cluesData, setCluesData] = useState([{ clueData: "", id: "" }]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setCluesData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home cluesData={cluesData} />} />

        <Route
          path="/admin"
          element={
            <Admin
              storage={storage}
              cluesData={cluesData}
              database={database}
              collectionRef={collectionRef}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
