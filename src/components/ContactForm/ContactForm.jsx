import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both name and number.');
      return;  
    }

    const newContact = {
      id: `id-${Date.now()}`,
      name,
      number,
    };

    onAddContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.name} >
        Name:
        <input className={styles.text} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className={styles.number} >
        Number:
        <input className={styles.text} type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
