import React from "react";
import Contact from "./Contact";

function ContactList({ contacts, deleteContactHandle }) {
  const list = contacts.map((contact) => {
    return (
      <Contact
        key={contact.id}
        deleteContactHandle={deleteContactHandle}
        contact={contact}
      />
    );
  });
  return (
    <div className="container mt-2">
      <div>{list}</div>
    </div>
  );
}

export default ContactList;
