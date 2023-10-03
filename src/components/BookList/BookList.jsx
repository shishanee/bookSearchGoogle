import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./BookList.module.scss";
import CurrentPage from "../CurrentPage/CurrentPage";

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  if (!books) {
    return <p>Loading...</p>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>{books.length}</h1>
      <div className={styles.Block}>
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => (
            <div key={book.id} className={styles.Card}>
              <div className={styles.Foto}>
                {book.volumeInfo.imageLinks?.thumbnail ? (
                  <a
                    href={`https://books.google.com/books/about/Einstein.html?hl=&id=${book.id}`}
                  >
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt="book"
                    />
                  </a>
                ) : (
                  <a
                    href={`https://books.google.com/books/about/Einstein.html?hl=&id=${book.id}`}
                  >
                    <img
                      src="https://bodleianshop.co.uk/cdn/shop/products/TheBookflat_a.jpg?v=1653481303"
                      alt="book1"
                    />
                  </a>
                )}
              </div>
              <div className={styles.Info}>
                <h4 className={styles.Title}>{book.volumeInfo.title}</h4>
                <div className={styles.CategoryAuth}>
                  <span>Категгория: {book.volumeInfo.categories}</span>
                  <span>
                    Автор:{" "}
                    {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books available</p>
        )}
        <CurrentPage
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          items={books}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default BooksList;
