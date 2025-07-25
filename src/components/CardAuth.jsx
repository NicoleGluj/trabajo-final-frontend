import '../styles/components/CardAuth.css'

const CardAuth = (props) => {
  return (
    <section className='card-content'>
      <div className='card-title'>
        <h3>Mostrá tus productos. <br /> Conectá con más clientes.
        </h3>
      </div>
      {props.children}
    </section>
  )
}

export default CardAuth