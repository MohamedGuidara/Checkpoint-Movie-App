import { useState } from "react";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { moviesData } from "./Films";
import MovieSerie from "./MovieSerie";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const handleadd = (newMovie) => setMovies([...movies, newMovie]);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(1);
  const [togglem, setTogglem] = useState(true);
  const [toggles, setToggles] = useState(true);
  // const handletoggle = (toggle) => setToggle({toggle:[!toggle]})
  //handle changes in the search input faeld
  const handlechange = (e) => setSearchValue(e.target.value);
  //hadle rating start search rating
  const handleRating = (rate) => setSearchRating(rate);
  return (
    <div className="App">
      <Search
        handlechange={handlechange}
        handleRating={handleRating}
        searchValue={searchValue}
        rating={searchRating}
      />
      <MovieSerie
        setTogglem={setTogglem}
        togglem={togglem}
        setToggles={setToggles}
        toggles={toggles}
      />
      <MovieList
        filmm={
          movies.filter(
            (el) =>
              el.name
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase()) &&
              el.rating >= searchRating)
          //  && togglem === false
          //   ? movies.filter(
          //       (el) =>
          //         el.desc == "m" &&
          //         el.name
          //           .toLocaleLowerCase()
          //           .includes(searchValue.toLocaleLowerCase())
          //     )
          //   : movies && toggles === false
          //   ? movies.filter(
          //       (el) =>
          //         el.desc == "s" &&
          //         el.name
          //           .toLocaleLowerCase()
          //           .includes(searchValue.toLocaleLowerCase())
          //     )
          //   : movies
        }
      />
      <AddMovies movies={movies} handleadd={handleadd} />
    </div>
  );
}

export default App;
