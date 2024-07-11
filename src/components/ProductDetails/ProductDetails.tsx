import { TProduct } from "@/types/types";
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

const ProductDetails = (product: Partial<TProduct>) => {
  return (
    <div>
      <Card>
        <div>
          <img
            src={product.product.image}
            className="object-contain h-48 w-96 ..."
          />
        </div>
        <CardHeader>
          <CardTitle>{product?.product?.name.slice(0, 20)}</CardTitle>
          <CardDescription>
            {product.product.description.slice(0, 80)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>TK {product.product.price}</p>
        </CardContent>
        <CardFooter>
          <Button>
            <Link to={`/product/${product?.product?._id}`}>See More</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;
