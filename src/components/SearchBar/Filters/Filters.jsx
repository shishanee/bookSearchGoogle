import styles from "../Search.module.scss";

const Filters = ({ category, setCategory, sorting, setSorting }) => {
  const options = [
    {
      name: "all",
      value: "all",
    },
    {
      name: "art",
      value: "art",
    },
    {
      name: "biography",
      value: "biography",
    },
    {
      name: "computers",
      value: "computers",
    },
    {
      name: "history",
      value: "history",
    },
    {
      name: "medical",
      value: "medical",
    },
    {
      name: "poetry",
      value: "poetry",
    },
  ];

  return (
    <div className={styles.Select}>
      <span>Categories</span>
      <select
        className={styles.category}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <span>Sortyng by</span>
      <select
        className={styles.sorting}
        value={sorting}
        onChange={(e) => setSorting(e.target.value)}
      >
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
};

export default Filters;
