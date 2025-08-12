
const Footer = () => {
  return (
    <footer
      id='content-footer'
      className="bg-[#ffb500] mt-10">
      <div className="flex justify-around text-white p-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl mb-2"
          >CONTACTO</h3>
          <p>TheProductArea@gmail.com</p>
          <p>+54 9 11 3456 7898</p>
          <p>Buenos Aires, Argentina</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl mb-2"
          >DEJANOS TU COMENTARIO</h3>
          <label>Correo Electronico</label>
          <input
            type="email"
            className="bg-white p-1 rounded-2xl" />
          <label>Mensaje</label>
          <textarea className="bg-white rounded-2xl"></textarea>
          <button className="bg-white px-7 py-1 text-gray-600 rounded-2xl w-min font-semibold text-sm hover:scale-105 hover:text-black transition-all duration-200  "
          >ENVIAR</button>
        </div>
      </div>
      <div className="text-center font-normal text-black border-t-1 mx-5">
        <p className="mt-3"
        >Sitio desarrollado por<a href="https://www.linkedin.com/in/nicole-gluj-640805210/" target="blank"> Nicole Gluj</a></p>
      </div>
    </footer>
  )
}

export default Footer;