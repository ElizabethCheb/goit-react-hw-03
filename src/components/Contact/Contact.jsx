import styles from './Contact.module.css';
const Contact = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.div}>
        <p className={styles.name}>Name: {contact.name}</p>
        <p className={styles.number}>Number: {contact.number}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
export default Contact;