import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name cannot be more than 50 characters'),
      number: Yup.string().required('Number is required').min(3, 'Number must be at least 3 characters').max(50, 'Number cannot be more than 50 characters'),
    }),
    onSubmit: (values) => {
      const newContact = {
        id: `id-${Date.now()}`,
        name: values.name,
        number: values.number,
      };
      onAddContact(newContact);
      formik.resetForm();
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label className={styles.name}>
        Name:
        <input className={styles.text} type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}
      </label>
      <label className={styles.number}>
        Number:
        <input className={styles.text} type="text" name="number" value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.number && formik.errors.number ? <div className={styles.error}>{formik.errors.number}</div> : null}
      </label>
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
  );
};
export default ContactForm;