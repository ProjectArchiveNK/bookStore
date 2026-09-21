import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Layout, Button } from "antd";
import {
  BookOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/catalog", label: "Каталог" },
    { path: "/cart", label: "Корзина" },
    { path: "/profile", label: "Профиль" },
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
        <NavLink to="/catalog">
          <SearchOutlined />
        </NavLink>

        <NavLink to="/cart">
          <ShoppingCartOutlined />
        </NavLink>

        <NavLink to="/profile">
          <UserOutlined />
        </NavLink>
      </div>
    </Layout.Header>
  );
};

export default Header;
