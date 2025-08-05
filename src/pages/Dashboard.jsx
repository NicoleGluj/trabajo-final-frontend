import { useState } from "react";
import Layout from "../components/Layout";
import '../styles/pages/dashboard.css'


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
      <div className="dash-title">
        <h2>cargar nuevo producto</h2>
      </div>
      <form className="dash-form-content" onSubmit={handleSubmit}>
        <div className="dash-form-inputs">
          <label>Nombre del producto</label>
          <input
            type="text"
            name="nombre"
            onChange={(e) => setName(e.target.value)}
            value={name} />
        </div>
        <div className="dash-form-inputs">
          <label>Precio del producto</label>
          <input
            type="number"
            name="precio"
            onChange={(e) => setPrice(e.target.value)}
            value={price} />
        </div>
        <div className="dash-form-inputs">
          <label>Descripcion del producto</label>
          <textarea
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