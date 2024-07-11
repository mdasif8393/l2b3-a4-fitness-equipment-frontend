import { addToCart, removeFromCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks/hook";
import { Button } from "../ui/button";

const CartDetails = ({ product }) => {
  //   console.log(product);

  const dispatch = useAppDispatch();
  return (
    <div className="h-34 bg-gray-100 rounded-xl shadow duration-300 hover:bg-white hover:shadow-xl m-3 p-2 flex justify-between">
      <div className="flex justify-center items-center mr-2">
        <img className="h-20 w-26 rounded" src={product?.image} alt="" />
      </div>
      <div>
        <h1>{product?.name}</h1>
        <h4>{product?.price} TK</h4>
        <p>
          {" "}
          <Button
            variant="outline"
            onClick={() => dispatch(removeFromCart(product))}
          >
            -
          </Button>
          Quantity: {product?.quantity}
          <Button
            onClick={() => dispatch(addToCart(product))}
            disabled={product && product?.quantity >= product?.stockQuantity}
            variant="outline"
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
