import Image from "next/image";

const TopFooter = () => {
  return (
    <div className="flex justify-between gap-8 px-20 pt-14">
      {/* Left Section */}
      <div className="flex flex-col w-full">
        <Image
          src="/logo.png"
          alt="logo"
          height={100}
          width={200}
          className="w-[197px] h-[49px]"
        />
        <p className="text-[#F5F3FF] text-sm mt-[26px] w-[411px] h-[84px]">
          Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde
          quae qui quasi mollitia tenetur. Dicta explicabo est consectetur
          maxime quos fugit velit assumenda est.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full">
        <h5 className="text-[#F5F3FF] font-bold mb-2">Sign Up For Our Newsletter!</h5>
        <p className="text-[#F5F3FF] text-sm">
          Get notified about updates and be the first to get early access to new
          Podcast episodes.
        </p>

        <div className="flex flex-row items-center mt-[30px]  h-[53px]">
          <input
            type="text"
            placeholder="Your email address"
            className="px-[16px] py-[16px] w-[435px] bg-[#F5F3FF] rounded-l-lg"
          />
          <button className="px-[16px] py-[16px] w-[193px] bg-primary text-white rounded-r-lg">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
