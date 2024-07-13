import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProductCategoryShowcase = () => {
  return (
    <Carousel className="mt-20">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:shadow-2xl">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://i0.wp.com/www.oma-fitness.com/uploads/S20/22.jpg?resize=1068%2C801&ssl=1"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              Exercise Bikes
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <Link to="/category-products/bike">
                <Button variant="secondary">Show Bikes</Button>
              </Link>
            </div>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://raselsports.com/images/products/yzuo41clya11ev8/Oma-3338EA-treadmill-(1).webp"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              Treadmills
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 ">
              <Link to="/category-products/trademill">
                {" "}
                <Button variant="secondary">Show Treadmills</Button>
              </Link>
            </div>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://fitdir.com/wp-content/uploads/2021/10/Life-Fitness-Club-Series-Plus-Elliptical-Cross-Trainer.png"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              Electric Elliptical
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <Link to="/category-products/elliptical">
                {" "}
                <Button variant="secondary">Show Elliptical</Button>{" "}
              </Link>
            </div>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://webapi-prod.technogym.com/dw/image/v2/BFLQ_PRD/on/demandware.static/-/Sites-tg-catalog-master/default/dw179f9daa/product/A0001-HD/hex-dumbbell_related.jpg?sw=1100&sh=1100"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              All Types Dumbbell
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <Link to="/category-products/dumbbell">
                <Button variant="secondary">Show Dumbbell</Button>
              </Link>
            </div>
          </article>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCategoryShowcase;
