import { addToCart, removeFromCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks/hook";
import { Button } from "../ui/button";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();
  return (
    <div className="h-38 bg-gray-100 rounded-xl shadow duration-300 hover:bg-white hover:shadow-xl m-3 p-2 flex justify-between">
      <div className="flex justify-center items-center mr-2">
        <img className="h-20 w-26 rounded" src={product?.image} alt="" />
      </div>
      <div>
        <h1 className="text-lg font-semibold">{product?.name}</h1>
        <h4 className="mb-2">
          TK <span className="text-gray-800">{product?.price}</span>{" "}
        </h4>
        <p>
          {" "}
          <Button
            variant="outline"
            onClick={() => dispatch(removeFromCart(product))}
            className="mr-4"
          >
            -
          </Button>
          <span className="font-bold text-gray-800">{product?.quantity}</span>
          <Button
            onClick={() => dispatch(addToCart(product))}
            disabled={product && product?.quantity >= product?.stockQuantity}
            variant="outline"
            className="ml-4"
          >
            +
          </Button>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Button
          variant="destructive"
          onClick={() => dispatch(removeFromCart(product))}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartDetails;
