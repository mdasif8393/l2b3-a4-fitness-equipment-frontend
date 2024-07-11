import { useAppSelector } from "@/redux/hooks/hook";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);

  return (
    <div>
      {products.length > 0 && <p>Total Price: TK {total}</p>}

      <div>
        {products.map((product) => (
          <CartDetails product={product} key={product._id} />
        ))}
      </div>

      {products.length > 0 && (
        <Link to="/checkout">
          <Button className="w-full">Checkout</Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
