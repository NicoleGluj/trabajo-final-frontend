import { useState } from "react";
import CardAuth from "../components/CardAuth";
import Layout from "../components/Layout"
// import '../styles/pages/login.css'
import { useAuth } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";


// [#FFB500]
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useAuth()
  const nagivate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")

    if (!username || !password) {
      setError("Debe completar todos los campos")
    } else if (username != "johnd" && password != "m38rmF$") {
      setError("Credenciales incorrectas")
    } else if (username != "johnd") {
      setError("Nombre de usuario incorrecto")
    } else if (password != "m38rmF$") {
      setError("Constraseña incorrecta")
      return
    }

    const isLogin = await login(username, password)
    if (isLogin) {
      setUsername("")
      setPassword("")
      nagivate("/inicio")
    }
  }

  return (
    <Layout>
      <CardAuth>
        <div className="flex items-center justify-center flex-col min-[480px]:w-1/2">
          <h3 className="text-3xl font-bold text-black mb-5 "
          >INICIA SESION</h3>

          <div className="border-1 border-gray-300 p-4 rounded-2xl text-sm mb-7 text-gray-600">
            <p>Usuario: johnd</p>
            <p>Contraseña: m38rmF$</p>
          </div>

          <form
            onSubmit={handleLogin}
            className="flex items-center justify-center flex-col gap-4"
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <label>Nombre de Usuario:</label>
              <input
                className="p-2 border-1 border-[#ffb500] rounded-full"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
              <label>Contraseña:</label>
              <input
                className="p-2 border-1 border-[#ffb500] rounded-full"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </div>

            <button
              className="p-2 bg-[#ffb500] rounded-full font-semibold w-full mt-3 mb-4 text-sm">
              INGRESAR
            </button>
          </form>
          {
            error &&
            <p className="m-3 text-red-600">
              {error}
            </p>
          }

          <div className="flex text-sm text-gray-600 gap-1 p-3 border-t-1 border-gray-300">
            <p>¿No tenes una cuenta?</p>
            <Link
              to="/register"
              className="text-[#ffb500] font-semibold"
            >Registrate
            </Link>
          </div>
        </div>
      </CardAuth>
    </Layout>
  )
}

export default Login;