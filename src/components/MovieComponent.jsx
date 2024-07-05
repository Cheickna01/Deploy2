import erreur from "../img/5203299.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { a } from "../redux/Cart";

export default function MovieComponent({ movies }) {
  const dispatch = useDispatch()
  return (
    <>
      {movies.length >= 1 ? (
        <div className="movies container">
          <div className="row d-flex justify-content-center">
            {movies.map((movie) => (
              <div className="movie col-md-4 col-lg-3 col-12" key={movie.id}>
                <div className="movie-grid mb-4">
                  <div className="movie-img">
                    {movie.poster_path !== null ? (
                      <>
                        <img
                          src={
                            "https://image.tmdb.org/t/p/w500/" +
                            movie.poster_path
                          }
                          alt={movie.overview}
                        />
                      </>
                    ) : (
                      <img src={erreur} alt="" />
                    )}
                    <div className="movie-content">
                      <h4 className="n title text-center">
                        {movie.name.substring(0, 20) + "..."}
                      </h4>
                      <div className="certif text-center">
                        <span className="bg-danger">certified</span>
                      </div>

                      <ul className="action-movie list-unstyled">
                        <li className="text-center" onClick={()=>dispatch(a.AddOne(movie))}>
                          {" "}
                          <i className="fas fa-heart"></i>{" "}
                        </li>
                        <li className="ms-4 text-center">
                          {" "}
                          <NavLink to={"/info/" + movie.id}>
                            <i className="fas fa-info-circle"></i>{" "}
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-4">Une erreur est survenue...</h1>
      )}
    </>
  );
}
