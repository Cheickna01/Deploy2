import "./App.css";
import { useState, useEffect } from "react";
import NavComponent from "./components/NavComponent";
import MovieComponent from "./components/MovieComponent";
import Pagination from "./components/PaginationComponent";
import { firstdata } from "./components/firstdata";
import spinner from "./img/Spinner.svg";

function App({
  formSubmit,
  movies,
  totalPages,
  handlePageChange,
  nextPage,
  previewPage,
  firstdata,
}) {
  const films = movies.map((m) => <MovieComponent movie={m} />);
  return (
    <>
      <div className="app movies container mt-5">
        <h1 className="text-center">Nos films et series</h1>
        {!formSubmit ? (
          <div className="row d-flex justify-content-center">{films}</div>
        ) : (
          <div className="spinner">
            <img src={spinner} alt="spinner" className="text-center" />
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
