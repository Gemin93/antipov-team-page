import { FC, ReactNode } from "react";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";
import classNames from "classnames";

type HeaderProps = {
  children: ReactNode;
  componentClassName?: string;
  homePage?: boolean;
};

export const Header: FC<HeaderProps> = ({
  children,
  componentClassName,
  homePage,
}) => {
  return (
    <>
      {homePage ? (
        <header className={classNames(styles.header, componentClassName)}>
          <div className={styles.buttonWrap}>
            <Button className={styles.button} white={true}>
              Выход
            </Button>
          </div>
          <div className={styles.payload}>{children}</div>
        </header>
      ) : (
        <header className={classNames(styles.header, componentClassName)}>
          <div className={styles.buttonWrap}>
            <Button className={styles.button} white={true}>
              Назад
            </Button>
          </div>
          <div className={styles.payload}>{children}</div>
          <div className={styles.buttonWrap}>
            <Button className={styles.button} white={true}>
              Выход
            </Button>
          </div>
        </header>
      )}
    </>
  );
};
