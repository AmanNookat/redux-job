import React from "react";
import RegistrationForm from "../../components/users/RegistrationForm";
import "./register.css";

const RegistrationPage = () => {
  return (
    <section className="wrapper">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <RegistrationForm />
    </section>
  );
};

export default RegistrationPage;
