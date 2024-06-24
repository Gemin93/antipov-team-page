import { TUser } from "../../types/types";
import styles from "./UserMainInfo.module.css";

export const UserMainInfo = ({ user }: { user: TUser }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.photoWrap}>
          <img
            className={styles.userPhoto}
            src={user.avatar}
            alt="User Photo"
          />
        </div>

        <div className={styles.namesWrap}>
          <span className={styles.name}>{user.first_name}</span>
          <span className={styles.name}> {user.last_name}</span>
          <p className={styles.role}>Партнер</p>
        </div>
      </div>
    </>
  );
};
