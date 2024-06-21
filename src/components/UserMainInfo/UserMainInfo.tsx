import styles from "./UserMainInfo.module.css";
import profilePhoto from "../../assets/user.png";

export const UserMainInfo = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.photoWrap}>
          <img
            className={styles.userPhoto}
            src={profilePhoto}
            alt="User Photo"
          />
        </div>

        <div className={styles.namesWrap}>
          <span className={styles.name}>Артур</span>
          <span className={styles.name}>Королёв</span>
          <p className={styles.role}>Партнер</p>
        </div>
      </div>
    </>
  );
};
