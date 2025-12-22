import { Link } from "react-router-dom";
import BackUp from "../assets/backup.jpg"

const Card = ({ movie }) => {

  const { title, id, overview, poster_path,release_date } = movie;
  const year = release_date.split('-')[0];
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : BackUp;

  return (
    <>
      <Link to={`movie/${id}`}>
        <div className="sm:max-w-sm mx-auto bg-gray-300 rounded-lg shadow-sm dark:bg-gray-800 transform transition-all duration-200 hover:-translate-y-3 hover:shadow-lg sm:h-150 h-100 min-w-55 overflow-y-hidden mb-0 mt-10 sm:mt-0 border-2 dark:border-amber-50">

          <img className="rounded-t-lg w-full sm:h-96 h-60" src={image}/>

          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:line-clamp-3 line-clamp-2">{title}  ({year})</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{overview}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card