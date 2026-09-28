import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { PhoneOutlined, MailOutlined, SendOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <h3>BookStore</h3>

        <p>Лучший выбор книг для каждого читателя.</p>
        <p>Новинки, бестселлеры и классика в одном месте.</p>
        <p>Удобный поиск и простой заказ книг.</p>
      </div>

      <div className={styles.column}>
        <h4>Навигация</h4>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/profile">Личный кабинет</Link>
      </div>

      <div className={styles.column}>
        <h4>Контакты</h4>

        <div className={styles.contactItem}>
          <PhoneOutlined />
          <p>+7 (999) 123-45-67</p>
        </div>

        <div className={styles.contactItem}>
          <MailOutlined />
          <p>info@bookstore.ru</p>
        </div>

        <div className={styles.contactItem}>
          <SendOutlined />
          <button>Telegram</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
