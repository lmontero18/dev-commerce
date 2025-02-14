import React from "react";
import LoginForm from "../molecules/LoginForm";
import Logo from "../molecules/Logo";

const AuthBox: React.FC = () => {
  return (
    <div className="max-w-md mx-auto flex flex-col shadow-xl items-center rounded-lg p-10 border border-black">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default AuthBox;
