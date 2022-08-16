import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function AdminLogin({
  setEmail,
  email,
  password,
  setPassword,
  currUser,
  setCurrUser,
}) {
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setCurrUser(cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log("email: " + email, "password: " + password);
  console.log(currUser);
  return (
    <div className="admin admin-login">
      <form onSubmit={handleLogin} className="login-form admin-form">
        <label htmlFor="email">Email:</label>
        <input
          className="login-input"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          className="login-input"
          name="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="submit-btn login-btn">Login</button>
      </form>
      <p>forgot password?</p>
    </div>
  );
}
