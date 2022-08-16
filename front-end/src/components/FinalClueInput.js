import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { finalClueData } from "../firebse";
import { database } from "../firebse";

export default function FinalClueInput({ toggleHidden, finalActive }) {
  const [clueTxt, setClueTxt] = useState("");
  const [cluePassword, setCluePassword] = useState("");
  const [finalClue, setFinalClue] = useState([{ clueData: "", id: "" }]);

  console.log(database);
  useEffect(() => {
    onSnapshot(finalClueData, (snapshot) => {
      setFinalClue(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      clueTxt: clueTxt,
      cluePassword: cluePassword,
    };
    await addDoc(collection(database, "Final Clue"), payload);
  };

  const handleDelete = (id) => {
    const docRef = doc(database, "Final Clue", id);

    deleteDoc(docRef);
  };

  return (
    <div className={finalActive ? "admin" : "hidden"}>
      <form className="admin-form">
        <button className="submit-btn" onClick={toggleHidden}>
          Back to clues
        </button>
        <h3 className="title-final">Final Clue</h3>
        <label htmlFor="clueTxt">clue Text:</label>
        <textarea
          type="text"
          name="clueTxt"
          onChange={(e) => {
            setClueTxt(e.target.value);
          }}
        />

        <label htmlFor="cluePassword">clue password:</label>
        <input
          type="text"
          name="cluePassword"
          onChange={(e) => {
            setCluePassword(e.target.value);
          }}
        />

        <div className="btn-container">
          {" "}
          <button className="delete-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <section className="clue-box-container">
        {finalClue.map((clue) => (
          <div key={clue.id} className="clue-box">
            <p className="clue-info">
              {" "}
              <strong>Clue Text:</strong> {clue.clueTxt}
            </p>

            <p className="clue-info">
              <strong>Clue password: </strong>
              {clue.cluePassword}
            </p>

            <button
              className="delete-btn"
              onClick={() => {
                handleDelete(clue.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
