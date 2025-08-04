import React, { useState } from 'react'
import Search from './Components/Search.jsx'

const App = () => {
  const [search,setSearch] = useState('');
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> for you!!
          </h1>
        </header>

        <Search search={search} searchTerm={setSearch} />
        <h2>{search}</h2>
      </div>
    </main>
  );
}

export default App
