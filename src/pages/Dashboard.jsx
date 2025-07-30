import { useEffect, useState } from "react"
import Layout from "../components/Layout"

const Dashboard = () => {
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

  return (
    <Layout>
      {
        products.map((product) =>
          <div>
            <img width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
            <h2 key={product.id}>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p><strong>{product.category}</strong></p>
            {
              user && <div>
                <button>ACTUALIZAR</button>
                <button>BORRAR</button>
              </div>
            }
          </div>)
      }
    </Layout>
  )
}

export default Dashboard;