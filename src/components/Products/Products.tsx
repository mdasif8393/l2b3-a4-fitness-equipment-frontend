import { useGetProductsQuery } from "@/redux/api/api";
import Spinner from "@/utils/Spinner";
import { useState } from "react";
import { toast } from "sonner";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// type TQuery = {
//   searchTerm: string;
//   sort: string;
// };

const Products = () => {
  const query: any = {};

  const [searchTerm, setSearchTerm] = useState("");

  query.searchTerm = searchTerm;

  const [togglePriceChange, setTogglePriceChange] = useState(false);

  if (togglePriceChange) {
    query.sort = "-price";
  } else {
    query.sort = "price";
  }

  const { data: products, isLoading } = useGetProductsQuery(query);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="my-4 p-4">
      <div className="flex justify-center mb-4">
        <Input
          onBlur={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          placeholder="Search your chosen products"
          className="w-1/2"
        />
        <Button className="ml-2 ">Search Product</Button>
      </div>
      <div className="flex justify-center items-center my-4">
        <input
          type="checkbox"
          id="price"
          name="price"
          onChange={() => {
            setTogglePriceChange(!togglePriceChange);
            toast.success("Successfully showed filter's data");
          }}
        />
        <label htmlFor="price" className="ms-2 font-semibold">
          {" "}
          Filter Price from Higher to Lower
        </label>
      </div>

      <div className="flex flex-row mt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {products?.data.map((product: any) => (
            <ProductDetails product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
