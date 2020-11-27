import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout";
import UserList from "./components/UserList";
import Spinner from "./components/Spinner";
import { fetchUsers } from "./store/actions/users";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ users }) => users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Layout />
      {isLoading ? <Spinner style={{ marginTop: 20 }} /> : <UserList />}
    </>
  );
}

export default App;
