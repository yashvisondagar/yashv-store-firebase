import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/Home"); 
      })
      .catch((error) => {
        setError(true); 
        setErrorMessage("Login failed. Please check your email and password.");
        console.error("Login Error:", error); 
      });
  };

  return (
    <div className="w-100 rounded bg-white border shadow p-4 d-flex justify-content-center">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        {error && <div className="text-danger">{errorMessage}</div>} {/* Render error message if error state is true */}
        <button type="submit" className="btn btn-success m-4">Login</button>
      </form>
    </div>
  );
};

export default Login;
