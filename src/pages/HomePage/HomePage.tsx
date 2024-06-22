import arrowDown from "../../assets/arrowDown.svg";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { UserList } from "../../components/UserList/UsersList";
import { Title } from "../../components/Title/Title";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <Header homePage={true} componentClassName={styles.homePage}>
        <Title />
      </Header>
      <UserList />
      <Button className={styles.button} icon={arrowDown}>
        {" "}
        Показать ещё
      </Button>
    </>
  );
};
