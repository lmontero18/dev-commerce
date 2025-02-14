import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import Icon from "../atoms/Icon";

interface DeleteButtonProps {
  productId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ productId }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext needs to be used inside of a CartProvider");
  }

  const { removeFromCart } = cartContext;

  return (
    <button
      className="border rounded-lg w-fit p-1 shadow-md"
      onClick={() => removeFromCart(productId)}
    >
      <Icon name="trashCan" size={30} color="black" />
    </button>
  );
};

export default DeleteButton;
