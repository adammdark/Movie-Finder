import { useEffect, useState } from "react";
import {options} from "../Utils/Options"

const useFetch = (apiPath,queryTerm="") => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        async function fetchMovies() {

            const response = await fetch(`https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`, options);

            const data = await response.json();

            setData(data.results);
            setLoading(false);

        }
        fetchMovies();
        
    }, [apiPath,queryTerm]);

    return { data: loading ? null : data };
}

export default useFetch