import styles from './page.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.intro}>
        <h1>Hello, I'm Muhammad Uzair</h1>
        <p>
        Hello! I'm a passionate web developer and IT student currently pursuing a course in Cloud Applied Generative AI Engineering. With a solid foundation in HTML, CSS, JavaScript/TypeScript, and frameworks like Next.js and React, I enjoy creating engaging and visually appealing user interfaces. I have successfully completed multiple projects focusing on modern design principles, responsiveness, and user experience.
        </p>
        <p>I am also diving into data science and artificial intelligence to expand my skill set further. My goal is to develop innovative solutions that leverage the power of AI and cloud technology. As I grow in this field, I'm excited to work on projects that challenge me and help me learn new technologies.</p>
        <Link href="/contact" className={styles.button}>Contact me</Link>
      </div>
      <div className={styles.imagediv}>
      <div className={styles.image}>
        <img src="/images/me.jpeg" alt="Profile Image" />
      </div>
      </div>
    </section>
  );
};

export default Home;
