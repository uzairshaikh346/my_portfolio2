// components/Contact.js
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Your Email" className={styles.input} />
        <textarea placeholder="Your Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
