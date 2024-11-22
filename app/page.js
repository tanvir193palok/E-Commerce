import Banner from "@/components/home/Banner";
import Collection from "@/components/home/Collection";
import NewArrival from "@/components/home/NewArrival";
import Offer from "@/components/home/Offer";
import Products from "@/components/home/Products";
import Support from "@/components/home/Support";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Support />
      <NewArrival />
      <Offer />
      <Collection />
      <Products />
    </div>
  );
}
