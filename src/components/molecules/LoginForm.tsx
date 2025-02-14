import React, { useContext, useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "auth context needs to be used inside of the auth provider"
    );
  }

  const { login } = authContext;
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isSuccess = login(username, password);

    if (!isSuccess) {
      setError("Incorrect User");
    } else {
      navigate("/shop");
    }
  };

  return (
    <form onSubmit={handleLoginSubmit} className="flex flex-col p-6 gap-10">
      <div className="flex flex-col gap-5">
        <Input
          type={"text"}
          required={true}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type={"password"}
          required={true}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button text="Log in" type="submit" />
    </form>
  );
};

export default LoginForm;
