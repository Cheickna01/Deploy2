import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Info from "./Info";
import { useState, useEffect } from "react";
import { firstdata } from "./firstdata";
import Panier from "./Panier";
import BeforeHeader from "./BeforeNav";
import NavComponent from "./NavComponent";

export default function Main() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState(firstdata);
  const [formSubmit, setFormSubmit] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  console.log(currentPage);

  const logo =
    "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";
  let url;
  url =
    "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&query=" +
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
        setFormSubmit(false);
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
    setFormSubmit(true);
    setCurrentPage(page);
  };

  function nextPage() {
    setFormSubmit(true);
    setCurrentPage(currentPage + 1);
  }

  function previewPage() {
    setFormSubmit(true);
    setCurrentPage(currentPage - 1);
  }

  return (
    <>
      <BrowserRouter>
      <BeforeHeader />
      <NavComponent
        logo={logo}
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
        setCurrentPage={setCurrentPage}
        handleSubmit={handleSubmit}
      />
        <Routes>
          <Route
            path="/"
            element={
              <App
                logo={logo}
                movieSearch={movieSearch}
                setMovieSearch={setMovieSearch}
                setCurrentPage={setCurrentPage}
                handleSubmit={handleSubmit}
                formSubmit={formSubmit}
                movies={movies}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                nextPage={nextPage}
                previewPage={previewPage}
                firstdata={firstdata}
              />
            }
          />
          <Route path="/info/:id" element={<Info movies={movies}/>}/>
          <Route path="/panier" element={<Panier/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
