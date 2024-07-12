import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProductDetails = (product: any) => {
  return (
    <Link to={`/product/${product?.product?._id}`}>
      <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
        <div>
          <img
            src={product?.product?.image}
            className="object-contain h-48 w-96 transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle>{product?.product?.name.slice(0, 20)}</CardTitle>
          <CardDescription>
            {product.product.description.slice(0, 80)} <br />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <small className="text-red-400">
            {product?.product?.stockQuantity} items left
          </small>
          <CardContent></CardContent>

          <p>
            TK <span className="font-semibold">{product.product.price}</span>
          </p>
        </CardContent>

        <CardFooter>
          <Button className="w-2/4">
            <Link to={`/product/${product?.product?._id}`}>See More</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductDetails;
