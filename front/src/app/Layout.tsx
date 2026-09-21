import "../index.css";
import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
