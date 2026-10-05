import styles from "./bookDetails.module.css";
import { useParams } from "react-router-dom";
import { booksInfo } from "../../data/books";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/store/cartSlice";

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const book = booksInfo.find((book) => book.id === Number(id));

  return (
    <>
      <div className={styles.wrapper}>
        <img src={book.image} className={styles.wrapper__image} />

        <div className={styles.wrapper__info}>
          <h1 className={styles.wrapper__title}>{book.bookName}</h1>

          <p className={styles.wrapper__author}>{book.bookAuthor}</p>

          <strong className={styles.wrapper__price}>
            {book.bookPrice.toLocaleString("ru-RU")} ₽
          </strong>

          <p className={styles.wrapper__description}>
            {book.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Odit, sint. Molestiae voluptate aut consequuntur
            sequi, modi ducimus mollitia tempore dignissimos eveniet blanditiis?
            Accusamus nesciunt distinctio deleniti et illo possimus quidem.
          </p>

          <button
            className={styles.wrapper__cart}
            onClick={() => dispatch(addToCart(Number(id)))}
          >
            <ShoppingCartOutlined /> Добавить в корзину
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
