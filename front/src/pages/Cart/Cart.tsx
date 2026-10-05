import styles from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store/store";
import { booksInfo } from "../../data/books";
import {
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
  CreditCardOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../app/store/cartSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Cart = () => {
  const booksId = useSelector((state: RootState) => state.cart.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const booksCart = booksId.map((item) => ({
    ...booksInfo.find((book) => book.id === item.id),
    quantity: item.quantity,
  }));

  const totalPrice = booksCart.reduce(
    (total, book) => total + book.bookPrice * book.quantity,
    0,
  );

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {booksCart.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "100vw", transition: { duration: 0.3 } }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className={styles.wrapper__book}
          >
            <div className={styles.wrapper__bookContent}>
              <img src={book.image} alt="book__foto" />

              <div className={styles.wrapper__info}>
                <h3>{book.bookName}</h3>
                <p>{book.bookAuthor}</p>
                <h4>{`${book.bookPrice.toLocaleString("ru-RU")} ₽ × ${book.quantity} = ${(book.bookPrice * book.quantity).toLocaleString("ru-RU")} ₽`}</h4>
              </div>
            </div>

            <div className={styles.wrapper__quantity}>
              <button
                className={styles.wrapper__quantityButton}
                onClick={() => dispatch(decreaseQuantity(book.id))}
              >
                <MinusOutlined />
              </button>

              <span className={styles.wrapper__quantityValue}>
                {book.quantity}
              </span>

              <button
                className={styles.wrapper__quantityButton}
                onClick={() => dispatch(increaseQuantity(book.id))}
              >
                <PlusOutlined />
              </button>

              <button
                className={styles.wrapper__deleteButton}
                onClick={() => dispatch(removeFromCart(book.id))}
              >
                <DeleteOutlined />
              </button>
            </div>
          </motion.div>
        ))}

        {booksCart.length > 0 ? (
          <div className={styles.wrapper__total}>
            <div className={styles.wrapper__summary}>
              <p>Итого:</p>
              <strong>{totalPrice.toLocaleString("ru-RU")} ₽</strong>
            </div>

            <button className={styles.wrapper__checkout}>
              <CreditCardOutlined /> Оформить заказ
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={styles.wrapper__empty}
          >
            <ShoppingCartOutlined className={styles.wrapper__searchIcon} />

            <div className={styles.wrapper__catalogText}>
              <p>Ваша корзина пуста</p>
              <p>Добавьте книги из каталога</p>
            </div>

            <button
              onClick={() => navigate("/catalog")}
              className={styles.wrapper__catalogButton}
            >
              <SearchOutlined /> Перейти в каталог
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <Button href="https://t.me/nikita_kytilov?text=XXXXSSSS" target="_blank">
        Написать мне
      </Button>
    </div>
  );
};

export default Cart;
