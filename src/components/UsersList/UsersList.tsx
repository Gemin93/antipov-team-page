import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setUsers, addUsers } from "../../store/users/usersSlice";
import { Button } from "../../components/Button/Button";
import { UserCard } from "../UserCard/UserCard";
import arrowDown from "../../assets/arrowDown.svg";
import styles from "./UsersList.module.css";

export const UserList = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const [page, setPage] = useState(1);

  const fetchUsers = async (page: number) => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=8`
    );
    const data = await response.json();
    return data.data;
  };

  useEffect(() => {
    const loadUsers = async () => {
      const initialUsers = await fetchUsers(1);
      dispatch(setUsers(initialUsers));
    };

    loadUsers();
  }, [dispatch]);

  const handleLoadUsers = async () => {
    const nextPage = page + 1;
    const newUsers = await fetchUsers(nextPage);
    dispatch(addUsers(newUsers));
    setPage(nextPage);
  };

  return (
    <>
      <div className={styles.listWrapper}>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
      <Button
        className={styles.button}
        icon={arrowDown}
        onClick={handleLoadUsers}
      >
        Показать ещё
      </Button>
    </>
  );
};
