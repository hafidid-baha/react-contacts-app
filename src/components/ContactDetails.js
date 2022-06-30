import React from "react";

const ContactDetails = (props) => {
  console.log(props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://randomuser.me/api/portraits/men/12.jpg"
        className="card-img-top"
      />

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
