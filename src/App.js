import "./App.css";
import { useState } from "react";

const initialContacts = require("./contacts.json").slice(0, 5);
const remainingContacts = require("./contacts.json").slice(5);



function App() {
  const [contacts, setContacts] = useState(initialContacts)

  const addContact = () => {
      setContacts((contacts) => {
      return [
        ...contacts,
        remainingContacts[Math.floor(Math.random()*remainingContacts.length)]
      ]
    })
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick ={addContact} >Add Random Contact</button>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((contact) => (
          <tr>
            <td>
              <img width="100px" src={contact.pictureUrl} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "trophy" : " "}</td>
            <td>{contact.wonEmmy ? "trophy" : " "}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
