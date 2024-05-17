import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavComponent from "./components/NavComponent";
import MovieComponent from "./components/MovieComponent";
import Pagination from "./components/PaginationComponent";
import { firstdata } from "./components/firstdata";
import spinner from "./img/Spinner.svg";
function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState(firstdata);
  const [formSubmit, setFormSubmit] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  console.log(currentPage)

  const logo =
    "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";
  let url;
  url =
    "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=" +
    movieSearch +
    "&page=" +
    currentPage;

  const fetching = () => {
    fetch(url)
      .then((rep) => {
        setFormSubmit(true);
        console.log(rep);
        return rep.json();
      })
      .then((res) => {
        setMovies(res.results);
        setTotalPages(res.total_pages);
        setFormSubmit(false)
      });
  };

  useEffect(() => {
    if (formSubmit) {
      fetching();
    }
  }, [currentPage]);

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmit(true);
    setTimeout(() => {
      fetching();
    }, 1000);
  }

  const handlePageChange = (page) => {
    setFormSubmit(true)
    setCurrentPage(page);
  };

  function nextPage(){
    setFormSubmit(true)
    setCurrentPage(currentPage+1)
  }

  function previewPage(){
    setFormSubmit(true)
    setCurrentPage(currentPage-1)
  }

  return (
    <>
      <NavComponent
        logo={logo}
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
        setCurrentPage={setCurrentPage}
        handleSubmit={handleSubmit}
      />
      <div className="app mt-5">
        <h1 className="text-center">Nos films et series</h1>
        {!formSubmit ? (
          <MovieComponent movies={movies} />
        ) : (
          <div className="spinner">
            <img src={spinner} alt="spinner" className="text-center"/>
          </div>
        )}
        <Pagination
          movies={movies}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          nextPage={nextPage}
          previewPage={previewPage}
          firstdata={firstdata}
        />
      </div>
    </>
  );
}

export default App;
