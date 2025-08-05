import '../styles/components/footer.css'

const Footer = () => {
  return (
    <footer id='content-footer'>
      <div id='text-footer'>
        <div className='contact-content'>
          <h3>CONTACTO</h3>
          <p>TheProductArea@gmail.com</p>
          <p>+54 9 11 3456 7898</p>
          <p>Buenos Aires, Argentina</p>
        </div>
        <div className='coment-content'>
          <h3>DEJANOS TU COMENTARIO</h3>
          <label>Correo Electronico</label>
          <input type="email" />
          <label>Mensaje</label>
          <textarea></textarea>
        </div>
      </div>
      <p className='text-desarrollado'>Sitio desarrollado por<a href="https://www.linkedin.com/in/nicole-gluj-640805210/" target="blank"> Nicole Gluj</a></p>
    </footer>
  )
}

export default Footer;