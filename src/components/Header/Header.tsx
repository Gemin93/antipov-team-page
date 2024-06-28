import { FC, ReactNode } from "react";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/auth/authSlice";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      {homePage ? (
        <header className={classNames(styles.header, componentClassName)}>
          <div className={styles.buttonWrap}>
            <Button
              className={styles.button}
              white={true}
              onClick={() => {
                dispatch(removeUser());
              }}
            >
              Выход
            </Button>
          </div>
          <div className={styles.payload}>{children}</div>
        </header>
      ) : (
        <header className={classNames(styles.header, componentClassName)}>
          <div className={styles.buttonWrap}>
            <Button className={styles.button} white={true} onClick={handleBack}>
              Назад
            </Button>
          </div>
          <div className={styles.payload}>{children}</div>
          <div className={styles.buttonWrap}>
            <Button
              className={styles.button}
              white={true}
              onClick={() => {
                dispatch(removeUser());
              }}
            >
              Выход
            </Button>
          </div>
        </header>
      )}
    </>
  );
};
