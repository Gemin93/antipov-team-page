import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormField } from "../FormField/FormField";
import styles from "./FormRegister.module.css";

// Схема валидации с использованием yup
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Имя обязательно")
    .matches(/^[A-Za-zА-Яа-я]+$/, "Имя должно состоять из букв"),
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup
    .string()
    .min(5, "Пароль должен быть не менее 6 символов")
    .required("Пароль обязателен"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
});

type FormData = yup.InferType<typeof schema>;
type onSubmitType = (email: string, password: string) => void;

export const FormRegister = ({ onSubmit }: { onSubmit: onSubmitType }) => {
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
        <p className={styles.h2}>Регистрация</p>
        <FormField
          label="Имя"
          id="name"
          type="text"
          placeholder="Артур"
          register={register("name")}
          error={errors.name?.message}
        />
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
        <FormField
          label="Подтвердите пароль"
          id="confirmPassword"
          type="password"
          placeholder="*******"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <button className={styles.button} type="submit">
          Зарегистрироваться
        </button>
        <p className={styles.link}>
          Уже есть аккаунт? <Link to="/login"> Войдите</Link>
        </p>
      </form>
    </div>
  );
};
