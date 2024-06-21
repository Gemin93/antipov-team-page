import heart from "../../assets/heartIcon.svg";
import styles from "./ReactionButton.module.css";

export const ReactionButton = () => {
  return (
    <>
      <div className={styles.iconWrap}>
        <img className={styles.icon} src={heart} alt="icon reaction" />
      </div>
    </>
  );
};
