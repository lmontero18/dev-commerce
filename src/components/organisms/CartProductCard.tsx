import CartProductInfo from "../molecules/CartProductInfo";
import QuantitySelector from "../molecules/QuantitySelector";
import DeleteButton from "../molecules/DeleteButton";

interface CartProductCardProps {
  id: number;
}

const CartProductCard: React.FC<CartProductCardProps> = ({ id }) => {
  return (
    <div className="flex w-full h-full border-b p-10">
      <div>
        <CartProductInfo productId={id} />
      </div>
      <div className="flex flex-col justify-between ml-10 items-end">
        <DeleteButton productId={id} />
        <QuantitySelector productId={id} />
      </div>
    </div>
  );
};

export default CartProductCard;
