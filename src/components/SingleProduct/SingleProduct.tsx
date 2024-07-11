import { useGetSingleProductQuery } from "@/redux/api/api";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks/hook";
import { useParams } from "react-router-dom";
import Cart from "../Cart/Cart";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const SingleProduct = (params) => {
  const { productId } = useParams();

  const { data } = useGetSingleProductQuery(productId);

  console.log(data?.data);

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <img
          className="object-contain max-w-lg"
          src={data?.data?.image}
          alt=""
        />
      </div>
      <Card className="basis-2/4">
        <CardHeader>
          <CardTitle>{data?.data?.name}</CardTitle>
          <CardDescription>{data?.data?.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Category: {data?.data?.category}</p>
        </CardContent>
        <CardContent>
          <p>Price: TK {data?.data?.price}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => dispatch(addToCart(data?.data))}>
            add to cart
          </Button>
        </CardFooter>
      </Card>
      <div className="basis-1/4">
        <Cart />
      </div>
    </div>
  );
};

export default SingleProduct;