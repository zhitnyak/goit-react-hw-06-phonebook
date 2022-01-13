import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/Forma/Forma";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (localContacts) {
      setContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    let unicName = contacts.find((contact) => contact.name === name);

    if (unicName) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts((prevState) => [
        { id: nanoid(), name, number },
        ...prevState,
      ]);
    }
  };

  return (
    <>
      <section className="wrapper">
        <h1 className="title">Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </>
  );
}

export default App;
