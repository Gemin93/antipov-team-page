import { ReactionButton } from "../ReactionButton/ReactionButton";
import { Link } from "react-router-dom";
import { TUser } from "../../types/types";
import styles from "./userCard.module.css";

export const UserCard = ({ user }: { user: TUser }) => {
  return (
    <>
      <Link to={`/userDetail/${user.id}`} className={styles.card}>
        <div className={styles.photoWrap}>
          <img src={user.avatar} alt="user photo" />
        </div>
        <div className={styles.name}>
          <span>{user.first_name}</span>
          <span> {user.last_name}</span>
        </div>
        <div className={styles.buttonWrap}>
          <ReactionButton />
        </div>
      </Link>
    </>
  );
};
