import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { setUser } from "../../features/user/userSlice";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { UserMainInfo } from "../../components/UserMainInfo/UserMainInfo";
import styles from "./UserPage.module.css";

export const UserPage = () => {
  const { userId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const data = await response.json();
      dispatch(setUser(data.data));
    };

    fetchUser();
  }, [userId, dispatch]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header homePage={false} componentClassName={styles.userPage}>
        <UserMainInfo user={user} />
      </Header>
      <UserInfo user={user} />
    </>
  );
};
