import React from 'react'

const MovieSerie = ({setTogglem,togglem,setToggles,toggles}) => {
    return (
        <div className="movie-serie">
            <button onClick={()=>setTogglem(!togglem)}  ><h1>Home</h1></button>
            <button onClick={()=>setTogglem(!togglem)&&setToggles(true)}  ><h1>Movie</h1></button>
            <button onClick={()=>setToggles(!toggles)&&setTogglem(true)}  ><h1>serie</h1></button>
        </div>
    )
}

export default MovieSerie
