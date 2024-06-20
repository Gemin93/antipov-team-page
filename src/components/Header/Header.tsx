import { Button } from "../Button/Button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.buttonWrap}>
          <Button className={styles.button} white={true}>
            Выход
          </Button>
        </div>
        <div className={styles.title}>
          <h1 className={styles.h1}>Наша команда</h1>
          <p className={styles.p}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </header>
    </>
  );
};
