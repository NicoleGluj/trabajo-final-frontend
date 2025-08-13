import { Link } from "react-router-dom";
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <div className="p-5 m-4 rounded-2xl bg-[rgb(238,238,238)] flex flex-col items-center justify-center h-[90vh]">
        <h2 className="text-9xl font-bold text-[#ffb500]"
        >OOPS!</h2>
        <h3 className="text-2xl font-bold mb-6"
        >404 - PAGE NOT FOUND</h3>
        <Link
          to={"/"}
          class="px-5 py-1 overflow-hidden rounded-full border-2 border-[#ffb500] bg-white text-black font-medium transition-all duration-300 hover:bg-[#ffb500] hover:ring-2 hover:ring-[#ffb500] hover:text-white hover:ring-offset-2 "
        >VOLVER A INICIO</Link>
      </div>
    </Layout>
  )
}

export default NotFound;