import React from 'react'
import CategoriesLoading from '@/components/catagories/loading'
import FeatureMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-seciton/loading'
 function Loading() {
    
  return (
    <div>
      <FeatureMovieLoading/>      
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading/>
    </div>
  )
}

export default Loading