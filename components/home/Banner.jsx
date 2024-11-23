import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-[48px] md:text-6xl font-bold">
            Elevate Your Everyday Style
          </h1>
          <p className="mt-4 text-lg md:text-[19px] text-[#F5F3FF]">
            Discover the Latest Trends in Suitable Fashion
          </p>
          <div className="mt-6 flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default Banner;

