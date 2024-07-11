import { useGetProductsQuery } from "@/redux/api/api";
import { TProduct } from "@/types/types";
import { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type TQuery = {
  searchTerm: string;
  sort: string;
};

const Products = () => {
  const query: Partial<TQuery> = {};

  const [searchTerm, setSearchTerm] = useState("");

  query.searchTerm = searchTerm;

  const [togglePriceChange, setTogglePriceChange] = useState(false);

  if (togglePriceChange) {
    query.sort = "-price";
  } else {
    query.sort = "price";
  }

  const { data: products } = useGetProductsQuery(query);

  return (
    <div>
      <div className="flex justify-center">
        <Input
          onBlur={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Products"
          className="w-1/2"
        />
        <Button>Search</Button>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/5">
          <input
            type="checkbox"
            id="price"
            name="price"
            onChange={() => setTogglePriceChange(!togglePriceChange)}
          />
          <label htmlFor="price"> Price Higher to Lower</label>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-3">
          {products?.data.map((product: TProduct) => (
            <ProductDetails product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
