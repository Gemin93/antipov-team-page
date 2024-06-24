type InputProps = {
  label: string;
  type: "text" | "email" | "password";
  icon?: boolean;
  iconAsset?: string;
};

export const Input = ({ label, type, icon, iconAsset }: InputProps) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      {type === "text" && <input type="text" placeholder="Артур" />}
      {type === "email" && <input type="email" placeholder="example@mail.ru" />}
      {type === "password" && <input type="password" placeholder="******" />}
      {icon && <img src={iconAsset} />}
    </>
  );
};
