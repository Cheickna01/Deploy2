export default function Pagination({
  movies,
  totalPages,
  handlePageChange,
  nextPage,
  previewPage,
  firstdata
}) {
  return (
    <>
      {totalPages > 1 && (
        <div className="pagesContainer">
           <p onClick={previewPage} className="page-button">
            Back
          </p>
          {totalPages < 3
            ? Array.from({ length: totalPages }, (_, index) => (
                <p
                  className="page-button"
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </p>
              ))
            : Array.from({ length: 2 }, (_, index) => (
                <p
                  className="page-button"
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </p>
              ))}
          <p onClick={nextPage} className="page-button">
            Next
          </p>
        </div>
      )}
    </>
  );
}
