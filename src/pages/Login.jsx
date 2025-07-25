import CardAuth from "../components/CardAuth";
import Layout from "../components/Layout"
import '../styles/pages/login.css'

const Login = () => {
  return (
    <Layout>
      <CardAuth>
        <div className='card-auth-content'>
          <h3>INICIA SESION</h3>
          <div className="card-inputs">
            <label>Correo Electronico</label>
            <input type="email" />
            <label>Contraseña</label>
            <input type="password" />
          </div>
          <button className="card-button">INGRESAR</button>
        </div>
      </CardAuth>
    </Layout>
  )
}

export default Login;