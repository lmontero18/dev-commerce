import { useContext } from "react";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import ProductInfo from "../molecules/ProductInfo";
import { CartContext } from "@/context/CartContext";
import "react-loading-skeleton/dist/skeleton.css";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  category,
  price,
}) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cartcontext need to be used inside of a cart provider");
  }

  const { addToCart } = cartContext;

  return (
    <div className="border rounded-md shadow-xl p-5 transition-transform duration-300 hover:scale-105 ">
      <div className="justify-center flex">
        <Image src={image} alt={name} className="w-60 h-60 p-2" />
      </div>
      <ProductInfo name={name} category={category} price={price} />
      <div className="mt-5">
        <Button
          text="Add to cart"
          onClick={() => addToCart({ id, image, name, price, quantity: 1 })}
        />
      </div>
    </div>
  );
};

export default ProductCard;
