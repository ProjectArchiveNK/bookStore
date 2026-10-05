import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Layout, Button } from "antd";
import {
  BookOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";

const Header = () => {
  const booksId = useSelector((state: RootState) => state.cart.books);
  const totalQuantity = booksId.reduce(
    (total, book) => total + book.quantity,
    0,
  );

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/catalog", label: "Каталог" },
    { path: "/cart", label: "Корзина" },
    // { path: "/profile", label: "Профиль" },
  ];
  return (
    <Layout.Header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <BookOutlined />
        <h1>BookStore</h1>
      </NavLink>

      <nav className={styles.nav}>
        {navItems.map(({ path, label }) => (
          <NavLink to={path} key={path}>
            {({ isActive }) => (
              <Button className={isActive ? styles.active : ""}>{label}</Button>
            )}
          </NavLink>
        ))}
      </nav>

      <div className={styles.actions}>
        <NavLink to="/">
          <BookOutlined />
        </NavLink>

        <NavLink to="/catalog">
          <SearchOutlined />
        </NavLink>

        <NavLink to="/cart" className={styles.cart}>
          <ShoppingCartOutlined />
          <p>{totalQuantity}</p>
        </NavLink>

        {/* <NavLink to="/profile">
          <UserOutlined />
        </NavLink> */}
      </div>
    </Layout.Header>
  );
};

export default Header;
