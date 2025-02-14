import { CartContext } from "@/context/CartContext";
import Price from "../atoms/Price";
import { useContext } from "react";
import Image from "../atoms/Image";

interface CartProductInfoProps {
  productId: number;
}

const CartProductInfo: React.FC<CartProductInfoProps> = ({ productId }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext needs to be used inside of a CartProvider");
  }

  const { cartItems } = cartContext;
  const product = cartItems.find((item) => item.id === productId);

  if (!product) {
    return <p className="text-red-500">Error: Product not found</p>;
  }

  return (
    <div className="flex flex-row">
      <Image src={product.image} alt={product.name} className="h-40 w-40" />
      <div className="w-80 ml-10">
        <p className="font-bold text-2xl">{product.name}</p>
        <Price amount={product.price} className="font-normal" />
      </div>
    </div>
  );
};

export default CartProductInfo;
