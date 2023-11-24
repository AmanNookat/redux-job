import React, { useEffect } from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/ui/Navbar";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/users/usersActions";
import { AppDispatch } from "./store/store";

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  );
};

export default App;
