import { useState } from "react";
import { useEffect } from "react";
import "../styles/SelectedContact.css"
export default function SelectedContact({
  selectedContactID,
  setSelectedContactID,
}) {
  let [contact, setContact] = useState({});
  useEffect(() => {
    async function fetchContacts() {
      try {
        let contactOBJ = await fetch(
          ` https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`
        );
        contactOBJ = await contactOBJ.json();
        setContact(contactOBJ);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);
  if (contact && contact.address && contact.company) {
      return (
        <>
        <div id="contact-details">
          <p>id: {contact.id}</p>
          <p>name: {contact.name}</p>
          <p>username: {contact.username}</p>
          <p>email: {contact.email}</p>
          <ul>
          <p>address</p>
            {printObject(contact.address)}
            <ul>
            <p>geo location</p>
                {printObject(contact.address.geo)}
            </ul>
          </ul>
          <p>phone: {contact.phone}</p>
          <p>website: {contact.website}</p>
            <ul>
                <p>company</p>
                {printObject(contact.company)}
 
            </ul>
        </div>
          <button
            onClick={() => {
              setSelectedContactID(null);
            }}
          >
            RETURN
          </button>
        </>
      );
  }
}

function printObject(obj){
    return <>
    {Object.keys(obj).map((item)=>{
        if(typeof obj[item]!=="object"){
            return <li key={obj[item]}>{obj[item]}</li>
        }
    })}
    </>
}