import { Input } from "../Input/Input";
import { ButtonForm } from "../ButtonForm/ButtonForm";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <>
      <form className={styles.form}>
        <p>Регистрация</p>
        <Input label="Имя" type="text" />
        <Input label="Электронная почта" type="email" />
        <Input label="Пароль" type="password" />
        <Input label="Повторите пароль" type="password" />
        <ButtonForm> Зарегестрироваться</ButtonForm>
      </form>
    </>
  );
};
