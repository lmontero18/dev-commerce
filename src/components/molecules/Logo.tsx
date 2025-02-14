import { Link } from "react-router";
import Icon from "../atoms/Icon";

const Logo: React.FC = () => {
  return (
    <Link to="/shop" className="flex flex-row items-center gap-2">
      <Icon name="logo" size={60} />
      <h1 className="font-bold text-3xl">Commerce</h1>
    </Link>
  );
};

export default Logo;
