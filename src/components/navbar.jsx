import { Link } from 'react-router-dom';
export default function NavBar(){
    return(
        <div className="navContainer">
        <nav className="navbar">
  <div className="navbar-brand"><Link className = "navbar-brand" to="/">JC</Link></div>
  <ul className="navbar-links">
    <li><Link to="/projects">Projects</Link></li>
    <li><a href="#extras">Extras</a></li>
    <li><a href="#media">Media</a></li>
    <li><a href="/contact">Contact Me</a></li>
  </ul>
</nav>
</div>
    )
}