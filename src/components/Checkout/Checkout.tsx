import { usePostOrderMutation } from "@/redux/api/api";
import { useAppSelector } from "@/redux/hooks/hook";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import CartDetails from "../Cart/CartDetails";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// type TUser = {
//   name: string;
//   email: string;
//   number: number;
//   address: string;
//   products: TProduct[];
// };

const Checkout = () => {
  const navigate = useNavigate();

  const { products, total } = useAppSelector((state) => state.cart);

  const [user, setUser] = useState({});

  const [postOrder] = usePostOrderMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    user.products = products;
    postOrder(user);

    navigate("/success");
  };
  return (
    <div className="grid grid-cols-2">
      <div>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-3/4">
            <Input
              onBlur={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
              placeholder="Your Name"
            />
            <Input
              type="email"
              placeholder="Your Email"
              onBlur={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Your Phone Number"
              onBlur={(e) => setUser({ ...user, number: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Your Address"
              onBlur={(e) => setUser({ ...user, address: e.target.value })}
            />
            <Button type="submit" className="w-full">
              Create Order
            </Button>
          </form>
        </div>
      </div>
      <div>
        <div>
          {products.length > 0 && <p>Total Price: TK {total}</p>}

          <div>
            {products.map((product) => (
              <CartDetails product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
