import { SupportData } from "@/lib";
import Image from "next/image";

const Support = () => {
  return (
    <div
      className="h-auto pt-4 pb-5"
      style={{
        backgroundImage: "url('/option.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-32 mx-auto">
        <div className="flex items-center justify-between gap-4">
          {SupportData.map((item, index) => (
            <div key={index} className="flex items-center gap-4 px-4">
              <Image
                src={item.image}
                alt={item.mainText}
                width={50}
                height={50}
                className="w-[40px] h-[40px] object-contain"
              />
              <div>
                <h3 className="text-[19px] font-semibold text-white uppercase">
                  {item.mainText}
                </h3>
                <p className="text-[13px] text-white pt-1 uppercase">{item.subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
