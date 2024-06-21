import { ReactionButton } from "../ReactionButton/ReactionButton";
// import { TUser } from "../../types/types";
import styles from "./userCard.module.css";
import profilePhoto from "../../assets/user.png";

export const UserCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.photoWrap}>
          <img src={profilePhoto} alt="user photo" />
        </div>
        <div className={styles.name}>
          <span>Jonh</span>
          <span>Doe</span>
        </div>
        <div className={styles.buttonWrap}>
          <ReactionButton />
        </div>
      </div>
    </>
  );
};

// ({ user }: { user: TUser })
