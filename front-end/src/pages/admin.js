import React, { useState } from "react";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

export default function Admin({ cluesData, database, collectionRef, storage }) {
  console.log(cluesData);

  // state for clue input information

  const [clueNum, setClueNum] = useState("");
  const [clueTxt, setClueTxt] = useState("");
  const [clueLink, setClueLink] = useState("");
  const [cluePassword, setCluePassword] = useState("");
  const [clueImage, setClueImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [progress, setProgress] = useState(0);

  // ----------------- Functions -------------------------
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setUploadImage(e.target.files[0]);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      clueNum: clueNum,
      clueTxt: clueTxt,
      clueLink: clueLink,
      cluePassword: cluePassword,
      clueImage: clueImage,
    };
    await addDoc(collection(database, "Clues"), payload);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `/clueImages/${uploadImage.name + v4()}`);
    uploadBytes(imageRef, uploadImage).then(() => {
      alert("Image uploaded");
      getDownloadURL(imageRef).then((url) => {
        setClueImage(url);
      });
    });
  };
  console.log(clueImage);
  const handleDelete = (id) => {
    const docRef = doc(database, "Clues", id);
    deleteDoc(docRef);
  };

  // ------------------ End of Functions ----------------------
  return (
    <div className="admin">
      <form className="admin-form">
        <label htmlFor="clueNum">clue Number:</label>
        <input
          type="number"
          name="clueNum"
          onChange={(e) => {
            setClueNum(e.target.value);
          }}
        />

        <label htmlFor="clueTxt">clue Text:</label>
        <textarea
          type="text"
          name="clueTxt"
          onChange={(e) => {
            setClueTxt(e.target.value);
          }}
        />

        <label htmlFor="clueLink">GoogleMaps Link:</label>
        <input
          type="text"
          name="clueLink"
          onChange={(e) => {
            setClueLink(e.target.value);
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
        <input type="file" onChange={handleChange} />
        <div className="btn-container">
          {" "}
          <button className="delete-btn" onClick={handleUpload}>
            Upload
          </button>
          <button className="delete-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <section className="clue-box-container">
        {cluesData.map((clue) => (
          <div className="clue-box">
            <p className="clue-info">
              {" "}
              <strong>Clue #:</strong> {clue.clueNum}
            </p>
            <p className="clue-info">
              {" "}
              <strong>Clue Text:</strong> {clue.clueTxt}
            </p>
            <p className="clue-info">
              <strong>Clue Link:</strong> {clue.clueLink}
            </p>
            <p className="clue-info">
              <strong>Clue password: </strong>
              {clue.cluePassword}
            </p>
            <p className="clue-info">
              <strong>Clue image: </strong>
              {clue.clueImage}
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
