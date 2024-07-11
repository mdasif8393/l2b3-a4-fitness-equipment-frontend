import { useAppSelector } from "@/redux/hooks/hook";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);

  console.log(products, total);

  return (
    <div>
      <div>Total Price: TK {total}</div>

      <div>
        {products.map((product) => (
          <CartDetails product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
