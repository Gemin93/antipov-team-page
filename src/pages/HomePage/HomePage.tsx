import { Header } from "../../components/Header/Header";
import { UserList } from "../../components/UsersList/UsersList";
import { Title } from "../../components/Title/Title";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <Header homePage={true} componentClassName={styles.homePage}>
        <Title />
      </Header>
      <UserList />
    </>
  );
};
