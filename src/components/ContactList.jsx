import React, { useEffect } from "react";
import { useState } from "react";
import ContactRow from "./ContactRow";
import "../styles/ContactList.css"
const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
export default function ContactList({setSelectedContactID}) {
  const [contacts, setContacts] = useState(dummyContacts);
  useEffect(() => {
    async function fetchContacts() {
      try {
        // your fetch logic will go here
        let items = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        items = await items.json();
        setContacts(items);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts()
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="name-header">Name</td>
          <td id="email-header">Email</td>
          <td id="phone-header">Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} setSelectedContactID={setSelectedContactID}/>;
        })}
      </tbody>
    </table>
  );
}
