import  { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchBooks } from "../../features/bookSlice";
import Filters from "./Filters/Filters";
import Search from "./Search/Search";
import styles from './Search.module.scss'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sorting, setSorting] = useState("relevance");
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!isSearching) {
      setIsSearching(true);
      try {
        await dispatch(searchBooks({ query: searchTerm, category, sorting }));
      } catch (error) {
        console.log(error)
      } finally {
        setIsSearching(false);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [dispatch, searchTerm, category, sorting]);

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
