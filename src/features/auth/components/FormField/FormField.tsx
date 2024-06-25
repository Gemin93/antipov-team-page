import React from "react";
import styles from "./FormField.module.css";

type FormFieldProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: any;
  error?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        {error && <span className={styles.error}>{error}</span>}
        <input
          className={styles.input}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      </div>
    </>
  );
};
