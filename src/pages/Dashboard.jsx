import { useState } from "react";
import Layout from "../components/Layout";

const Dashboard = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name || !price || !description) {
      setError("Debes completar todos los campos")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: ""
    }

    const response = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    setProduct(newProduct)

    setName("")
    setPrice("")
    setDescription("")
  }


  return (
    <Layout>
      <div>
        <h2>cargar nuevo producto</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del producto</label>
          <input
            type="text"
            name="nombre"
            onChange={(e) => setName(e.target.value)}
            value={name} />
        </div>
        <div>
          <label>Precio del producto</label>
          <input
            type="number"
            name="precio"
            onChange={(e) => setPrice(e.target.value)}
            value={price} />
        </div>
        <div>
          <label>Descripcion del producto</label>
          <input
            type="text"
            name="descripcion"
            onChange={(e) => setDescription(e.target.value)}
            value={description} />
        </div>
        <button>GUARDAR PRODUCTO</button>
      </form>
      {
        error && <div>{error}</div>
      }
      {
        product && <div>
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
          <h3>{product.description}</h3>
        </div>
      }
    </Layout>
  )
}

export default Dashboard;