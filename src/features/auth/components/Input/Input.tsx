import styles from "./Input.module.css";

type InputProps = {
  label: string;
  type: "text" | "email" | "password";
  icon?: boolean;
  iconAsset?: string;
};

export const Input = ({ label, type, icon, iconAsset }: InputProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      {type === "text" && (
        <input className={styles.input} type="text" placeholder="Артур" />
      )}
      {type === "email" && (
        <input
          className={styles.input}
          type="email"
          placeholder="example@mail.ru"
        />
      )}
      {type === "password" && (
        <input className={styles.input} type="password" placeholder="******" />
      )}
      {icon && <img className={styles.icon} src={iconAsset} />}
    </>
  );
};
