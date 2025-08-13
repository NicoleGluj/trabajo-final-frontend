import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import '../styles/style.css';

const Home = () => {
  return (
    <Layout>
      <section
        id="content-inicio"
        className="bg-[url(src/assets/image-women-card-2.jpg)] max-[1124px]:bg-[center_right_10%] min-[1024px]:bg-[center_top_10%] bg-cover bg-no-repeat rounded-2xl h-[90vh] m-4 flex items-center justify-start">
        <div className="p-4 min-[1440px]:ml-20">
          <h3 className="text-[13px] min-[1440px]:text-[17px] min-[880px]:text-[18px] max-[480px]:text-[15px] font-medium mb-2">
            POTENCIÁ TU NEGOCIO</h3>

          <h1 className="text-[40px] min-[1440px]:text-[65px] min-[880px]:text-[50px] max-[480px]:text-[45px] text-[#FFB500] font-extrabold min-[758px]:w-[50%] mb-5">
            CONECTA CON UNA NUEVA FORMA DE VENDER
          </h1>

          <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#ffb500] bg-white px-6 py-3 font-medium text-black">
            <span class="absolute h-0 w-0 rounded-full bg-[#ffb500] transition-all duration-300 group-hover:h-56 group-hover:w-full"></span><a href="#content-about" className="relative">+ CONOCER MÁS</a></button>
        </div>
      </section>

      <section
        id="content-about"
        className="grid grid-cols-1 min-[670px]:grid-cols-2 gap-5 p-5 max-[670px]:p-0  m-4 mt-10 rounded-2xl bg-[rgb(238,238,238)] max-[670px]:bg-white text-justify items-stretch">
        <div className="row-span-2 col-start-1 row-start-1">
          <img
            src="src/assets/image-women-home.jpg"
            alt="Mujer comprando online con el celular"
            className="w-full h-full object-cover rounded-2xl max-[670px]:hidden" />
        </div>
        <div className="text-white flex flex-col min-[1440px]:justify-center bg-[#FFB500] rounded-2xl gap-2 p-6">
          <h2 className="text-6xl max-[880px]:text-[50px] max-[480px]:text-[45px] text-start  max-[670px]:text-center font-bold mb-4 min-[1440px]:whitespace-nowrap">
            ¿QUIENES SOMOS?
          </h2>
          <p className="font-normal text-justify">
            Somos una tienda online pensada para reunir en un solo lugar una amplia variedad de productos de diferentes categorías.
          </p>
          <p>
            The Product es un espacio pensado para vos, para acompañarte y hacer que encontrar lo que necesitás sea fácil, rápido y agradable. Porque creemos que cada producto que elegís puede sumar a tu día a día, y queremos ser parte de esa eleccion.
          </p>
          <Link
            to="/inicio"
            className="transform rounded-2xl bg-white shadow-md transition duration-300 hover:scale-103 flex items-center flex-col mt-4 p-2 text-[#FFB500] text-xl font-medium"
          > + VER CATALOGO
          </Link>
        </div>

        <div className="text-black flex flex-col min-[1440px]:justify-center bg-white border-2 border-[#ffb500] rounded-2xl gap-2 p-6">
          <div>
            <h2 className="text-6xl max-[880px]:text-[50px] max-[480px]:text-[45px] text-start max-[670px]:text-center font-bold mb-4 min-[1440px]:whitespace-nowrap "
            >ACERCA DEL PROYECTO</h2>
          </div>
          <p>
            The Product surge de la necesidad de conectar a las personas con productos que realmente les simplifiquen la vida. Nació como un proyecto que busca transformar la experiencia de compra online, poniendo al cliente en el centro y apostando a la innovación constante.
          </p>
          <p>
            ¿Querés saber cómo comenzó The Product y qué hace único a nuestro proyecto?
          </p>
          <Link
            to="/proyect"
            className="transform rounded-2xl shadow-md transition duration-300 hover:scale-103 flex items-center flex-col mt-4 p-2 text-xl bg-[#FFB500] text-white text-[20px] font-medium"
          > + CONOCER MAS
          </Link>
        </div>
      </section >

      <section
        id="content-services"
        className="p-5 m-4 rounded-2xl flex flex-col items-center justify-center ">
        <div>
          <h2 className="text-6xl max-[880px]:text-[50px] max-[480px]:text-[45px] text-center font-bold mb-6">
            NUESTROS SERVICIOS
          </h2>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 items-stretch justify-center">
          <div className="transform rounded-2xl bg-white shadow-md transition duration-300 hover:scale-103 p-4 flex items-center justify-center flex-col border-2 border-[#b4b4b4]">
            <i className="bi bi-bag-plus text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Compra fácil y rápida</h3>
            <p className="text-sm text-justify">Hacé tu pedido en pocos pasos y disfrutá de una experiencia sencilla y sin complicaciones.</p>
          </div>
          <div className="transform rounded-2xl bg-white shadow-md transition duration-300 hover:scale-103 p-4 flex items-center justify-center flex-col border-2 border-[#b4b4b4]">
            <i className="bi bi-box-seam  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Envios a todo el país</h3>
            <p className="text-sm text-justify">Enviamos a todo el país para que tus compras lleguen rápido y seguro hasta la puerta de tu casa.</p>
          </div>
          <div className="transform rounded-2xl bg-white shadow-md transition duration-300 hover:scale-103 p-4 flex items-center justify-center flex-col border-2 border-[#b4b4b4]">
            <i className="bi bi-wallet2  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Pago 100% seguro</h3>
            <p className="text-sm text-justify">Tus datos y transacciones están protegidos con tecnología avanzada para garantizar tu tranquilidad.</p>
          </div>
          <div className="transform rounded-2xl bg-white shadow-md transition duration-300 hover:scale-103 p-4 flex items-center justify-center flex-col border-2 border-[#b4b4b4]">
            <i className="bi bi-people-fill  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Soporte</h3>
            <p className="text-sm text-justify">Contamos con un equipo de atención disponible para responder tus consultas y ayudarte en todo momento.</p>
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default Home;