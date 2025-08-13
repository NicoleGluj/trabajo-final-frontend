import { useState } from "react";
import Layout from "../components/Layout";


const Dashboard = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!name || !price || !description) {
      setError('Los campos "Nombre", "Precio" y "Descripción" son obligatorios')
      return
    } else if (description.length <= 10) {
      setError("La descripcion debe superar los 10 caracteres")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: category || "general",
      image: image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7xozFABSe4vyb4xZXW57ZTrW7Wzk25pVpg8h2Qx-CEHzWsFbslnEmrCRPKrhXCfKgCo&usqp=CAU"
    }

    const response = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    setProduct(newProduct)

    if (response.ok) {
      setSuccess("El producto ha sido creado con exito")
    }

    setName("")
    setPrice("")
    setDescription("")
    setCategory("")
    setImage("")
  }

  const handleCloseProduct = () => {
    setProduct(null)
    setSuccess("")
  }


  return (
    <Layout>
      <div className="p-5 m-4 rounded-2xl bg-[rgb(238,238,238)]">
        <h3 className="text-5xl max-[880px]:text-[50px] max-[480px]:text-[45px] font-bold mb-3"
        >CARGAR NUEVO PRODUCTO</h3>
        <p>Completá los siguientes campos para añadir un nuevo producto al catalogo.</p>
      </div>
      <form
        className="p-5 m-4 rounded-2xl bg-[rgb(238,238,238)]"
        onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-center">
          <label className="font-bold text-lg mb-2"
          >Nombre del producto *</label>
          <input
            className="bg-white w-full p-1 rounded-xl border-1 border-[#ffb500] mb-6 text-gray-400 pl-3"
            placeholder="Ej: Camiseta de mujer"
            type="text"
            name="nombre"
            onChange={(e) => setName(e.target.value)}
            value={name} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-bold text-lg mb-2"
          >Precio del producto *</label>
          <input
            className="bg-white w-full p-1 rounded-xl border-1 border-[#ffb500] mb-6 text-gray-400 pl-3"
            placeholder="Ej: 10.000"
            type="number"
            name="precio"
            onChange={(e) => setPrice(e.target.value)}
            value={price} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-bold text-lg mb-2"
          >Descripcion del producto *</label>
          <textarea
            className="bg-white w-full p-1 rounded-xl border-1 border-[#ffb500] mb-6 text-gray-400 pl-3"
            placeholder="Ej: Camiseta de mujer confeccionada en algodón suave, de corte cómodo y estilo versátil. Ideal para usar todos los días, combinando confort y moda."
            type="text"
            name="descripcion"
            onChange={(e) => setDescription(e.target.value)}
            value={description} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-bold text-lg mb-2"
          >Categoria (opcional)</label>
          <input
            className="bg-white w-full p-1 rounded-xl border-1 border-[#ffb500] mb-6 text-gray-400 pl-3"
            placeholder="Ej: ropa, electronica, hogar"
            type="text"
            name="categoria"
            onChange={(e) => setCategory(e.target.value)}
            value={category} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-bold text-lg mb-2"
          >URL de la imagen (opcional)</label>
          <input
            className="bg-white w-full p-1 rounded-xl border-1 border-[#ffb500] mb-6 text-gray-400 pl-3"
            placeholder="Ej: https://imagen.jpg"
            type="text"
            name="imagen"
            onChange={(e) => setImage(e.target.value)}
            value={image} />
        </div>
        <button class="px-5 py-1 overflow-hidden rounded-full border-2 border-[#ffb500] bg-white text-black font-medium transition-all duration-300 hover:bg-[#ffb500] hover:ring-2 hover:ring-[#ffb500] hover:text-white hover:ring-offset-2">
          GUARDAR PRODUCTO
        </button>
        {
          error && <div className="bg-red-500/10 w-fit p-2 mt-6 rounded-2xl border-2 border-red-500"
          >{error}</div>
        }
        {
          success && <div className="bg-green-500/20 w-fit p-3 mt-6 rounded-2xl border-2 border-green-500"
          >{success}</div>
        }
      </form>
      {
        product &&
        <div>
          <div>
            <h3 className="m-4 mt-6 text-xl max-[880px]:text-[20px] max-[480px]:text-[18px] font-semibold mb-3 text-gray-600"
            >Visualización del nuevo producto:</h3>
          </div>
          <div className="m-4 p-4 bg-white rounded-2xl border-2 border-[#ffb500] flex flex-col items-center shadow-md h-full max-w-[300px]">
            <div className="h-1/2 text-center p-4">
              <img className="object-contain h-full"
                src={product.image} alt={`Imagen de ${product.title}`} />
            </div>
            <div className="h-1/2 flex flex-col items-center justify-around gap-5">
              <h2 className="font-bold text-2xl uppercase text-justify"
              >{product.title}</h2>
              <p className="text-gray-500 line-clamp-3"
              >{product.description}</p>
              <h3 className="text-3xl font-bold text-[#ffb500]"
              >${product.price}</h3>
              <h4 className="uppercase text-sm text-gray-500 font-semibold"
              >Categoria: {product.category}</h4>
            </div>
          </div>
          <button
            onClick={handleCloseProduct}
            className="m-4 transform rounded-2xl shadow-md transition duration-300 hover:scale-103 flex items-center flex-col mt-4 p-2 text-sm bg-[#FFB500] text-white font-medium"
          >CERRAR VISUALIZACIÓN</button>
        </div>
      }
    </Layout>
  )
}

export default Dashboard;