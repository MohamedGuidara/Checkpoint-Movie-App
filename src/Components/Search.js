import React from 'react'
import StarReating from './StarReating'


const Search = ({searchValue,handlechange,rating,handleRating}) => {
    return (
        
        <nav >
            <h1 className="logo-site">Films</h1>
            
            <form className="head">
                <div className="titlee">
                <input type="text" value={searchValue} onChange={handlechange} className="start-input" placeholder="Recherche" style={{fontSize:20}}/> 
                <StarReating rating={rating} handleRating={handleRating} />
                </div>
            </form>
               
            </nav>   
        
    )
}

export default Search
