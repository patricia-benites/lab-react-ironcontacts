import "./App.css";
import { useState } from "react";

const initialContacts = require("./contacts.json").slice(0, 5);
const remainingContacts = require("./contacts.json").slice(5);

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = () => {
    setContacts((contacts) => {
      return [
        ...contacts,
        remainingContacts[Math.floor(Math.random() * remainingContacts.length)],
      ];
    });
  };

  const sortPopularity = () => {
    setContacts((contacts) => {
      return [...contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      });
    });
  };

  const sortName = () => {
    setContacts((contacts) => {
      return [...contacts].sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
    });
  };

  const deleteContact = (id) => {
    setContacts((previousContacts) => {
      return previousContacts.filter((contact) => {
        return contact.id !== id;
      })
    });
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons-div">
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      </div>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact) => (
          <tr>
            <td>
              <img width="100px" src={contact.pictureUrl} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "🏆" : " "}</td>
            <td>{contact.wonEmmy ? "🌟" : " "}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
