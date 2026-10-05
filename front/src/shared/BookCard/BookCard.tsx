import styles from "./bookCard.module.css";
import { Card } from "antd";
import {
  ShoppingCartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../app/store/cartSlice";

type BookCardProps = {
  id: number;
  image: string;
  bookName: string;
  bookAuthor: string;
  bookPrice: number;
  delay: number;
};

const BookCard = ({
  id,
  image,
  bookAuthor,
  bookPrice,
  bookName,
  delay,
}: BookCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Card
        className={styles.card}
        style={{ animationDelay: `${delay}ms` }}
        onClick={() => navigate(`/books/${id}`)}
        cover={
          <div>
            <img src={image} alt="Книга" className={styles.card_foto} />
          </div>
        }
      >
        <div className={styles.card__content}>
          <h3>{bookName}</h3>

          <p className={styles.card__author}>{bookAuthor}</p>

          <h4 className={styles.card__price}>
            {bookPrice.toLocaleString("ru-RU")} ₽
          </h4>

          <div className={styles.card__actions}>
            <button
              className={styles.card__buy}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(id));
              }}
            >
              <p style={{ fontSize: "22px" }}>
                <ShoppingCartOutlined />
              </p>

              <p style={{ fontSize: "16px" }}>В корзину</p>
            </button>

            <button
              className={styles.card__info}
              onClick={() => navigate(`/books/${id}`)}
            >
              <ExclamationCircleOutlined />
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default BookCard;
