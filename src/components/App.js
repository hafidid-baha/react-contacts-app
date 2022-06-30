import React, { useState, useEffect } from "react";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./ContactDetails";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (Contact) => {
    setContacts([...contacts, Contact]);
  };

  const deleteContactHandle = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
    if (newContactList.length > 0) {
      setContacts(newContactList);
    } else {
      setContacts([]);
    }
  };

  // save contacts to local storage each time contacts array changes
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  // retrieve saved contacts from local storage
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    setContacts(savedContacts);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={<AddContact addContactHandler={addContactHandler} />}
            ></Route>
            <Route
              exact
              path="/contacts"
              element={
                <ContactList
                  deleteContactHandle={deleteContactHandle}
                  contacts={contacts}
                />
              }
            ></Route>
            {/* <Route exact path="/contact/:id" component={ContactDetails}></Route> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
