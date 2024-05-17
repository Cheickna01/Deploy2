import BeforeHeader from "./BeforeNav";
export default function NavComponent({
  logo,
  movieSearch,
  setMovieSearch,
  setCurrentPage,
  handleSubmit,
}) {
  return (
    <>
      <BeforeHeader />
      <div className="nav mt-4">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
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
            Mes films<i className="fas fa-shopping-cart fa-lg"></i>
            </button>
            <button className="">
            Login<i className="fas fa-shopping-cart fa-lg"></i>
            </button>
        </div>
      </div>

    </>
  );
}
