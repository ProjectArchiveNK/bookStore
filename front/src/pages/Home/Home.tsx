// главная
import styles from "./home.module.css";
import { booksInfo } from "../../data/books";
import BookCard from "../../shared/BookCard/BookCard";

const Home = () => {
  const featuredBooks = booksInfo.filter((book) => book.isFeatured);

  return (
    <>
      <div className={styles.wrapper}>
        {featuredBooks.map((book) => (
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
    </>
  );
};

export default Home;
