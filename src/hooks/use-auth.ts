import { useAppSelector } from "../hooks/redux-hooks";

export const useAuth = () => {
  const { email, token, id, isLoading } = useAppSelector((state) => state.auth);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    isLoading,
  };
};
