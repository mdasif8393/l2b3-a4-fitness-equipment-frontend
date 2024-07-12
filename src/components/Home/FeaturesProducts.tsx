import { Link } from "react-router-dom";

const FeaturesProducts = () => {
  return (
    <div className="my-8">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Features Products
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src="https://webapi-prod.technogym.com/dw/image/v2/BFLQ_PRD/on/demandware.static/-/Sites-tg-catalog-master/default/dwc51da56c/product/KAA0-CD/ka01_related_01.jpg?sw=1100&sh=1100"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Chrome Dumbbell
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white">
              The new chrome dumbbells are ideal equipment for free weight
              strength training and sport a sleek and compact design that is
              very modern and fits perfectly into home environments
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src="https://fitdir.com/wp-content/uploads/2021/10/Life-Fitness-Club-Series-Plus-Elliptical-Cross-Trainer.png"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Elliptical Cross-Trainer
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white">
              The new Integrity+ Elliptical is meticulously crafted to provide a
              low-impact, inviting cardio experience. Our expert team of
              biomechanics engineers has spent years developing an elliptical
              path that feels remarkably smooth and natural.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src="https://raselsports.com/images/products/yzuobeuls02haxp/Healthfit-HF-800MS-treadmill.webp"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Healthfit HF-800SM
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white">
              Healthfit HF-800SM (Motor 4.0HP Peak) Foldable Motorized Treadmill
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link to="/products" className="inline-flex">
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              shop all
            </span>
            <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                className="h-3 w-3 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesProducts;
