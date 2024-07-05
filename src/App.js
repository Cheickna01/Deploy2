import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
  firstdata
}) {
  return (
    <>
      <div className="app mt-5">
        <h1 className="text-center">Nos films et series</h1>
        {!formSubmit ? (
          <MovieComponent movies={movies} />
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
