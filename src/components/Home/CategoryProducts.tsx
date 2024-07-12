import { useGetProductsAgainQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

const CategoryProducts = () => {
  const { category } = useParams();

  const { data } = useGetProductsAgainQuery({});

  const categoryData = data?.data.filter(
    (product) => product?.category === category
  );
  console.log(categoryData);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-3">
      {categoryData?.map((product) => (
        <ProductDetails product={product} key={product?._id} />
      ))}
    </div>
  );
};

export default CategoryProducts;
