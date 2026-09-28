// главная
import styles from "./home.module.css";

import test__foto1 from "../../../public/books/test__foto1.png";
import test__foto2 from "../../../public/books/test__foto2.png";
import test__foto3 from "../../../public/books/test__foto3.png";

import { Button } from "antd";
import BookCard from "../../shared/BookCard/BookCard";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <BookCard image={test__foto1} delay={0} />
        <BookCard image={test__foto2} delay={100} />
        <BookCard image={test__foto3} delay={200} />
      </div>

      <h1>Home</h1>
      <Button href="https://t.me/nikita_kytilov?text=XXXXSSSS" target="_blank">
        Написать мне
      </Button>
    </>
  );
};

export default Home;
