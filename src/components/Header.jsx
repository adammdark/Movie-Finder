import { NavLink,useNavigate } from "react-router-dom"
import ThemeToggle from "../shared/ThemeToggle";

const Header = () => {

  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";

  const inActiveClass = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  
  const navigate = useNavigate();
  const handleChange = (e) => {

    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    navigate(`search?q=${queryTerm}`);
    handleClick();
  }

  const handleClick = (e)=>{
    const navbarSearch = document.getElementById("navbar-search");
    navbarSearch.classList.toggle("hidden");
  }
  
  return (
    <header>
      <nav className="bg-pink-400 border-gray-200 dark:bg-gray-900">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cine Bite</span>
          </NavLink>
           <span className="block md:hidden text-2xl"><ThemeToggle/></span>
          <div className="flex md:order-2">
            <button type="button" id="nav-btn" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"  onClick={handleClick}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleChange}>
                <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </form>
            </div>
            <button data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white 
             rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
             focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false" id="search-btn" onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              </div>
              <form onSubmit={handleChange}>
                <input type="text" id="mobile-search" name="search" className="block w-full p-2 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </form>
            </div>
            <ul className="sm:flex flex-col p-4 mt-4 font-medium border rounded-lg bg-gray-200 md:p-2 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" id="navbar">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end onClick={handleClick}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass} onClick={handleClick}>Top</NavLink>
              </li>
              <li>
                <NavLink to="movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass} onClick={handleClick} >Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass}onClick={handleClick}>Upcoming</NavLink>
              </li>
            </ul>
           <span className="hidden md:block lg:absolute left-[70%] top-4 "><ThemeToggle/></span>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header