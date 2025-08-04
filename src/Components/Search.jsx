import React from 'react'

const Search = ({search,searchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="./search.svg" alt="search" />
            <input
            type="text"
            placeholder='Search for movies, series, actors...'
            value={search}
            onChange={(event) => searchTerm(event.target.value)} />
        </div>
    </div>
  )
}

export default Search
