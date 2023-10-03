import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchBooks } from "../../features/booksSlice";
import styles from "./Seacrh.module.scss";
import Filters from "./Filters/Filters";
import Search from "./Search/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sorting, setSorting] = useState("relevance");
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!isSearching) {
      setIsSearching(true);
      dispatch(searchBooks({ query: searchTerm, category, sorting }))
        .then(() => {
          setIsSearching(false);
        })
        .catch(() => {
          setIsSearching(false);
        });
    }
  };

  useEffect(() => {
    handleSearch();
  }, [dispatch]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={styles.Block} onKeyDown={onKeyDown}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Filters
        category={category}
        setCategory={setCategory}
        sorting={sorting}
        setSorting={setSorting}
      />
    </div>
  );
}

export default SearchBar;
