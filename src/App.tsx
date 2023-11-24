import React, { useEffect } from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/ui/Navbar";
import { AppDispatch } from "./store/store";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/users/usersActions";

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
