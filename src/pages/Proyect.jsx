import Layout from "../components/Layout";

const Proyect = () => {
  return (
    <Layout>
      <section className="p-5 m-4 rounded-2xl bg-[rgb(238,238,238)]">
        <div>
          <h3 className="text-5xl max-[880px]:text-[50px] max-[480px]:text-[45px] font-bold mb-2"
          >ACERCA DE NOSOTROS</h3>
          <p className="mb-6"
          >Conoce mas acerca de nuestro nuevo proyecto: "THE PRODUCT"</p>
        </div>

        <div className="grid grid-cols-2 max-[480px]:grid-cols-1  gap-4">
          <div className="transform transition duration-300 hover:scale-102 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex flex-col items-center gap-6">
              <i class="bi bi-columns-gap text-5xl text-[#ffb500]"></i>
              <h3 className="text-2xl font-bold mb-4 text-center"
              >SOBRE EL PROYECTO</h3>
            </div>
            <div className="text-justify">
              <p >
                Este trabajo consiste en el desarrollo de una plataforma de ventas en línea realizada como parte de un curso de React. Ofrece un entorno digital completo donde el usuario puede explorar un catálogo variado de productos de forma sencilla y con posibilidad de filtrado.
              </p>
            </div>
          </div>
          <div className="transform transition duration-300 hover:scale-102 bg-white p-6 rounded-2xl col-start-1 shadow-sm">
            <div className="flex flex-col items-center gap-6">
              <i class="bi bi-person-check-fill text-5xl text-[#ffb500]"></i>
              <h3 className="text-2xl font-bold mb-4 text-center"
              >A QUIEN ESTA DIRIGIDO</h3>
            </div>
            <div className="text-justify">
              <p >
                Esta aplicación funciona como referencia para el desarrollo de proyectos con React y la aplicación de principios de diseño web moderno. Muestra cómo estructurar una interfaz mediante componentes, gestionar rutas y aplicar estilos responsive que se adaptan a distintos dispositivos.
              </p>
            </div>
          </div>
          <div className="transform transition duration-300 hover:scale-102 bg-white p-6 rounded-2xl row-span-2 col-start-2 max-[480px]:col-start-1 row-start-1 shadow-sm">
            <div className="flex flex-col items-center gap-6">
              <i class="bi bi-wrench text-5xl text-[#ffb500]"></i>
              <h3 className="text-2xl font-bold mb-4 text-center"
              >TECNOLOGIAS UTILIZADAS</h3>
            </div>
            <div className="text-justify">
              <h4 className="font-bold">Desarrollo:</h4>
              <p>En el desarrollo del proyecto se emplean tecnologías modernas como React, React Router DOM y Vite en el frontend.</p>
              <h4 className="mt-2 font-bold">Diseño:</h4>
              <p>
                Para los estilos se utiliza Tailwind CSS, aprovechando utilidades como Grid y Flexbox para lograr un diseño adaptable y responsivo.</p>
              <h4 className="mt-2 font-bold">Gestion de datos:</h4>
              <p>
                La comunicación con datos se realiza mediante la FakeStoreAPI, que permite gestionar productos y autenticación. Entre los enfoques destacan el uso de componentes funcionales, hooks, Context API, y formularios controlados con validación en tiempo real.</p>
              <h4 className="mt-2 font-bold">Validación y Gestión de Datos:</h4>
              <p>
                Se implementa validación en tiempo real en los formularios mediante Context API para controlar el estado global, junto con filtros dinámicos para facilitar la búsqueda y organización de productos.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default Proyect;