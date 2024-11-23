import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
      <div className="w-[302px] h-[400px] rounded-[16px] p-[8px]">
        {/* Product Image */}
        <div className="flex justify-center rounded-[8px]">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-[286px] h-[287px] object-contain"
          />
        </div>
        
        {/* Product Name and Price */}
        <div className="flex justify-between items-center mt-2 px-[8px]">
          <h3 className="text-[16px] text-gray-800">{product.name}</h3>
          <p className="text-[19px] font-semibold text-[#1D1D1D]">BDT {product.price}</p>
        </div>
        
        {/* Add to Cart Button */}
        <div className="mt-4">
          <button className="w-full px-[24px] py-2 text-[#7E53D4] font-semibold text-[16px] border border-[#7E53D4] rounded-[8px]">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  