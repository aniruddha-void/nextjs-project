"use client";
import React, { useState } from "react";
import "../login/Login.css";
import { useRouter } from "next/navigation";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    
    if (email === email && password === password) {
      alert("Login successful!");
      router.push("/");
    } else {
      alert("Invalid login");
    }
  };

  const handleSignup = () => {
   
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    alert("Signup successful!");
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Create Account</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleSignup}>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">Forgot your password?</a>
          <button onClick={handleLogin}>Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your info</p>
            <button className="ani" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start your journey with us</p>
            <button className="ani" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
