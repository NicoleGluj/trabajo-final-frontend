import { useState } from "react";
import Layout from "../components/Layout"
import CardAuth from "../components/CardAuth";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!username || !email || !password) {
      setError("Debe completar todos los campos")
      return
    }

    const newUser = {
      username: username,
      email: email,
      password: password
    }

    // limpio inputs
    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (
    <Layout>
      <CardAuth>
        <div className="flex items-center justify-center flex-col min-[480px]:w-1/2">
          <h3 className="text-3xl font-bold text-black mb-5 ">REGISTARSE</h3>

          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center flex-col gap-4">
            <div className="flex items-center justify-center flex-col gap-2">
              <label>Nombre de usuario:</label>
              <input
                className="p-2 border-1 border-[#ffb500] rounded-full"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
              <label>Correo Electronico:</label>
              <input
                className="p-2 border-1 border-[#ffb500] rounded-full"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
              <label>Contraseña:</label>
              <input
                className="p-2 border-1 border-[#ffb500] rounded-full"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
              <div className="flex items-center justify-center flex-col gap-2">
                <label>Confirmar contraseña:</label>
                <input
                  className="p-2 border-1 border-[#ffb500] rounded-full"
                  type="password"
                />
              </div>
            </div>
            <button className="p-2 bg-[#ffb500] rounded-full font-semibold w-full mt-3 mb-4 text-sm">REGISTRARME</button>
          </form>
          {
            error &&
            <p className="m-3 text-red-600">
              {error}
            </p>
          }
          <div className="flex text-sm text-gray-600 gap-1 p-3 border-t-1 border-gray-300">
            <p>¿Ya tenes una cuenta?</p>
            <Link
              to="/login"
              className="text-[#ffb500] font-semibold"
            >Iniciar Sesion
            </Link>
          </div>
        </div>
      </CardAuth>
    </Layout>
  )
}

export default Register;