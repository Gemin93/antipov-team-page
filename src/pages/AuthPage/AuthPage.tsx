import { useState } from "react";
import { FormRegister } from "../../features/auth/components/FormRegister/FormRegister";
import { Login } from "../../features/auth/components/Login/Login";
import styles from "./AuthPage.module.css";

// import { SignIn } from "../../features/auth/components/SignIn/SignIn";

export const AuthPage = () => {
  const [isRegisterForm, setIsRegisterForm] = useState(true);
  return (
    <>
      <div className={styles.authPage}>
        <div className={styles.formContainer}>
          {isRegisterForm ? <FormRegister /> : <Login />}
          <button
            className={styles.toggleButton}
            onClick={() => setIsRegisterForm(!isRegisterForm)}
          >
            {isRegisterForm
              ? "Уже есть аккаунт? Войдите"
              : "Нет аккаунта? Зарегистрируйтесь"}
          </button>
        </div>
      </div>
    </>
  );
};
