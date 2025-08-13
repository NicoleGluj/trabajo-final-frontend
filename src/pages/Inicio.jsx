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
  const [search, setSearch] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])

  const fetchingProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products', { method: "GET" })
    const data = await response.json()

    setProducts(data)
    setFilteredProducts(data)
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    setFilteredProducts(filteredProducts => filteredProducts.filter((product) => product.id !== id))
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
      setFilteredProducts(prevProduct =>
        prevProduct.map((product) =>
          product.id === productToEdit.id
            ? data
            : product)
      )
    }
    setShowPopUp(null)
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSearch(value)

    if (!value) {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value) ||
        product.description.toLowerCase().includes(value)
      )
      setFilteredProducts(filtered)
    }
  }


  return (
    <Layout>
      <div className="p-5 m-4 rounded-2xl bg-[rgb(238,238,238)]">
        <h2 className="text-5xl max-[880px]:text-[50px] max-[480px]:text-[45px] font-bold mb-2 "
        >EXPLORA NUESTRO CATALOGO</h2>
        <p className="text-base"
        >Descubrí productos únicos y opciones para todos los gustos.</p>
        <div>
          <input
            type="text"
            placeholder="Buscar producto"
            onChange={handleSearch}
            value={search}
            className="border-1 border-gray-500 bg-white p-2 rounded-full w-full mt-7" />
        </div>
      </div>

      <div className="p-5 m-4 max-[480px]:m-0 rounded-2xl bg-[rgb(238,238,238)] max-[480px]:bg-white grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
        {
          filteredProducts.map((product) =>
            <div
              key={product.id}
              className="transform transition duration-300 hover:scale-103 p-4 bg-white rounded-2xl border-2 border-[#ffb500] flex flex-col items-center shadow-md max-h-[660px] w-auto">
              <div className="h-1/2 text-center p-4">
                <img className="object-contain h-full"
                  src={product.image} alt={`Imagen de ${product.title}`} />
              </div>
              <div className="h-1/2 flex flex-col items-center justify-around">
                <h2 className="font-bold text-2xl uppercase text-center line-clamp-2"
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
                      className="transform shadow-md transition duration-300 hover:scale-103 px-5 py-2 bg-[#ffb500] rounded-full text-white font-bold w-1/2"
                      onClick={() => handleOpenEdit(product)}
                    >ACTUALIZAR</button>
                    <button
                      onClick={() => handleDelete(product.id)} className="transform shadow-md transition duration-300 hover:scale-103 px-5 py- border-2 border-[#ffb500] rounded-full text-[#ffb500] font-bold w-1/2">BORRAR</button>
                  </div>
                }
              </div>
            </div>)
        }
      </div>

      {/* SECTION ACTUALIZAR */}
      {
        showPopUp &&
        <section
          className="fixed bg-white border-4 border-[#ffb500] top-1/2 w-auto min-w-[290px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl shadow-xl">
          <h2 className="text-4xl max-[880px]:text-[40px] max-[480px]:text-[36px] font-bold mb-2"
          >EDITAR PRODUCTO</h2>
          <form className="flex flex-col items-center justify-center mt-4"
            onSubmit={handleUpdate}>
            <div>
              <input
                className="p-2 bg-[rgba(243,243,243,0.58)] w-full border-1 rounded-xl border-amber-400 text-sm mb-4"
                type="text"
                placeholder="Ingrese el titulo"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)} />
              <input
                className="p-2   bg-[rgba(243,243,243,0.58)] w-full border-1 rounded-xl border-amber-400 text-sm mb-4"
                type="number"
                placeholder="Ingrese el precio"
                value={priceEdit}
                onChange={(e) => setPriceEdit(e.target.value)} />
              <textarea
                className="p-2  bg-[rgba(243,243,243,0.58)] w-full border-1 rounded-xl border-amber-400 text-sm mb-4"
                placeholder="Ingrese la descripcion"
                value={descriptionEdit}
                onChange={(e) => setDescriptionEdit(e.target.value)} ></textarea>
              <input
                className="p-2  bg-[rgba(243,243,243,0.58)] w-full border-1 rounded-xl border-amber-400 text-sm mb-4"
                type="text"
                placeholder="Ingrese la categoria"
                value={categoryEdit}
                onChange={(e) => setCategoryEdit(e.target.value)} />
              <input
                className="p-2  bg-[rgba(243,243,243,0.58)] w-full border-1 rounded-xl border-amber-400 text-sm mb-4"
                type="text"
                placeholder="Ingrese la URL de la imagen"
                value={imageEdit}
                onChange={(e) => setImageEdit(e.target.value)} />
            </div>
            <div className="flex flex-row w-full gap-2">
              <button
                class="p-1 overflow-hidden rounded-full border-2 border-[#ffb500] bg-white text-black font-medium transition-all duration-300 hover:bg-[#ffb500] hover:ring-2 hover:ring-[#ffb500] hover:text-white hover:ring-offset-2 w-full max-[480px]:w-min"
              >ACTUALIZAR</button>
              <button
                class="p-1 py-1 overflow-hidden rounded-full border-2 border-[#ffb500] bg-[#ffb500] text-black font-medium transition-all duration-300 hover:bg-[#ffb500] hover:ring-2 hover:ring-[#ffb500] hover:text-white hover:ring-offset-2 w-1/3 max-[480px]:w-min"
                onClick={() => setShowPopUp(null)}>CERRAR</button>

            </div>
          </form>

        </section>
      }
    </Layout>
  )
}

export default Inicio;