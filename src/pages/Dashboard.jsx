import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h2>cargar nuevo producto</h2>
      </div>
      <form>
        <div>
          <label>Nombre del producto</label>
          <input type="text" name="nombre" />
        </div>
        <div>
          <label>Precio del producto</label>
          <input type="number" name="precio" />
        </div>
        <div>
          <label>Descripcion del producto</label>
          <input type="text" name="descripcion" />
        </div>
        <button>GUARDAR PRODUCTO</button>
      </form>
    </Layout>
  )
}

export default Dashboard;