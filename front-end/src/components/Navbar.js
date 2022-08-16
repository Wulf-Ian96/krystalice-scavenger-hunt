import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { useLocation } from "react-router-dom";

export default function Navbar({ setCurrUser, currUser, adminId }) {
  const [isMobile, setisMobile] = useState(window.innerWidth > 655);

  const updateMedia = () => {
    setisMobile(window.innerWidth < 655);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setCurrUser("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const location = useLocation();

  return (
    <div className="nav-container">
      <nav>
        <h5>Krystalice Clue Data</h5>
        <div className="nav-link">
          {location.pathname === "/" ? (
            <Link to="/admin">
              <p className="btn">Admin</p>
            </Link>
          ) : (
            <Link to="/">
              <p className="btn">Home</p>
            </Link>
          )}
          {currUser.uid === adminId ? (
            <button className="btn logout" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
