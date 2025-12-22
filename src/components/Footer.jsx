import { Link } from "react-router-dom"

const Footer = () => {
  return (

    <footer className="bg-blue-950 shadow-sm dark:bg-gray-900">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between text-center">
        <span className="text-sm text-gray-500 sm:text-center text-white">© 2025 <Link to="/" className="hover:underline">CiniBite</Link>. <span>All Rights Reserved.</span>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 text-white sm:mt-0 justify-center">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Youtube</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Facebook</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="#" className="hover:underline">X</a>
          </li>
        </ul>
      </div>
    </footer>


  )
}

export default Footer