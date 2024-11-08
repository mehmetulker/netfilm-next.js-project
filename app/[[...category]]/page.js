import HomeContainer from '@/containers/home'
import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from   "@/mocks/genres.json"

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


  async  function HomePage({ params }) {
 
  await delay(2000)
    
    let selectedCategory;    
    if (params.category?.length> 0) {
        selectedCategory = true;
    }
  return (
      <div><HomeContainer selectedCategory={{ id: params.category?.[0]??"", movies:selectedCategory? Movies.results.slice(0,7):[]} } /></div>
  )
}

export default HomePage