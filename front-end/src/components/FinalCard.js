import React, { useState } from "react";

import { finalClue } from "../clueData";
export default function FinalCard() {
  const [clueInput, setClueInput] = useState("");
  const handleNext = () => {
    if (clueInput === finalClue.cluePassword) {
      alert("Final answer completed! Hunt over!");
    }
  };

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
          {finalClue.clueNum}
        </h1>

        <p className="clue-text" style={{ textAlign: "center" }}>
          {finalClue.clueTxt}
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
