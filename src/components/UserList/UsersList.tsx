import { UserCard } from "../UserCard/UserCard";
import styles from "./UsersList.module.css";

export const UserList = () => {
  return (
    <>
      <div className={styles.listWrapper}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};
