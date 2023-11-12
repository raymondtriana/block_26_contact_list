export default function ContactRow({setSelectedContactID, contact }) {
    return (
      <tr
      onClick={()=>{
        setSelectedContactID(contact.id);
      }}>
        <td className="name-column">{contact.name}</td>
        <td className="email-column">{contact.email}</td>
        <td className="phone-column">{contact.phone}</td>
      </tr>
    );
  }