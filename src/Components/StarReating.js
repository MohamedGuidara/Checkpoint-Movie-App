import React from 'react'

const StarReating = ({rating,handleRating}) => {

    const stars = (rating) =>{
          var star = [];
        for ( let i =1 ; i<6 ; i++){
            if(i<rating+1){
                star.push(<span onClick={()=>handleRating(i)} style={{color:"gold" , fontSize:"30px" }} >★</span>)
            }
            else{
                star.push(<span onClick={()=>handleRating(i)} style={{color:"rgb(112, 117, 122)" , fontSize:"30px"}} >★</span>)
            }
            
        }
        return star
    }
    
    return (
        <div className="stp">
            {stars(rating)}
            
        </div>
    )
}
StarReating.defaultProps = {
    rating:1,
    handleRating:()=>{},
}

export default StarReating
