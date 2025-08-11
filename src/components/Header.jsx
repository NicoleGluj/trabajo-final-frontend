import { Link, useNavigate } from "react-router-dom";
import '../styles/style.css';
import { useState } from "react";
import { useAuth } from "../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const navigate = useNavigate()

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="m-4 bg-[#ececec] p-2 rounded-2xl">
      <nav className="min-[1024px]:flex min-[1024px]:flex-row min-[1024px]:items-center min-[1024px]:justify-between ">
        <section className="flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img src="src\assets\icono-favicon.png" alt="logo TheProduct" className="size-7 mr-2" />
            <h2 className="font-semibold text-xl">THE PRODUCT</h2>
          </div>
          <div className="min-[1024px]:hidden">
            <i
              className="bi bi-list text-3xl"
              onClick={handleOpen}></i>
          </div>
        </section>

        <section className={`min-[1024px]:flex min-[1224px]:flex-row ${isOpen ? 'flex' : 'hidden'} min-[1024px]:items-center`}>
          <ul className="w-full text-gray-700 mt-4 flex flex-col min-[1024px]:flex-row items-center justify-center mb-5 min-[1024px]:mb-0 min-[1024px]:gap-4 min-[1024px]:mt-0" >
            <li className="mb-2 min-[1024px]:mb-0"><Link to="/">INICIO</Link></li>
            {
              user &&
              <li className="mb-2 min-[1024px]:mb-0"><Link to="/dashboard">DASHBOARD</Link></li>
            }
            {
              !user && <>
                <li className="mb-2 min-[1024px]:mb-0"><a href="#content-about">CONOCENOS</a></li>
                <li className="mb-2 min-[1024px]:mb-0"><a href="#content-services">SERVICIOS </a></li>
                <li className="mb-2 min-[1024px]:mb-0"><Link to="/proyect">PROYECTO</Link></li>
                <li className="mb-2 min-[1024px]:mb-0"><a href="#content-footer">CONTACTO </a></li>
              </>
            }
          </ul>
        </section>

        <section className={`min-[1024px]:flex min-[1024px]:flex-row ${isOpen ? 'flex' : 'hidden'} mb-3 min-[1024px]:items-center min-[1024px]:mb-0`}>
          <div className="w-full items-center justify-center flex flex-row gap-3 mt-2 min-[1024px]:mt-0">
            {
              user &&
              <button
                className="bg-[#ffb500] px-4 py-1 rounded-full font-medium text-base text-black tracking-[1px]"
                onClick={handleLogout}>
                <Link to="/home" >CERRAR SESION</Link>
              </button>
            }
            {
              !user && <>
                <button className="text-black px-4 py-0.5 rounded-full font-medium text-base tracking-[1px] border-2 border-[#ffb500]">
                  <Link to="/login">INGRESAR</Link>
                </button>
                <button className="bg-[#ffb500] px-4 py-1 rounded-full font-medium text-base text-black tracking-[1px]">
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