import Logo from "../molecules/Logo";
import NavLinks from "../molecules/NavLinks";
import UserMenu from "../molecules/UserMenu";

const Header: React.FC = () => {
  return (
    <div className="p-5 flex flex-row justify-around border border-b-black">
      <Logo />
      <div className="flex flex-row gap-5 items-center">
        <NavLinks />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
