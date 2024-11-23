import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <div className="h-[491px] mt-20">
      <div className="bg-black h-[433px]">
        <TopFooter />
        <BottomFooter />
      </div>
      <div className="h-[58px] bg-primary">
        <p className="flex justify-center items-center text-white py-3">© 2024 | We5ive</p>
      </div>
    </div>
  );
};

export default Footer;
