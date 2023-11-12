import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
function App() {
  const [count, setCount] = useState(0);
  const [selectedContactID, setSelectedContactID] = useState(null);
  return (
    <>
      {selectedContactID ? <SelectedContact selectedContactID={selectedContactID} setSelectedContactID={setSelectedContactID}/> : <ContactList setSelectedContactID={setSelectedContactID}/>}
    </>
  );
}

export default App;
