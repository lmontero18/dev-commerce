import { ProductData } from "@/data/ProductData";
import Header from "../organisms/Header";
import ImageSlider from "../organisms/ImageSlider";
import ProductCard from "../organisms/ProductCard";
import Title from "../atoms/Titles";
const ShopTemplate: React.FC = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <section className="flex flex-col items-center mt-11">
        <Title text="Our Products" />
        <div className="grid grid-cols-4 gap-6 p-6">
          {ProductData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopTemplate;
