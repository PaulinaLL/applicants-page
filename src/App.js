import "./App.css";
import contacts from "./data/db.json";
// import ContactsList from "./components/ContactsList/index";
import Header from "./components/Header/index";
import Dashboard from "./components/Dashboard/index";

function App() {
  return (
    <div className="App">
      <Header contacts={contacts} />
      <Dashboard contacts={contacts} />
      <ul>
        <li>AGB - </li>
        <li> Datenschutz - </li>
        <li> Impressum</li>
      </ul>
      {/* 
      <ContactsList contacts={contacts} /> */}
    </div>
  );
}

export default App;
