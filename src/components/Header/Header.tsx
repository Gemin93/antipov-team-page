import { FC, ReactNode, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/auth/authSlice";
import styles from "./Header.module.css";
import classNames from "classnames";
import exit from "../../assets/exit.svg";
import back from "../../assets/arrowLeft.svg";

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      {homePage ? (
        <header className={classNames(styles.header, componentClassName)}>
          <div className={styles.buttonWrap}>
            {isMobile ? (
              <Button
                className={styles.buttonMobile}
                white={true}
                onClick={() => {
                  dispatch(removeUser());
                }}
                icon={exit}
              ></Button>
            ) : (
              <Button
                className={styles.button}
                white={true}
                onClick={() => {
                  dispatch(removeUser());
                }}
              >
                Выход
              </Button>
            )}
          </div>
          <div className={styles.payload}>{children}</div>
        </header>
      ) : (
        <header
          className={classNames(
            styles.header,
            styles.headerHomePage,
            componentClassName
          )}
        >
          <div className={classNames(styles.buttonWrap, styles.back)}>
            {isMobile ? (
              <Button
                className={styles.buttonMobile}
                white={true}
                onClick={handleBack}
                icon={back}
              ></Button>
            ) : (
              <Button
                className={styles.button}
                white={true}
                onClick={handleBack}
              >
                Назад
              </Button>
            )}
          </div>
          <div className={classNames(styles.content)}>{children}</div>
          <div className={classNames(styles.buttonWrap, styles.exit)}>
            {isMobile ? (
              <Button
                className={styles.buttonMobile}
                white={true}
                onClick={() => {
                  dispatch(removeUser());
                }}
                icon={exit}
              ></Button>
            ) : (
              <Button
                className={styles.button}
                white={true}
                onClick={() => {
                  dispatch(removeUser());
                }}
              >
                Выход
              </Button>
            )}
          </div>
        </header>
      )}
    </>
  );
};
