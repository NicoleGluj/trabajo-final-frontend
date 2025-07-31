import { useEffect, useState } from "react"
import Layout from "../components/Layout"

const Inicio = () => {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(true)
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
      {
        showPopUp && <section>
          <h2>Editar Producto</h2>
          <button onClick={() => setShowPopUp(null)}>cerrar</button>
          <form onSubmit={handleUpdate}>
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
            <button>ACTUALIZAR</button>
          </form>
        </section>
      }
      {
        products.map((product) =>
          <div key={product.id}>
            <img width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
            <h2 >{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p><strong>{product.category}</strong></p>
            {
              user && <div>
                <button onClick={() => handleOpenEdit(product)}>ACTUALIZAR</button>
                <button onClick={() => handleDelete(product.id)}>BORRAR</button>
              </div>
            }
          </div>)
      }
    </Layout>
  )
}

export default Inicio;