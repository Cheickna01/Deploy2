import erreur from "../img/5203299.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { a } from "../redux/Cart";

export default function MovieComponent({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.Cart.cart);
  const isFavorite = favorites.some(favMovie => favMovie.id === movie.id);

  const handleFavClick = () => {
    if (isFavorite) {
      dispatch(a.RemoveOne(movie));
    } else {
      dispatch(a.AddOne(movie));
    }
  };

  return (
    <>
      <div className="movie col-md-4 col-lg-3 col-12" key={movie.id}>
        <div className="movie-grid mb-4">
          <div className="movie-img">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.overview}
              />
            ) : (
              <img src={erreur} alt="Image non disponible" />
            )}
            <div className="movie-content">
              <h4 className="title text-center">
                {movie.name.substring(0, 20) + "..."}
              </h4>
              <div className="certif text-center">
                <span className="bg-danger">certifié</span>
              </div>
              <ul className="action-movie list-unstyled">
                <li className="text-center" onClick={handleFavClick}>
                  <i className={isFavorite ? "fas fa-heart text-danger" : "fas fa-heart"}></i>
                </li>
                <li className="ms-4 text-center">
                  <NavLink to={`/info/${movie.id}`}>
                    <i className="fas fa-info-circle"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
