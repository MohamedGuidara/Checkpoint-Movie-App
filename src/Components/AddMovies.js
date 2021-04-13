import React, { useState } from 'react'

import Modal from 'react-modal';
import StarReating from './StarReating';
  



const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : '65%',
    bottom                : '10%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    
  }
};
Modal.setAppElement('#root')
const AddMovies = ({handleadd}) => {
    
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
 
 
  function closeModal(){
    setIsOpen(false);
  }

  // const [movies, setMovies] = useState(moviesData)

const [form, setForm] = useState({image:"" , rating:0 ,name:"" ,date:"" })
// const [imgfilm , setImgfilm] = useState ({ifilm:""})
// const [ratingfilm , setRatingfilm] = useState ({rfilm:""})
// const [namefilm , setNamefilm] = useState ({nfilm:""})
// const [datefilm , setDatefilm] = useState ({dfilm:""})
//  newadd = (a,z,e,r) => {
    // const newmovies = {
    //   image:{imgfilm},
    //   rating:{ratingfilm},
    //   name:{namefilm},
    //   date:{datefilm},
    //   desc:"",
    // }
//     return newmovies
    
//     }


//handle change in the form input fields
const handleChange = (e) =>{
  setForm ({ ...form,[e.target.name]:e.target.value})
}
//handle submit
const handlesubmit =(e)=>{
  e.preventDefault()
  const newMovie = {...form,desc:""}
  handleadd(newMovie)
  closeModal()
}
const handleRating = (rate) =>{
  setForm({...form,rating:rate})
}
    return (
        <div className="addmovie">
            <button onClick={openModal} className="badd" ><h1>Add movie</h1></button>
        <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          
        >
            <form  onSubmit={handlesubmit} >
                <div>
                <label>Movies name</label>
                <input type="text" value={form.name} name="name" onChange={handleChange} ></input> 
                </div>
                <div>
                <label>Movie poster</label>
                <input type="url" value={form.image} name="image" onChange={handleChange}  ></input>
                </div>
                 <StarReating handleRating={handleRating} rating={form.rating} /> 
                 <div>
                 <label>Release date</label>
                <input type="date" value={form.date} name="date" onChange={handleChange}  ></input> 
                </div>
                {/* <label>Rating </label>
                <input type="text" value={form.rating} name="rating" onChange={handleChange}  ></input> */}
                
                <div>
                    <button type="submit"  >Add</button>
                    <button onClick={closeModal} >Cancel</button>
 
                </div>
            </form> 

        </Modal>
        </div>
    )
}

export default AddMovies
