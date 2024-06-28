import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { setUser } from "../../../../store/auth/authSlice";

import { FormRegister } from "../FormRegister/FormRegister";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
  return <FormRegister onSubmit={handleRegister} />;
};
