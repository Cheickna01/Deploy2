import { Link, NavLink } from "react-router-dom";
export default function NavComponent({
  logo,
  movieSearch,
  setMovieSearch,
  setCurrentPage,
  handleSubmit,
}) {
  return (
    <>
      <div className="nav mt-4">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <div className="search-movie">
          <form>
            <input
              type="text"
              value={movieSearch}
              onChange={(e) => {
                setMovieSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button onClick={handleSubmit} type="submit" className="b">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="mylast">
          <button className="">
            <NavLink to={"/panier"} className="text-black text-decoration-none">
              Mes films<i className="fas fa-shopping-cart fa-lg"></i>
            </NavLink>
          </button>
          <button className="">
            Login<i className="fas fa-shopping-cart fa-lg"></i>
          </button>
        </div>
      </div>
    </>
  );
}
