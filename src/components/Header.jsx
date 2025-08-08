import { Link } from "react-router-dom";
// import '../styles/components/header.css'
import '../styles/style.css';
import { useState } from "react";
import { useAuth } from "../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="m-[15px] bg-[#ececec] p-2 rounded-[15px]">
      <nav className="min-[880px]:flex min-[880px]:flex-row min-[880px]:items-center min-[880px]:justify-between ">
        <section className="flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img src="src\assets\icono-favicon.png" alt="logo TheProduct" className="w-7 h-7 mr-2" />
            <h2 className="font-semibold text-[18px]">THE PRODUCT</h2>
          </div>
          <div className="min-[880px]:hidden">
            <i
              className="bi bi-list text-3xl"
              onClick={handleOpen}></i>
          </div>
        </section>

        <section className={`min-[880px]:flex min-[880px]:flex-row ${isOpen ? 'flex' : 'hidden'} min-[880px]:items-center`}>
          <ul className="w-full text-gray-700 mt-4 flex flex-col items-center justify-center min-[880px]:flex min-[880px]:flex-row mb-5 min-[880px]:mb-0 min-[880px]:gap-4 min-[880px]:justify-center min-[880px]:mt-0" >
            <li className="hover:text-[18px] mb-2 min-[880px]:mb-0"><Link to="/">INICIO</Link></li>
            {
              user &&
              <li className="hover:text-[18px] mb-2 min-[880px]:mb-0"><Link to="/dashboard">DASHBOARD</Link></li>
            }
            {
              !user && <>
                <li className="hover:text-[17px] mb-2 min-[880px]:mb-0"><a href="#content-about">CONOCENOS</a></li>
                <li className="hover:text-[17px] mb-2 min-[880px]:mb-0"><a href="#content-services">SERVICIOS </a></li>
                <li className="hover:text-[17px] mb-2 min-[880px]:mb-0"><a href="#content-services"> PROYECTO </a></li>
                <li className="hover:text-[17px] mb-2 min-[880px]:mb-0"><a href="#content-footer">CONTACTO </a></li>
              </>
            }
          </ul>
        </section>

        <section className={`min-[880px]:flex min-[880px]:flex-row ${isOpen ? 'flex' : 'hidden'} mb-3 min-[880px]:items-center min-[880px]:mb-0`}>
          <div className="w-full items-center justify-center flex flex-row gap-3 mt-2 min-[880px]:mt-0">
            {
              user &&
              <button onClick={handleLogout}>
                <Link to="/home" >CERRAR SESION</Link>
              </button>
            }
            {
              !user && <>
                <button className="bg-[#ffb500] px-4 py-1.5 rounded-[15px] font-[600] text-white tracking-[1px]">
                  <Link to="/login">INGRESAR</Link>
                </button>
                <button className="border-3 border-[#FFB500] text-[#eba800] bg-white font-[700] px-4 py-1 rounded-[15px] tracking-[1px]">
                  <Link to="/register">REGISTRAR</Link>
                </button>
              </>
            }
          </div>
        </section>
      </nav>
    </header >
  )
}

export default Header;