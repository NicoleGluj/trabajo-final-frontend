import { Link } from "react-router-dom";
import '../styles/components/header.css'

const Header = () => {
  return (
    <header>
      <h2>THE PRODUCT</h2>
      <nav>
        <ul className="ul-service">
          <li><Link to="/">INICIO</Link></li>
          <li><a href="#conocenos">CONOCENOS</a></li>
          <li><a href="#servicios">SERVICIOS </a></li>
          <li><a href="#footer">CONTACTO </a></li>
        </ul>
        <ul className="ul-login">
          <li><Link to="/auth">INGRESAR</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;