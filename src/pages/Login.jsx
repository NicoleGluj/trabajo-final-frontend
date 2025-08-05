import { useState } from "react";
import CardAuth from "../components/CardAuth";
import Layout from "../components/Layout"
import '../styles/pages/login.css'
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

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
        <div className='card-auth-content'>
          <h3>INICIA SESION</h3>

          <form className="card-form" onSubmit={handleLogin}>
            <div className="card-input">
              <label>Nombre de Usuario</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />
            </div>
            <div className="card-input">
              <label>Contraseña</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </div>

            <button className="card-button">INGRESAR</button>
          </form>

          {
            error && <p>{error}</p>
          }
        </div>
      </CardAuth>
    </Layout>
  )
}

export default Login;