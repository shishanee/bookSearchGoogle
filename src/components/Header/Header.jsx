import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Title}>Book Store</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
