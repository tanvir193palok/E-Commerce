import Image from "next/image";

const Offer = () => {
  return (
    <div className="w-[1280px] h-[450px] bg-[#EEECFB] mx-28 my-2 flex items-center justify-between px-[75px] overflow-hidden">
      {/* Text */}
      <div className="flex-1 px-6">
        <p className="text-[24px] font-primary text-primary">Big Deal</p>
        <p className="text-[48px] font-semibold">
          <span className="text-primary">30% </span>off for New Customers
        </p>

        <div className="mt-[8px] flex items-center">
          <button className="w-[149px] h-[48px] bg-primary hover:bg-primary-dark text-white rounded-[28px]">
            Shop Now
          </button>
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
            <Image
              src="/arrow.png"
              alt="arrow"
              height={100}
              width={100}
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-[427px] h-[450px]">
        <Image
          src="/offer.png"
          height={800}
          width={800}
          alt="offer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Offer;

