// components/Footer.js
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Muhammad Uzair. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li><a href="https://www.linkedin.com/in/muhammad-uzair-2526732a6/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/uzairshaikh346" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.facebook.com/qureshi.bro.9" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
