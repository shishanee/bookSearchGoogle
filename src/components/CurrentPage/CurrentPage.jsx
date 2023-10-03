import React from "react";
import { Pagination } from "antd";
import styles from "./CurrentPage.module.scss";

const CurrentPage = ({ itemsPerPage, items, setCurrentPage, currentPage }) => {

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.Pagination}>
      <Pagination
        current={currentPage}
        total={items.length}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CurrentPage;
