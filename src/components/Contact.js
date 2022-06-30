import React from "react";
import { Link } from "react-router-dom";

function Contact(props) {
  const deleteContact = (e) => {
    e.preventDefault();
    props.deleteContactHandle(props.contact.id);
  };
  return (
    <div key={props.contact.id} className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <Link
          to={{
            pathname: `/contact/${props.contact.id}`,
            state: { contact: props.contact },
          }}
        >
          <h5 className="card-title">{props.contact.name}</h5>
          <p className="card-text">{props.contact.email}</p>
        </Link>
        <a href="#" className="btn btn-sm btn-danger" onClick={deleteContact}>
          Delete
        </a>
      </div>
    </div>
  );
}

export default Contact;
