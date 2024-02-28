import styles from './Contact.module.css';
const Contact = ({ contact }) => {
    return (
      <div className={styles.mainDiv}>
      <div className={styles.div}>
        <p className={styles.name} >Name: {contact.name}</p>
        <p className={styles.number} >Number: {contact.number}</p>
      </div>
      </div>
    );
  };
  
  export default Contact;