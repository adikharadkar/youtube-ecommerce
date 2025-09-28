const Pagination = ({ numOfPages, currentPage, onPageChange }) => {
  return (
    <>
      <button
        disabled={currentPage === 0}
        onClick={() => onPageChange((prev) => prev - 1)}
      >
        Previous
      </button>
      {Array.from({ length: numOfPages }, (_, index) => (
        <button
          style={{
            border: currentPage === index ? "1px solid darkslateblue" : "none",
            outline: "none",
          }}
          onClick={() => onPageChange(index)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === numOfPages - 1}
        onClick={() => onPageChange((prev) => prev + 1)}
      >
        Next
      </button>
    </>
  );
};

export default Pagination;
