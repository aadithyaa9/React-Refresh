import React, { useState , useEffect }  from 'react'
import Search from './Components/Search.jsx'
import Spinner from './Components/Spinner.jsx';


const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:  `Bearer ${API_KEY}`
  }
}
const App = () => {
  const [search, setSearch] = useState('');
  const [errorMessage , setErrorMessage] = useState('');
  const [Loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    setLoading(false);
    
    setErrorMessage('');
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint , API_OPTIONS);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.results === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies. Please try again later.');
        setMovies([]);
        return;
      }
      setMovies(data.results || []);
    }
    catch (error) {
      console.log(error)
      setErrorMessage('Failed to fetch movies. Please try again later.');
      
    }
    finally {
      
      setLoading(false)
      
    }
  }

  useEffect(() => {
    fetchMovies();
  } ,[]) 
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> for you!!
          </h1>
          <Search search={search} searchTerm={setSearch} />
        </header>

        <section className="all-movies">
          <h2 className='mt-[40px]'>All Movies</h2>
          {Loading ? <Spinner/>: errorMessage ? (
            <p className='error'>{errorMessage}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <p key={movie.id} className='text-white'>{movie.title}</p>
                ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App
