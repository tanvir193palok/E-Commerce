import ImageGallery from "@/components/product/ImageGallery";
import ProductDescription from "@/components/product/ProductDescription";

const ProductPage = () => {
  return (
    <div className="px-28 py-10">
      <p>
        Feature Product / <span className="text-primary">New Arrival</span>
      </p>

      <div className="flex pt-4 gap-28">
        <ImageGallery />
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductPage;
