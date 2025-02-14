import { useContext } from "react";
import CartProductCard from "../organisms/CartProductCard";
import Header from "../organisms/Header";
import { CartContext } from "@/context/CartContext";

const cartTemplate: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext needs to be used inside of a CartProvider");
  }

  const { cartItems } = cartContext;

  return (
    <div>
      <Header />
      <div className="mt-6 flex items-center justify-center">
        {cartItems.length === 0 ? (
          //could be an emptyCartComponent
          <p>your cart its empty</p>
        ) : (
          <div className="border p-5 rounded-lg">
            {cartItems.map((item) => (
              <CartProductCard key={item.id} id={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default cartTemplate;
