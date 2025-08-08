import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import '../styles/style.css';

const Home = () => {
  return (
    <Layout>
      <section
        id="content-inicio"
        className="bg-[url(src/assets/image-women-card.jpg)] bg-[center_top_20%] bg-cover bg-no-repeat m-[15px] flex items-end max-[480px]:items-center rounded-[15px] h-[85vh] max-[480px]:text-center  max-[480px]:bg-gray-50/60">
        <div className="p-4 m-2 rounded-[15px] bg-gray-50/60">
          <h1
            className="max-[480px]:h-100%
            max-[480px]:text-[53px] max-[880px]:text-[85px] text-[120px] text-[#FFB500] font-[700]">
            THE PRODUCT
          </h1>
          <h2 className="max-[480px]:text-[17px] max-[880px]:text-[22px] text-[27px] font-[700] ">
            CONECTA CON UNA NUEVA FORMA DE COMPRAR.
          </h2>
        </div>
      </section>

      <section
        id="content-about"
        className="max-[480px]:p-0 rounded-[20px] m-[15px] p-5 gap-5 flex lg:flex-row bg-[rgb(238,238,238)] mt-[40px]">
        <img
          src="src/assets/image-women-home.jpg"
          alt="Mujer comprando online con el celular"
          className="w-1/2 rounded-[20px] object-cover max-[480px]:hidden" />
        <div className="text-white flex flex-col justify-around bg-[#FFB500] rounded-[15px] p-6 gap-7">
          <h2 className="max-[480px]:text-[40px] max-[480px]:text-center max-[480px]:font-[700] text-6xl">
            ¿QUIENES SOMOS?
          </h2>
          <p className="max-[480px]:text-[15px] font-normal text-justify">
            Somos una tienda online pensada para reunir en un solo lugar una amplia variedad de productos de diferentes categorías. <br /> Creemos en la comodidad, la calidad y la atención personalizada. Por eso, trabajamos todos los días para ofrecerte una experiencia de compra fácil, segura y con opciones para todos los gustos y necesidades. <br /> The Product es un espacio pensado para vos, para acompañarte y hacer que encontrar lo que necesitás sea fácil, rápido y agradable. Porque creemos que cada producto que elegís puede sumar a tu día a día, y queremos ser parte de esa eleccion.
          </p>
          <Link
            to="/inicio"
            className="max-[480px]:w-full max-[480px]:text-center p-2.5 rounded-[10px] border-none bg-white text-[#FFB500] text-[20px] font-medium"
          > + VER CATALOGO
          </Link>
        </div>
      </section>

      <section
        id="content-services"
        className="m-[15px] rounded-[15px] p-6 bg-[#e4e4e462]">
        <div>
          <h2 className="max-[480px]:text-[40px] max-[480px]:text-center max-[480px]:font-[700] text-6xl">
            NUESTROS SERVICIOS
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch justify-center gap-[10px] mt-[30px]">
          <div className="max-[480px]:p-4 flex items-center justify-center flex-col rounded-[15px] border-[2px] border-[#b4b4b4] bg-white">
            <i className="bi bi-bag-plus text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-[15px] align-center text-center font-[700] mb-[20px]">Compra fácil y rápida</h3>
            <p className="text-[15px] text-justify">Hacé tu pedido en pocos pasos y disfrutá de una experiencia sencilla y sin complicaciones.</p>
          </div>
          <div className="max-[480px]:p-4 flex items-center justify-center flex-col rounded-[15px] border-[2px] border-[#b4b4b4] bg-white">
            <i className="bi bi-box-seam  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-[15px] align-center text-center font-[700] mb-[20px]">Envios a todo el país</h3>
            <p className="text-[15px] text-justify">Enviamos a todo el país para que tus compras lleguen rápido y seguro hasta la puerta de tu casa.</p>
          </div>
          <div className="max-[480px]:p-4 flex items-center justify-center flex-col rounded-[15px] border-[2px] border-[#b4b4b4] bg-white">
            <i className="bi bi-wallet2  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-[15px] align-center text-center font-[700] mb-[20px]">Pago 100% seguro</h3>
            <p className="text-[15px] text-justify">Tus datos y transacciones están protegidos con tecnología avanzada para garantizar tu tranquilidad.</p>
          </div>
          <div className="max-[480px]:p-4 flex items-center justify-center flex-col rounded-[15px] border-[2px] border-[#b4b4b4] bg-white">
            <i className="bi bi-people-fill  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-[15px] align-center text-center font-[700] mb-[20px]">Soporte</h3>
            <p className="text-[15px] text-justify">Contamos con un equipo de atención disponible para responder tus consultas y ayudarte en todo momento.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home;