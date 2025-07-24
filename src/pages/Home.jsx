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
        <div className="about-title">
          <h2>¿QUIENES SOMOS?</h2>
        </div>
        <div className="about-sections">
          <div className="about-section">
            <p>En THE PRODUCT creemos en el poder de las buenas oportunidades. Somos una app pensada para conectar a personas que quieren vender con quienes están buscando algo único. Acá podés publicar lo que ya no usás, productos hechos por vos o lo que quieras ofrecer. Simple, rápido y al alcance de todos.</p>
          </div>
          <div className="about-section">
            <p>Hacer que vender y comprar sea tan fácil como mandar un mensaje. Queremos que cualquiera pueda mostrar sus productos al mundo sin complicaciones, y que los compradores encuentren justo lo que necesitan con pocos clics.</p>
          </div>
          <div className="about-section">
            <p>En THE PRODUCT no sos solo un vendedor, sos parte de una comunidad. Nuestra plataforma está pensada para que tu producto tenga visibilidad real, con un diseño claro y herramientas que te ayudan a destacar. Vos publicás, nosotros te ayudamos a llegar a más personas.</p>
          </div>
        </div>
      </section>

      <section id="content-services">
        <div>
          <h2>NUESTROS SERVICIOS</h2>
          <h3>En THE PRODUCT te damos todas las herramientas que necesitás para vender y comprar de forma simple:</h3>
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