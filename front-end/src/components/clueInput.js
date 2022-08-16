import React, { useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";
export default function ClueInput({
  isActive,
  storage,
  database,
  toggleHidden,
  cluesData,
}) {
  const [clueNum, setClueNum] = useState("");
  const [clueTxt, setClueTxt] = useState("");
  const [clueLink, setClueLink] = useState("");
  const [cluePassword, setCluePassword] = useState("");
  const [clueImage, setClueImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);

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

  const handleDelete = (id, clueImage) => {
    const docRef = doc(database, "Clues", id);
    const imgRef = ref(storage, clueImage);
    deleteDoc(docRef);
    deleteObject(imgRef);
  };

  return (
    <div className={isActive ? "admin" : "hidden"}>
      <form className="admin-form">
        <button className="btn" onClick={toggleHidden}>
          Show Final Clue
        </button>
        <label htmlFor="clueNum">Clue Number:</label>
        <input
          type="number"
          name="clueNum"
          onChange={(e) => {
            setClueNum(e.target.value);
          }}
        />

        <label htmlFor="clueTxt">Clue Text:</label>
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

        <label htmlFor="cluePassword">Clue password:</label>
        <input
          type="text"
          name="cluePassword"
          onChange={(e) => {
            setCluePassword(e.target.value);
          }}
        />
        <div className="upload-container">
          {" "}
          <input type="file" onChange={handleChange} />
          <button htmlFor="file" className="delete-btn" onClick={handleUpload}>
            Upload
          </button>
        </div>

        <div className="btn-container">
          {" "}
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
              <strong>Google-Maps Link:</strong> {clue.clueLink}
            </p>
            <p className="clue-info">
              <strong>Clue password: </strong>
              {clue.cluePassword}
            </p>
            <p className="clue-info">
              <strong>Clue image: </strong>
              <img className="admin-clue-img" src={clue.clueImage} />
            </p>
            <button
              className="delete-btn"
              onClick={() => {
                handleDelete(clue.id, clue.clueImage);
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
