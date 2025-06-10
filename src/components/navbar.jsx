import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
export default function NavBar(){
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <nav className= {"navbar"}>
  <div className="navbar-brand"><Link className = "navbar-brand" to="/">JC</Link></div>
  <ul className="navbar-links">
    <li><Link to="/projects">Projects</Link></li>
    <li><a href="#media">Media</a></li>
    <li><a href="/contact">Contact Me</a></li>
  </ul>
</nav>
    )
}