import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Benefit = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Benefits to Use Gys Equipments
      </h2>
      {/* 1st div */}
      <div></div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/fit-man-treadmill-workout.jpg?quality=82&strip=1&w=640"
            alt=""
            className="object-contain w-full"
          />
        </div>
        <div className="flex justify-center items-center mx-4">
          <div>
            <h1 className="text-4xl ">Extreme Running</h1>
            <h3 className="text-2xl my-2">
              Running in the purest form of exercise
            </h3>
            <Link to="/products">
              <Button>DISCOVER MORE</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* 2nd div */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
        <div className="flex justify-center items-center mx-4">
          <div>
            <h1 className="text-4xl ">Technogym Elliptical</h1>
            <h3 className="text-2xl my-2">
              Benefit to burn body fat. Make strong your leg muscles
            </h3>
            <Link to="/products">
              <Button>DISCOVER MORE</Button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/iconfitness/image/upload/dpr_auto,f_auto,fl_progressive.lossy,q_auto,w_auto/v1/site--1/NTEL71423_product_detail.png"
            alt=""
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
