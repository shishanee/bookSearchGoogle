import styles from "./CurrentPage.module.scss";

const CurrentPage = ({ itemsPerPage, items, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(items?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.Pagination}>
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={isActive ? styles.Active : ""}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default CurrentPage;
