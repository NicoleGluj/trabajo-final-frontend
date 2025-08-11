import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { useAuth } from "../context/UserContext"

const Inicio = () => {
  const [products, setProducts] = useState([])
  const { user } = useAuth()

  const [productToEdit, setProductToEdit] = useState(null)
  const [showPopUp, setShowPopUp] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")

  const fetchingProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products', { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    setProducts(prevProducts => prevProducts.filter((product) => product.id != id))
  }

  const handleOpenEdit = (product) => {
    setShowPopUp(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify(updatedProduct)
      })

    if (response.ok) {
      const data = await response.json()
      setProducts(prevProduct =>
        prevProduct.map((product) =>
          product.id === productToEdit.id
            ? data
            : product)
      )
    }
  }


  return (
    <Layout>
      <div className="p-5 m-4 rounded-2xl bg-[rgb(238,238,238)]">
        <h2 className="text-5xl max-[880px]:text-[50px] max-[480px]:text-[45px] font-bold mb-2"
        >EXPLORA NUESTRO CATALOGO</h2>
        <p className="text-base"
        >Descubrí productos únicos y opciones para todos los gustos.</p>
      </div>
      <div className="p-5 m-4 rounded-2xl bg-[rgb(238,238,238)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
        {
          products.map((product) =>
            <div
              key={product.id}
              className="p-4 bg-white rounded-2xl border-2 border-[#ffb500] flex flex-col items-center shadow-md h-full">
              <div className="h-1/2 text-center p-4">
                <img className="object-contain h-full"
                  src={product.image} alt={`Imagen de ${product.title}`} />
              </div>
              <div className="h-1/2 flex flex-col items-center justify-around">
                <h2 className="font-bold text-2xl uppercase text-justify"
                >{product.title}</h2>
                <p className="text-gray-500 line-clamp-3"
                >{product.description}</p>
                <h3 className="text-3xl font-bold text-[#ffb500]"
                >${product.price}</h3>
                <h4 className="uppercase text-sm text-gray-500 font-semibold"
                >Categoria: {product.category}</h4>
                {
                  user && <div className="flex flex-row gap-3 w-full">
                    <button
                      className="px-5 py-2 bg-[#ffb500] rounded-full text-white font-bold w-1/2"
                      onClick={() => handleOpenEdit(product)}
                    >ACTUALIZAR</button>
                    <button
                      onClick={() => handleDelete(product.id)} className="px-5 py- border-2 border-[#ffb500] rounded-full text-[#ffb500] font-bold w-1/2">BORRAR</button>
                  </div>
                }
              </div>
            </div>)
        }
      </div>

      {/* SECTION ACTUALIZAR */}
      {
        showPopUp && <section className="content-popup">
          <h2>Editar Producto</h2>
          <form className="content-edit-form" onSubmit={handleUpdate}>
            <div className="content-input-edit">
              <input
                type="text"
                placeholder="Ingrese el titulo"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)} />
              <input
                type="number"
                placeholder="Ingrese el precio"
                value={priceEdit}
                onChange={(e) => setPriceEdit(e.target.value)} />
              <textarea
                placeholder="Ingrese la descripcion"
                value={descriptionEdit}
                onChange={(e) => setDescriptionEdit(e.target.value)} ></textarea>
              <input
                type="text"
                placeholder="Ingrese la categoria"
                value={categoryEdit}
                onChange={(e) => setCategoryEdit(e.target.value)} />
              <input
                type="text"
                placeholder="Ingrese la URL de la imagen"
                value={imageEdit}
                onChange={(e) => setImageEdit(e.target.value)} />
            </div>
            <div className="content-button-edit">
              <button onClick={() => setShowPopUp(null)}>X CERRAR</button>
              <button>ACTUALIZAR</button>
            </div>
          </form>

        </section>
      }
    </Layout>
  )
}

export default Inicio;