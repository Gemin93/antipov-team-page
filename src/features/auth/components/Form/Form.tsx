import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../authSlice";
import { FormField } from "../FormField/FormField";
import styles from "./Form.module.css";

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
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Пароль обязателен"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
});

type FormData = yup.InferType<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    console.log("email: ", email);
    console.log("password: ", password);
    try {
      await dispatch(registerUser({ email, password }));
      navigate("/");
    } catch (error) {
      alert("Произошла ошибка при регистрации");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
          Отправить
        </button>
      </form>
    </div>
  );
};
