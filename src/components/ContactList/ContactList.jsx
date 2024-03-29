import Contact from '../Contact/Contact';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </div>
  );
};
export default ContactList;