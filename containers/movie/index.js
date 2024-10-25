import { notFound } from "next/navigation";
import React from 'react'
import FeaturedMovie from '@/components/featured-movie'

function MovieContainer({movie}) {
  return (
    <div><FeaturedMovie movie={movie} isCompact={false} /></div>
  )
}

export default MovieContainer