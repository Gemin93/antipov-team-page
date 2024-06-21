import { Header } from "../../components/Header/Header";
import { UserMainInfo } from "../../components/UserMainInfo/UserMainInfo";
import styles from "./UserPage.module.css";

export const UserPage = () => {
  return (
    <>
      <Header homePage={false} componentClassName={styles.userPage}>
        <UserMainInfo />
      </Header>
    </>
  );
};
