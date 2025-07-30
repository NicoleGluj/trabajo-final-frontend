import { useState } from "react";
import CardAuth from "../components/CardAuth";
import Layout from "../components/Layout"
import '../styles/pages/login.css'
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Debe completar todos los campos")
      return
    }

    const User = {
      email: email,
      password: password
    }

    setEmail("")
    setPassword("")
  }

  return (
    <Layout>
      <CardAuth>
        <div className='card-auth-content'>
          <h3>INICIA SESION</h3>
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="card-input">
              <label>Correo Electronico</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </div>
            <div className="card-input">
              <label>Contraseña</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </div>
            <button className="card-button"> <Link to="/dashboard">INGRESAR</Link></button>
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