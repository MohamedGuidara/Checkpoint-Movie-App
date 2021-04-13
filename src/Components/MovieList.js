import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({filmm}) => {
    return (
        <div className="listfilm">
            {filmm.map((el)=>(
                    <MovieCard movie={el} />    ))
            }
        </div>
    )
}

export default MovieList
