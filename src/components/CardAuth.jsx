
const CardAuth = (props) => {
  return (
    <section className="m-5 border-1 border-gray-300 shadow-lg rounded-2xl flex items-center justify-between max-[480px]:justify-center h-[85vh] min-[2560px]:h-[75vh] max-w-[900px] min-[2560px]:max-w-[1500px] min-[880px]:mx-auto">
      <div className="max-[480px]:hidden bg-[url(src/assets/image-women-shop.jpg)] bg-cover bg-top rounded-tl-2xl rounded-bl-2xl w-1/2 h-full flex items-start justify-end flex-col" >
      </div>
      {props.children}
    </section>
  )
}

export default CardAuth