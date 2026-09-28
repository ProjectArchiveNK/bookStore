import "../index.css";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <Header />

      <main key={location.pathname} className={styles.page}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
