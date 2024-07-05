import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUser } from "../../../../store/auth/authSlice";

export const RestoreAuthState: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch]);

  return null;
};
