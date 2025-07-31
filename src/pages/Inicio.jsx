import { useEffect, useState } from "react"
import Layout from "../components/Layout"

const Inicio = () => {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(true)

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

  return (
    <Layout>
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
                <button>ACTUALIZAR</button>
                <button onClick={() => handleDelete(product.id)}>BORRAR</button>
              </div>
            }
          </div>)
      }
    </Layout>
  )
}

export default Inicio;