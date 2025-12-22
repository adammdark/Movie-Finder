import { useEffect } from "react";
import Card from "../components/Card"
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import Loader from "../shared/Loader";

const Search = ({apiPath}) => {

  const [searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");
  const {data:movies} = useFetch(apiPath, queryTerm)
  

  useEffect(()=>{
    document.title = `${queryTerm}/CineBite`
  },[queryTerm])
  
  if(movies === null) return <Loader/>

  return (
    <main className="dark:bg-gray-800">
      <section>
        <p className="text-2xl text-gray-600">{movies.length === 0 ? `No results found for (${queryTerm})`: `Results for (${queryTerm})`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex overflow-x-auto space-x-4 snap-x snap-mandatory">
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

export default Search