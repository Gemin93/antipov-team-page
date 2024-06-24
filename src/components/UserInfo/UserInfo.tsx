import { generatePhoneNumber } from "../../utils/genPhoneNumber";
import { lorem } from "../../utils/genParagraphs";
import styles from "./UserInfo.module.css";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import { TUser } from "../../types/types";

export const UserInfo = ({ user }: { user: TUser }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>{lorem.generateParagraphs(4)}</p>
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <img className={styles.icon} src={phone} alt="phone icon" />
              <span className={styles.text}>
                +7 (999) {generatePhoneNumber(user.email)}
              </span>
            </div>
            <div className={styles.contactItem}>
              <img className={styles.icon} src={mail} alt="mail icon" />
              <span className={styles.text}>{user?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
