import styles from "../Search.module.scss";


const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.Seacrh}>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск книг"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/30/30946.png"
        alt="lupa"
      />
    </div>
  );
};

export default Search;
