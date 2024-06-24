import { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import styles from "./ButtonForm.module.css";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  white?: boolean;
  className?: string;
};

export const ButtonForm = ({
  children,
  white,
  icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.buttonWhite]: white,
          [styles.buttonBlack]: !white,
        },
        className
      )}
      {...props}
    >
      <div className={styles.buttonContent}>
        <span>{children}</span>
        {icon && (
          <img src={icon} alt="icon of role button" className={styles.icon} />
        )}
      </div>
    </button>
  );
};
