import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const UserMenu: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext needs to be used inside of an auth provider");
  }

  const { logout } = authContext;

  return (
    <div className="flex flex-row gap-2 items-center">
      <Icon name="user" size={28} />
      <Button text="Log Out" onClick={logout}></Button>
    </div>
  );
};

export default UserMenu;
