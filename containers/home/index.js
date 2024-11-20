import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from   "@/mocks/genres.json"
import FeaturedMovie from '@/components/featured-movie'

import Categories from '@/components/catagories'
import MoviesSection from '@/components/movies-seciton'

function HomeContainer({ topRatedMovies=[],popularMovies=[],catagories=[],selectedCategory }) {
  // console.log(selectedCategory)
  return (
    <div>
      <FeaturedMovie movie={popularMovies?.[0]} />
      <Categories categories={catagories.slice(0, 5)} />
        {selectedCategory.movies.length>0 && (<MoviesSection title={catagories.find(genre=>`${genre.id}`===selectedCategory.id)?.name} movies={selectedCategory.movies} />)
    }
    
      <MoviesSection title="Popular Films" movies={topRatedMovies.slice(1,7)} />
      <MoviesSection title="Your Fovorites " movies={popularMovies.slice(7,13)}/>
    
    </div>
  )
}

export default HomeContainer