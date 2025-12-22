import { useEffect } from "react"
import PNF from "../assets/404.png"
import { Link } from "react-router-dom"

const PageNotFound = () => {

  useEffect(()=>{
    document.title = "Page Not Found/Cinibite"
  },[])
  return (
    <main className="flex items-center justify-center p-4">
      <section className="text-center">
        <img src={PNF} alt="404" />
        <Link to="/">
          <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:cursor-pointer">Go to Home</button>
        </Link>
      </section>
    </main>
  )
}

export default PageNotFound