import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import Admin from "./pages/admin";
import {
  app,
  storage,
  database,
  collectionRef,
  finalClueRef,
  q,
  finalClueData,
} from "./firebse";
import { onSnapshot } from "firebase/firestore";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/adminLogin";

export default function App() {
  const [cluesData, setCluesData] = useState([{ clueData: "", id: "" }]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setCluesData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  // login logic

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currUser, setCurrUser] = useState("");
  const adminId = "pKVgfKpruBeNlAVc0umm8xDyAU33";
  console.log(cluesData);
  return (
    <BrowserRouter>
      <Navbar setCurrUser={setCurrUser} currUser={currUser} adminId={adminId} />
      <Routes>
        <Route path="/" element={<Home cluesData={cluesData} />} />
        <Route
          path="/admin"
          element={
            currUser.uid === adminId ? (
              <Admin
                storage={storage}
                cluesData={cluesData}
                database={database}
                collectionRef={collectionRef}
              />
            ) : (
              <AdminLogin
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                currUser={currUser}
                setCurrUser={setCurrUser}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
