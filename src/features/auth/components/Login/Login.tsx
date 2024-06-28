import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../../store/auth/authSlice";
import { FormLogin } from "../FormLogin/FormLogin";
import { useAppDispatch } from "../../../../hooks/redux-hooks";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch((error) => alert(error));
  };
  return <FormLogin onSubmit={handleLogin} />;
};
