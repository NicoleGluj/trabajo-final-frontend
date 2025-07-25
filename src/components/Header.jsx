import { Link } from "react-router-dom";
import '../styles/components/header.css'

const Header = () => {
  return (
    <header>
      <div className="logo-brand">
        <img src="src\assets\favicon2.png" alt="" />
        <h2>THE PRODUCT</h2>
      </div>
      <nav className="content-nav">
        <ul className="content-section">
          <li><Link to="/">INICIO</Link></li>
          <li><a href="#content-about">CONOCENOS</a></li>
          <li><a href="#content-services">SERVICIOS </a></li>
          <li><a href="#content-footer">CONTACTO </a></li>
        </ul>
        <button className="button-login"><Link to="/login">INGRESAR</Link></button>
        <button className="button-register"><Link to="/register">REGISTRAR</Link></button>
      </nav>
    </header>
  )
}

export default Header;