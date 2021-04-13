import React from 'react'
import StarReating from './StarReating'
import '../App.css';

const MovieCard = ({movie}) => {
    return (
        <div className="arriere">
            <div className="aarriere" > 
            <div className="starts" >
            <StarReating rating={movie.rating}  />
            </div>
            <div className="hoverdesc" > <p>{movie.desc}</p> </div>
            <img src={movie.image} alt="" className="lesimages" ></img>
            <div className="name-date" >
            <h3 className="namefilm" style={{fontSize:"25px"}} >{movie.name} </h3>
            <h2 style={{fontSize:"15px",marginTop:"-25px" }}  > {movie.date} </h2>
            
            </div>
            </div>
            
        </div>
    )
}

export default MovieCard
