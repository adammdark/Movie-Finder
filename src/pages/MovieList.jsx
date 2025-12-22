import { useEffect, useState } from "react";
import Card from "../components/Card"
import useFetch from "../hooks/useFetch";
import Loader from "../shared/Loader";


const MovieList = ({apiPath, title}) => {
  
  useEffect(()=>{
    document.title = `${title}Cinibite`
  },[title])
  const {data:movies} = useFetch(apiPath);

  if(movies === null) return <Loader/>
  
  return (
    <main className="dark:bg-blue-950">
      <section className="max-w-7xl mx-auto py-7">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex overflow-x-auto space-x-4 snap-x snap-mandatory
">
          {
            movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}
 
export default MovieList