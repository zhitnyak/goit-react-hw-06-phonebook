import "./App.css";
import Form from "./components/Forma/Forma";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./redux/store";

function App() {
  return (
    <PersistGate loading={null} persistor={persistedStore}>
      <section className="wrapper">
        <h1 className="title">Phonebook</h1>
        <Form />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </PersistGate>
  );
}

export default App;
