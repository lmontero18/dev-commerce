import Price from "../atoms/Price";

interface ProductInfoProps {
  name: string;
  category: string;
  price: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, category, price }) => {
  return (
    <div className="mt-2 flex flex-col gap-2 border-t-2">
      <h3 className="text-xl font-medium">{name}</h3>
      <p className="text-slate-500">{category.toUpperCase()}</p>
      <Price amount={price} />
    </div>
  );
};

export default ProductInfo;
