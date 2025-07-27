import Layout from "../components/Layout"
import '../styles/pages/home.css'

const Home = () => {
  return (
    <Layout>
      <section id="content-inicio">
        <div className="content-inicio-text">
          <h1>THE PRODUCT</h1>
          <h2>CONECTA CON UNA NUEVA FORMA DE VENDER .</h2>
        </div>
      </section>

      <section id="content-about">
        <img src="src/assets/cerrar-sonriente-mujer-sosteniendo-smartphone.jpg" alt="" />
        <div className="about-title">
          <h2>¿QUIENES SOMOS?</h2>
          <p>Nos dedicamos a brindar un espacio digital diseñado especialmente para que cualquier negocio, marca o emprendedor pueda mostrar y compartir sus catálogos de productos de manera fácil y organizada. <br /> Nuestro objetivo es conectar a vendedores y compradores en un entorno confiable, moderno y accesible, donde cada publicación tenga la visibilidad que merece. <br /> Creemos en impulsar a los emprendedores y pequeñas empresas, ofreciéndoles una herramienta práctica para potenciar sus ventas, llegar a más personas y hacer crecer sus proyectos sin complicaciones.</p>
          <button className="about-button">+ QUIERO SER PARTE</button>
        </div>
      </section>

      <section id="content-services">
        <div>
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <div className="services-content">
          <div className="service-content">
            <i className="bi bi-bag-plus"></i>
            <h3>Publicación rápida de productos</h3>
            <p>Subí tus productos en minutos: cargá fotos, precios y descripciones de forma simple e intuitiva.</p>
          </div>
          <div className="service-content">
            <i className="bi bi-grid-3x3-gap"></i>
            <h3> Catálogos digitales organizados y personalizables</h3>
            <p>Organizá tus productos en catálogos digitales claros y atractivos, fáciles de actualizar y listos para que tus clientes los vean en cualquier momento.</p>
          </div>
          <div className="service-content">
            <i className="bi bi-graph-up-arrow"></i>
            <h3>Mayor alcance para tus productos</h3>
            <p>Mostrá tus productos a más personas y hacé que tu catálogo llegue a potenciales clientes interesados.</p>
          </div>
          <div className="service-content">
            <i className="bi bi-share"></i>
            <h3>Explorá catálogos organizados</h3>
            <p>Descubrí productos únicos y ordenados por categorías para que sea fácil encontrar lo que buscás.</p>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export default Home;