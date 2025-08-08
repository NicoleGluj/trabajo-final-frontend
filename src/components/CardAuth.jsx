// import '../styles/components/CardAuth.css'

// bg-[#ececec] 


const CardAuth = (props) => {
  return (
    <section className="m-5 border-1 border-gray-300 shadow-lg rounded-2xl flex items-center justify-between max-[480px]:justify-center h-[85vh] max-w-[900px] min-[920px]:mx-auto">
      <div className="max-[480px]:hidden bg-[url(src/assets/image-women-shop.jpg)] bg-cover bg-top rounded-tl-2xl rounded-bl-2xl w-1/2 h-full flex items-start justify-end flex-col" >
      </div>
      {props.children}
    </section>
  )
}

export default CardAuth