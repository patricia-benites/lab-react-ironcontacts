import "./App.css";

const contacts = require("./contacts.json").slice(0, 5);

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
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
