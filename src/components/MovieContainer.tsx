import React from 'react'
import { Movies } from '../../typings'

type Props = {
    movie: Movies
}

const MovieContainer = ({movie}: Props) => {
  return (
    <div className='movie'>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} />
    </div>
  )
}

export default MovieContainer