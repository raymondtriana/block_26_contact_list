import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList";
function App() {
  const [count, setCount] = useState(0);
  const [selectedContactID, setSelectedContactID] = useState(null);
  return (
    <>
      {selectedContactID ? <div>Selected Contact View</div> : <ContactList setSelectedContactID={setSelectedContactID}/>}
    </>
  );
}

export default App;
