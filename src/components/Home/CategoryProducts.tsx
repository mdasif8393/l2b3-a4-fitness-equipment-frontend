import { useGetProductsAgainQuery } from "@/redux/api/api";
import { TProduct } from "@/types/types";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

const CategoryProducts = () => {
  const { category } = useParams();

  const { data } = useGetProductsAgainQuery({});

  const categoryData = data?.data.filter(
    (product: Partial<TProduct>) => product?.category === category
  );
  console.log(categoryData);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
      {categoryData?.map((product: Partial<TProduct>) => (
        <ProductDetails product={product} key={product?._id} />
      ))}
    </div>
  );
};

export default CategoryProducts;
