import { useState } from "react";
import Layout from "../components/Layout"
import CardAuth from "../components/CardAuth";

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
        <div className='card-auth-content'>
          <h3>REGISTARSE</h3>
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="card-input">
              <label>Nombre de usuario</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />
            </div>
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
            <button className="card-button">REGISTRARME</button>
          </form>

          {
            error &&
            <p>{error}</p>
          }
        </div>
      </CardAuth>
    </Layout>
  )
}

export default Register;