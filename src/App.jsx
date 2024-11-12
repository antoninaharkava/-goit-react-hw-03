import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const contactsFromLs = JSON.parse(localStorage.getItem("contacts"));
      if (contactsFromLs) {
        return contactsFromLs;
      }
    } catch (error) {
      console.log(error);
    }

    return [];
  });
  const [searchKey, setSearchKey] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchKey.toLowerCase());
  });

  function getContact(newContact) {
    setContacts((currentContacts) => {
      return [...currentContacts, newContact];
    });
  }

  function deleteContact(contactId) {
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => {
        return contact.id !== contactId;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm getContact={getContact} />
      <SearchBox searchKey={searchKey} setSearchKey={setSearchKey} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;