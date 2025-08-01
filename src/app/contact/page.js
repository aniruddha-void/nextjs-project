"use client";

import "./contact.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlesubmit = (e) => {
    if (name && message) {
      e.preventDefault();
      setMessage("");
      setName("");
      return setError("message submitted");
    } else {
      return setError("name is invalid");
    }
  };

  return (
    <div>
      <img
        className="back"
        src="https://th.bing.com/th/id/R.757dcae10509bdbcbbbe7231f9cec8ab?rik=7RO2A7Du7jYBww&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fleft-arrow-png-left-icon-1600.png&ehk=nQr%2fWbRJHtKEaV53ijq71OpNptgpG4FZxnChrIO0fBI%3d&risl=&pid=ImgRaw&r=0"
        alt="Go back"
        onClick={() => router.push("/")}
      />

      <div className="container">
        {error === "message submitted" ? (
          <p>
            message submitted
            <span className="time">
              {setTimeout(() => {
                router.push("/contact");
              }, 2000)}
            </span>
          </p>
        ) : (
          <div className="main">
            <h2 className="contact">Contact Us</h2>
            <br />
            <p>Name</p>
            <input
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <p>Message</p>
            <input
              className="message"
              type="text"
              placeholder=""
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <br />
            <center>
              <button className="btn" onClick={handlesubmit}>
                Submit
              </button>
            </center>
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
