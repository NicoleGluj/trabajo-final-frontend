import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <img src="#" alt="imagen de logo" /> */}
      <nav>
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/dashboard">DASHBOARD</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register">REGISTRO</Link></li>
          <button>CERRAR SESION</button>
        </ul>
      </nav>
    </header>
  )
}

export default Header;