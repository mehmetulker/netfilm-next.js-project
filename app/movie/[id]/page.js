import React from 'react'
import { notFound } from 'next/navigation'
import MovieContainer from '@/containers/movie'
import Movies from "@/mocks/movies.json"

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function MoviePage({ params, searchParams }) {
  await delay(10000)
    
  console.log(params.id)
  const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id)


  if (!movieDetail) {
    notFound();
  }

   if (searchParams.error==="true") {
  throw new Error("Error happened")
  }
  return (
    <div><MovieContainer movie={movieDetail}/></div>
  )
}

export default MoviePage