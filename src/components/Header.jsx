import { Link } from "react-router-dom";
import '../styles/components/header.css'
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className="logo-brand">
        <img src="src\assets\favicon2.png" alt="" />
        <h2>THE PRODUCT</h2>
        <i className="bi bi-list" onClick={handleOpen}></i>
      </div>
      <nav className={`content-nav ${isOpen ? "nav-open" : ""}`}>
        <ul className="content-section">
          <li><Link to="/">INICIO</Link></li>
          {
            !user && <>
              <li><a href="#content-about">CONOCENOS</a></li>
              <li><a href="#content-services">SERVICIOS </a></li>
              <li><a href="#content-footer">CONTACTO </a></li>
            </>
          }
        </ul>
      </nav>
      <div className={`content-buttons ${isOpen ? "button-open" : ""}`}>
        {
          !user && <>
            <button className="button-login"><Link to="/login">INGRESAR</Link></button>
            <button className="button-register"><Link to="/register">REGISTRAR</Link></button>
          </>
        }
      </div>
    </header>
  )
}

export default Header;