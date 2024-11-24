
import Image from "next/image";

const Collection = () => {
  return (
    <div className="w-[1280px] h-[614px] mx-28 mt-16  mb-6">
      <div className="h-[566px] flex items-center justify-between relative overflow-visible">
        {/* Image Section */}
        <div className="w-[621px] h-[481px] flex items-center justify-center bg-[#EEECFB] mt-[84px] relative">
          <Image
            src="/man.png"
            alt="man"
            width={400}
            height={400}
            className="absolute -top-[100px] w-[600px] h-[580px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-[50%] flex flex-col items-start justify-center pl-8">
          <p className="text-[48px] font-bold">Men Collection</p>

          <div className="mt-6 flex items-center">
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
      <div className="flex justify-center items-center py-6 gap-3">
        <Image src="/mark.png" width={30} height={10} alt="mark1" />
        <Image src="/mark2.png" width={20} height={2} alt="mark1" />
        <Image src="/mark2.png" width={20} height={2} alt="mark1" />
      </div>
    </div>
  );
};

export default Collection;
