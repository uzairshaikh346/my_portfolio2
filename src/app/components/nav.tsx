// components/Navbar.js
import React from 'react';
import style from './nav.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className= {style.nav_links}>
        <li><Link className={style.link} href="/">Home</Link></li>
        <li><Link className={style.link} href="/project">Project</Link></li>
        <li><Link className={style.link} href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
