import React, { useState, useEffect } from "react";
import { finalClueData } from "../firebse";
import { onSnapshot } from "firebase/firestore";

export default function FinalCard() {
  const [clueInput, setClueInput] = useState("");
  const [finalClue, setFinalClue] = useState([{ FinalClue: "", id: "" }]);

  const handleNext = () => {
    if (clueInput === finalClue[0].password) {
      alert("Final answer completed! Hunt over!");
    }
  };
  console.log(finalClue);

  useEffect(() => {
    onSnapshot(finalClueData, (snapshot) => {
      setFinalClue(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="card-container">
      <div
        className="clue-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <h1 className="title" style={{ marginTop: "-50px" }}>
          Final Clue
        </h1>

        <p className="clue-text" style={{ textAlign: "center" }}>
          {finalClue[0].Text}
        </p>

        <input
          className="clue-input"
          onChange={(e) => setClueInput(e.target.value)}
          value={clueInput}
        ></input>
        <button className="submit-btn" onClick={handleNext}>
          Submit
        </button>
      </div>
    </div>
  );
}
