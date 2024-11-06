import styles from './Project.module.css';
import Link from 'next/link';

const Project = () => {
  const projects = [
    {
      title: 'GIAIC Clone Web',
      description: 'This is a clone website created using Next.js, focusing on layout accuracy, responsiveness, and smooth navigation. I used modern UI/UX design principles, and ensured optimized performance for an improved user experience.',
      link: 'https://giaic-clone-web.vercel.app/',
    },
    {
      title: 'Weather app',
      description: 'A weather application that fetches and displays real-time weather data using the OpenWeather API. This project allowed me to gain experience with API integration and asynchronous programming in JavaScript.',
      link: 'https://weather-app-next-js-t7c8.vercel.app/',
    },
    {
        title: 'Al Ikhlas website',
        description: 'A dedicated website for Alikhlas, designed to highlight specific content and provide a seamless user experience. This project helped me in creating structured layouts and implementing responsive designs.',
        link: 'https://alikhlas.vercel.app/',
      },
      {
        title: 'Resume Builder',
        description: 'An interactive tool that enables users to create and format resumes by adding and customizing sections. It showcases my ability to work with dynamic content and handle form submissions.',
        link: 'https://uzairsmilestone5.vercel.app/',
      },
      {
        title: 'Countdown Timer',
        description: 'A countdown timer application allowing users to set countdowns for specific events. This project demonstrates my skills in DOM manipulation and timer functions.',
        link: 'https://count-down-timer-nextjs-project.vercel.app/',
      },
  
  ];

  return (
    <section className={styles.project} id="project">
      <h2>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link href={project.link} className={styles.projectLink}>View Project</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
