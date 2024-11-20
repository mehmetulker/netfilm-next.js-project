import React from 'react'
import HomeContainer from '@/containers/home'
import Movies from "@/mocks/movies.json"

const API_URL = "https://api.themoviedb.org/3"

const getSingleCategories = async (genreId) => {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
    );
   return response.json();
};

const getCategories = async () => {
    const response = await fetch(
      `${API_URL}/genre/tv/list?api_key=${process.env.API_KEY}&page=1`
    );
   return response.json();
};
const getPopularMovies = async () => {

    const response = await fetch(
      `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
    );
   return response.json();
};
const getTopRateMovies = async () => {

    const response = await fetch(
      `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
    );
   return response.json();
};


async function HomePage({ params }) {

  const topRatedPromise = await getTopRateMovies();
  const popularPromise = await getPopularMovies();
  const categoriesPromise= await getCategories();
  // console.log(topRatedMovies)
 
  const [{ results: topRatedMovies }, { results: popularMovies },{genres:catagories}] = await Promise.all([topRatedPromise, popularPromise,categoriesPromise]);

    
    
       let selectedCategory;    
  if (params.category?.length > 0) {
    const { results } = await getSingleCategories(params.category[0]);
    selectedCategory = results
    console.log(params)
  }
  return (
    <div><HomeContainer topRatedMovies={topRatedMovies} popularMovies={popularMovies} catagories={catagories} selectedCategory={{ id: params.category?.[0] ?? "", movies: selectedCategory ? selectedCategory.slice(0, 7) : [] }} /></div>
  )
}

export default HomePage