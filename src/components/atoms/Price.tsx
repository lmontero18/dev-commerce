interface PriceProps {
  amount: number;
  className?: string;
}

const Price: React.FC<PriceProps> = ({ amount, className }) => {
  return <p className={`font-bold ${className}`}>${amount.toFixed(2)}</p>;
};

export default Price;
