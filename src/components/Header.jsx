import { Link, useNavigate } from "react-router-dom";
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
    <header className="m-4">
      <nav className="min-[1024px]:flex min-[1024px]:flex-row min-[1024px]:items-center min-[1024px]:justify-between ">
        <section className="flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img src="src\assets\icono-favicon.png" alt="logo TheProduct" className="size-7 mr-2" />
            <h2 className="font-semibold text-xl"><Link to="/">THE PRODUCT</Link></h2>
          </div>
          <div className="min-[1024px]:hidden">
            <i
              className="bi bi-list text-3xl"
              onClick={handleOpen}></i>
          </div>
        </section>

        <section className={`min-[1024px]:flex min-[1024px]:flex-row ${isOpen ? 'flex' : 'hidden'} min-[1024px]:items-center`}>
          <ul className="w-full text-gray-700 mt-4 flex flex-col min-[1024px]:flex-row items-center justify-center mb-5 min-[1024px]:mb-0 min-[1024px]:gap-4 min-[1024px]:mt-0" >
            <li className="mb-2 min-[1024px]:mb-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"><Link to="/">INICIO</Link></li>
            <li className="mb-2 min-[1024px]:mb-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"><Link to="/proyect">PROYECTO</Link></li>
            {
              !user && <li className="mb-2 min-[1024px]:mb-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"><Link to="/inicio">CATALOGO</Link></li>
            }

            <li className="mb-4 min-[1024px]:mb-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"><a href="#content-footer">CONTACTO </a></li>
            {
              user &&
              <li className="mb-2 text-[#ffb500] font-semibold min-[1024px]:mb-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"><Link to="/dashboard">DASHBOARD</Link></li>
            }
          </ul>
        </section>

        <section className={`min-[1024px]:flex min-[1024px]:flex-row ${isOpen ? 'flex' : 'hidden'} mb-3 min-[1024px]:items-center min-[1024px]:mb-0`}>
          <div className="w-full items-center justify-center flex flex-row gap-3 mt-2 min-[1024px]:mt-0">
            {
              user &&
              <button class="px-5 py-1 overflow-hidden rounded-full border-2 border-[#ffb500] bg-white text-black font-medium transition-all duration-300 hover:bg-[#ffb500] hover:ring-2 hover:ring-[#ffb500] hover:text-white hover:ring-offset-2"
                onClick={handleLogout}>
                <Link to="/" >CERRAR SESION</Link>
              </button>
            }
            {
              !user && <>
                <button class="px-5 py-1 overflow-hidden rounded-full border-2 border-[#ffb500] bg-white text-black font-medium transition-all duration-300 hover:bg-[#ffb500] hover:ring-2 hover:ring-[#ffb500] hover:text-white hover:ring-offset-2"> <Link to="/login">INGRESAR</Link></button>
                <button class="px-5 py-1 overflow-hidden rounded-full border-2 border-[#ffb500] bg-[#ffb500] text-white font-medium transition-all duration-300 hover:bg-white hover:ring-2 hover:ring-[#ffb500] hover:text-black hover:ring-offset-2"> <Link to="/register">REGISTRAR</Link></button>
              </>
            }
          </div>
        </section>
      </nav>
    </header >
  )
}

export default Header;