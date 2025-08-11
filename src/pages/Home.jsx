import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import '../styles/style.css';

const Home = () => {
  return (
    <Layout>
      <section
        id="content-inicio"
        className="bg-[url(src/assets/image-women-card.jpg)]  bg-[center_top_20%] bg-cover bg-no-repeat rounded-2xl h-[85vh] m-4 flex items-end justify-start">
        <div className="p-4 m-2 rounded-2xl bg-gray-50/70">
          <h1 className="text-[100px] min-[1441px]:text-[180px]  min-[1024px]:text-[130px] max-[880px]:text-[80px] max-[480px]:text-[53px] text-[#FFB500] font-extrabold">
            THE PRODUCT
          </h1>
          <h2 className="text-[25px] min-[1441px]:text-[40px]  min-[1024px]:text-[30px] max-[880px]:text-[20px] max-[480px]:text-[17px] font-bold ">
            CONECTA CON UNA NUEVA FORMA DE COMPRAR.
          </h2>
        </div>
      </section>

      <section
        id="content-about"
        className="grid grid-cols-1 min-[670px]:grid-cols-2 lg:grid-cols-2 gap-5 p-5 max-[670px]:p-0 m-4 mt-10 rounded-2xl bg-[rgb(238,238,238)] items-center">
        <img
          src="src/assets/image-women-home.jpg"
          alt="Mujer comprando online con el celular"
          className="w-full h-full object-cover rounded-2xl max-[670px]:hidden" />
        <div className="text-white flex flex-col min-[1440px]:justify-around bg-[#FFB500] rounded-2xl p-6 gap-3 text-sm h-full min-[1440px]:px-[200px]">
          <h2 className="text-6xl max-[880px]:text-[50px] max-[480px]:text-[45px] text-center font-bold mb-4  min-[1440px]:whitespace-nowrap">
            ¿QUIENES SOMOS?
          </h2>
          <p className="font-normal text-justify">
            Somos una tienda online pensada para reunir en un solo lugar una amplia variedad de productos de diferentes categorías.
          </p>
          <p>
            Creemos en la comodidad, la calidad y la atención personalizada. Por eso, trabajamos todos los días para ofrecerte una experiencia de compra fácil, segura y con opciones para todos los gustos y necesidades.
          </p>
          <p>
            The Product es un espacio pensado para vos, para acompañarte y hacer que encontrar lo que necesitás sea fácil, rápido y agradable. Porque creemos que cada producto que elegís puede sumar a tu día a día, y queremos ser parte de esa eleccion.
          </p>
          <Link
            to="/inicio"
            className="mt-4 max-[480px]:w-full max-[480px]:text-center p-2.5 rounded-[10px] border-none bg-white text-[#FFB500] text-[20px] font-medium"
          > + VER CATALOGO
          </Link>
        </div>
      </section>

      <section
        id="content-services"
        className="p-5 m-4 rounded-2xl flex flex-col items-center justify-center bg-[#e4e4e462]">
        <div>
          <h2 className="text-6xl max-[880px]:text-[50px] max-[480px]:text-[45px] text-center font-bold mb-6">
            NUESTROS SERVICIOS
          </h2>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 items-stretch justify-center">
          <div className="p-4 flex items-center justify-center flex-col rounded-2xl shadow-md border-2 border-[#b4b4b4] bg-white">
            <i className="bi bi-bag-plus text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Compra fácil y rápida</h3>
            <p className="text-sm text-justify">Hacé tu pedido en pocos pasos y disfrutá de una experiencia sencilla y sin complicaciones.</p>
          </div>
          <div className="p-4 flex items-center justify-center flex-col rounded-2xl shadow-md border-2 border-[#b4b4b4] bg-white">
            <i className="bi bi-box-seam  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Envios a todo el país</h3>
            <p className="text-sm text-justify">Enviamos a todo el país para que tus compras lleguen rápido y seguro hasta la puerta de tu casa.</p>
          </div>
          <div className="p-4 flex items-center justify-center flex-col rounded-2xl shadow-md border-2 border-[#b4b4b4] bg-white">
            <i className="bi bi-wallet2  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Pago 100% seguro</h3>
            <p className="text-sm text-justify">Tus datos y transacciones están protegidos con tecnología avanzada para garantizar tu tranquilidad.</p>
          </div>
          <div className="p-4 flex items-center justify-center flex-col rounded-2xl shadow-md border-2 border-[#b4b4b4] bg-white">
            <i className="bi bi-people-fill  text-[50px] text-[#FFB500]"></i>
            <h3 className="uppercase text-sm text-center font-bold mb-5">Soporte</h3>
            <p className="text-sm text-justify">Contamos con un equipo de atención disponible para responder tus consultas y ayudarte en todo momento.</p>
          </div>
        </div>
      </section>

      <section
        id="content-proyect"
        className="p-5 m-4 rounded-2xl flex flex-col items-start justify-center border-2 border-[#ffb500]" >
        <div >
          <h2 className="text-6xl max-[880px]:text-[50px] max-[480px]:text-[45px] justify-start font-bold mb-6"
          >ACERCA DEL PROYECTO</h2>
        </div>
        <div>
          <p>
            The Product surge de la necesidad de conectar a las personas con productos que realmente les simplifiquen la vida. Nació como un proyecto que busca transformar la experiencia de compra online, poniendo al cliente en el centro y apostando a la innovación constante.
          </p>
          <p>
            ¿Querés saber cómo comenzó The Product y qué hace único a nuestro proyecto?
          </p>
        </div>
        <Link
          to="/proyect"
          className="mt-4 w-full max-[480px]:text-center p-2.5 rounded-[10px] border-none bg-[#FFB500] text-white text-sm font-medium"
        > + CONOCER MAS
        </Link>
      </section>
    </Layout>
  )
}

export default Home;