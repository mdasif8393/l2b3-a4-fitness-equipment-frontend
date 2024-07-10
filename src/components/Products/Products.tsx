import { useGetProductsQuery } from "@/redux/api/api";
import { TProduct } from "@/types/types";
import { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Products = () => {
  const { data: products } = useGetProductsQuery({});

  const [searchData, setSearchData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <Input
          onBlur={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="Search Products"
          className="w-1/2"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-3">
        {products?.data.map((product: TProduct) => (
          <ProductDetails product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
