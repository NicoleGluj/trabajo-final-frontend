import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import '../styles/pages/home.css'

const Home = () => {
  return (
    <Layout>
      <section id="content-inicio">
        <div className="content-inicio-text">
          <h1>THE PRODUCT</h1>
          <h2>CONECTA CON UNA NUEVA FORMA DE COMPRAR.</h2>
        </div>
      </section>

      <section id="content-about">
        <img src="src/assets/image-women-home.jpg" alt="Manos de una mujer sosteniendo un teléfono mientras realiza una compra online" />
        <div className="about-title">
          <h2>¿QUIENES SOMOS?</h2>
          <p>Somos una tienda online pensada para reunir en un solo lugar una amplia variedad de productos de diferentes categorías. <br /> Creemos en la comodidad, la calidad y la atención personalizada. Por eso, trabajamos todos los días para ofrecerte una experiencia de compra fácil, segura y con opciones para todos los gustos y necesidades. <br /> The Product es un espacio pensado para vos, para acompañarte y hacer que encontrar lo que necesitás sea fácil, rápido y agradable. Porque creemos que cada producto que elegís puede sumar a tu día a día, y queremos ser parte de esa eleccion. </p>
          <Link to="/inicio" className="about-button">+ VER CATALOGO</Link>
        </div>
      </section>

      <section id="content-services">
        <div className="services-title">
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <div className="services-content">
          <div className="service-content">
            <i className="bi bi-bag-plus"></i>
            <h3>Compra fácil y rápida</h3>
            <p>Hacé tu pedido en pocos pasos y disfrutá de una experiencia sencilla y sin complicaciones.</p>
          </div>
          <div className="service-content">
            <i className="bi bi-box-seam"></i>
            <h3>Envios a todo el país</h3>
            <p>Enviamos a todo el país para que tus compras lleguen rápido y seguro hasta la puerta de tu casa.</p>
          </div>
          <div className="service-content">
            <i className="bi bi-wallet2"></i>            <h3>Pago 100% seguro</h3>
            <p>Tus datos y transacciones están protegidos con tecnología avanzada para garantizar tu tranquilidad.</p>
          </div>
          <div className="service-content">
            <i className="bi bi-people-fill"></i>            <h3>Soporte</h3>
            <p>Contamos con un equipo de atención disponible para responder tus consultas y ayudarte en todo momento.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home;