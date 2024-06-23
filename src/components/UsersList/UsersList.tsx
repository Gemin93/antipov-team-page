import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { setUsers } from "../../features/users/usersSlice";
// import { TUser } from "../../types/types";
import { UserCard } from "../UserCard/UserCard";
import styles from "./UsersList.module.css";

export const UserList = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://reqres.in/api/users?per_page=8");
      const data = await response.json();
      dispatch(setUsers(data.data));
    };

    fetchUsers();
  }, [dispatch]);
  console.log(users);

  return (
    <>
      <div className={styles.listWrapper}>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </>
  );
};
