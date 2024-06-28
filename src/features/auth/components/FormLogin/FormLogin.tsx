import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormField } from "../FormField/FormField";
import styles from "./FormLogin.module.css";

// Схема валидации с использованием yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup
    .string()
    .min(5, "Пароль должен быть не менее 6 символов")
    .required("Пароль обязателен"),
});

type FormData = yup.InferType<typeof schema>;
type onSubmitType = (email: string, password: string) => void;

export const FormLogin = ({ onSubmit }: { onSubmit: onSubmitType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const handleFormSubmit = async (dataForm: FormData) => {
    const { email, password } = dataForm;
    onSubmit(email, password);
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <p className={styles.h2}>Авторизация</p>

        <FormField
          label="Электронная почта"
          id="email"
          type="email"
          placeholder="example@mail.ru"
          register={register("email")}
          error={errors.email?.message}
        />
        <FormField
          label="Пароль"
          id="password"
          type="password"
          placeholder="*******"
          register={register("password")}
          error={errors.password?.message}
        />
        <button className={styles.button} type="submit">
          Войти
        </button>
        <p className={styles.link}>
          Нет аккаунта? <Link to="/register"> Зарегестрируйтесь</Link>
        </p>
      </form>
    </div>
  );
};
