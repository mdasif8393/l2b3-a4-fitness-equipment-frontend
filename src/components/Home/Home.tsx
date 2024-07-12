import HeroSection from "../HeroSection/HeroSection";
import Benefit from "./Benefit";
import FeaturesProducts from "./FeaturesProducts";
import ProductCategoryShowcase from "./ProductCategoryShowcase";
import UserReviews from "./UserReviews";

const Home = () => {
  return (
    <div className="container ">
      <HeroSection />
      <ProductCategoryShowcase />
      <FeaturesProducts />
      <Benefit />
      <UserReviews />
    </div>
  );
};

export default Home;
