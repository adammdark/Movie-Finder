import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackUp from "../assets/backup.jpg"
import { options } from "../Utils/Options";
import Loader from "../shared/Loader";

const MovieDetails = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();


  const { title, id, overview, poster_path, release_date, genres,vote_average,vote_count } = data;
  const year = release_date ? release_date.split('-')[0] : "";
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : BackUp;
  
  useEffect(()=>{
    document.title = `${title}/Cinibite`
  },[title])
 
  useEffect(() => {

    async function fetchMovies() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchMovies();
  }, [])

  if (loading) return <Loader />;
  
  return (
    <main className="dark:bg-gray-800">
    <section className = "movie-details flex flex-wrap justify-around py-5 items-center gap-10 xl:gap-x-0">
        <div className="max-w-sm xl:ml-15">
          <img src={image} className="rounded-2xl border-4 dark:border-amber-50 h-90 sm:h-full"/>
        </div>
        <div className="max-w-xl xl:max-w-2xl text-black  dark:text-white text-lg text-center lg:text-start ">
          <h3 className="sm:text-3xl text-2xl font-bold">{title} ({year})</h3>
          <p className="my-4">{overview}</p>
          <p className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
            {genres ? (genres.map((genre) => (
              <span className="bg-pink-100 text-pink-800 text-sm font-bold me-2 px-3.5 py-2.5 rounded-full dark:bg-pink-900 dark:text-white" key={genre.name}>{genre.name}</span>
            ))) : ""}
          </p>
          <div className="flex items-center mt-5 justify-center lg:justify-start">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-xl font-bold text-black dark:text-white">{Math.floor(vote_average*10)/10}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" className="text-xl font-semibold text-black dark:text-white underline hover:no-underline ">{vote_count} reviews</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MovieDetails