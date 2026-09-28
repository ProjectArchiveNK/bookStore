import styles from "./catalog.module.css";
import BookCard from "../../shared/BookCard/BookCard";
import { booksInfo } from "../../data/books";

const Catalog = () => {
  return (
    <div className={styles.wrapper}>
      {booksInfo.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          image={book.image}
          bookName={book.bookName}
          bookAuthor={book.bookAuthor}
          bookPrice={book.bookPrice}
          delay={book.delay}
        />
      ))}
    </div>
  );
};

export default Catalog;
