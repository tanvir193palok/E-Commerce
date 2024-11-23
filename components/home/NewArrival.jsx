import { NewArrivalData } from "@/lib";
import ProductCard from "../product/ProductCard";

const NewArrival = () => {
  return (
    <div className="px-28 my-4">
      <p className="text-[19px] text-[#7E53D4] uppercase">Featured Product</p>
      <p className="text-[28px] font-bold text-[#1D1D1D] pb-3">New Arrivals</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white w-[1280px] h-[400px]">
        {NewArrivalData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark">
          See more
        </button>
      </div>
    </div>
  );
};

export default NewArrival;

