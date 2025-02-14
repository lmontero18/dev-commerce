import { Link } from "react-router";
import Icon from "../atoms/Icon";

const NavLinks: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-5">
        <li>
          <Link to="/likes">
            <Icon name="heart" size={28} />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <Icon name="cart" size={28} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
