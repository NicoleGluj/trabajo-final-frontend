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
        <div className="content-inicio-img">
          <img src="src\assets\repartidor.png" alt="" />
        </div>
      </section>

      <section id="content-about">
        <img src="src\assets\mensajero-de-cultivo-con-paquete-y-tableta.jpg" alt="" />
        <div className="about-title">
          <h2>¿QUIENES SOMOS?</h2>
          <p>Nos dedicamos a brindar un espacio digital donde cualquier negocio o <br /> emprendedor pueda mostrar sus catálogos de productos.</p>
          <button className="about-button">+ QUIERO SER PARTE</button>
        </div>
      </section>

      <section id="content-services">
        <div>
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <div className="services-content">
          <div className="service-content">
            <h3>Publicación rápida de productos</h3>
            <p>Subí fotos, poné el precio y contá en pocas palabras qué estás ofreciendo. En minutos tu producto ya está visible.</p>
          </div>
          <div className="service-content">
            <h3>Conexión directa con compradores</h3>
            <p>Hablá directamente con las personas interesadas, sin intermediarios, y concretá la venta de forma segura.</p>
          </div>
          <div className="service-content">
            <h3>Destacá tus publicaciones</h3>
            <p>Usá nuestras opciones para que tus productos aparezcan primero y lleguen a más usuarios.</p>
          </div>
          <div className="service-content">
            <h3>Explorá y comprá lo que buscás</h3>
            <p>Encontrá productos únicos, usados o nuevos, ordenados por categorías para que sea fácil navegar.</p>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Home;