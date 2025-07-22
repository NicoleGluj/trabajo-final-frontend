import { useState } from "react";
import Layout from "../components/Layout"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // OPCION 1 PARA MANEJAR CHANGE
  // const handleUsername = (e) => {
  //   setUsername(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("debes completar la casilla")
      return
    } else {
      setSuccess("ENVIADO CON EXITO")
    }

    const newUser = {
      username: username,
      email: email,
      password: password
    }

    setUsername("")
    setEmail("")
    setPassword("")
  }


  return (
    <Layout>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
            {/* OPCION 2 PARA MANEJAR CHANGE, SI TENGO QUE HACER MAS DE UNA TAREA, NO SERVIRIA */}
          </div>
          <div>
            <label>Correo Electronico</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </div>
          <div>
            <label>Constraseña</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button>ENVIAR</button>
        </form>

        <p>{error}</p>
        <p>{success}</p>
      </section>
    </Layout>
  )
}

export default Register;