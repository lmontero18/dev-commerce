import { useContext } from "react";
import Button from "../atoms/Button";
import { CartContext } from "@/context/CartContext";

interface QuantitySelectorProps {
  productId: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ productId }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext needs to be used inside of a CartProvider");
  }

  const { cartItems, addToCart, updateQuantity, removeFromCart } = cartContext;
  const product = cartItems.find((item) => item.id === productId);
  const quantity = product ? product.quantity : 1;

  const handleIncrease = () => {
    if (product) {
      addToCart({ ...product, quantity: product.quantity + 1 });
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(productId, -1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className="bg-black rounded-3xl">
      <Button onClick={handleDecrease} text="-" className="hover:bg-black" />
      <span className=" text-white">{quantity}</span>
      <Button onClick={handleIncrease} text="+" className="hover:bg-black" />
    </div>
  );
};

export default QuantitySelector;
