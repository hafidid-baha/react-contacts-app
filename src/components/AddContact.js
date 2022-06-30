import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uuid } from "uuidv4";

function AddContact({ addContactHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || name === "") {
      alert("please enter poth name and email");
      return;
    }
    addContactHandler({
      id: Math.floor(Math.random() * 1000000),
      name: name,
      email: email,
    });
    setName("");
    setEmail("");
    navigate("/contacts");
  };
  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
                id="email"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
