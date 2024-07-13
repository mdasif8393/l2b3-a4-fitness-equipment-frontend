import { usePostOrderMutation } from "@/redux/api/api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { useState } from "react";

import { clearCart } from "@/redux/features/cart/cartSlice";
import Spinner from "@/utils/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CartDetails from "../Cart/CartDetails";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Checkout = () => {
  const navigate = useNavigate();

  const { products, total } = useAppSelector((state) => state.cart);

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    products: [],
  });

  const [postOrder, { isLoading }] = usePostOrderMutation();

  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    user.products = products;
    postOrder(user);
    dispatch(clearCart());
    toast.success("Order created successfully");
    navigate("/success");
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 my-6 container">
      <div>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-3/4">
            <Label htmlFor="name">Your Name</Label>
            <Input
              onBlur={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
            />
            <Label htmlFor="email">Your Name</Label>
            <Input
              type="email"
              placeholder="Your Email"
              id="email"
              name="email"
              onBlur={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Label htmlFor="number">Your Phone Number</Label>
            <Input
              type="number"
              id="number"
              name="number"
              placeholder="Your Phone Number"
              onBlur={(e) => setUser({ ...user, number: e.target.value })}
            />
            <Label htmlFor="number">Your Address</Label>
            <Input
              type="text"
              placeholder="Your Address"
              name="address"
              id="address"
              onBlur={(e) => setUser({ ...user, address: e.target.value })}
            />
            <Button
              disabled={products.length === 0}
              type="submit"
              className="w-full mt-4"
            >
              Create Order
            </Button>
          </form>
        </div>
      </div>
      <div>
        <div>
          {products.length > 0 && (
            <p>
              Total Price: <span className="font-semibold">TK {total}</span>
            </p>
          )}

          <div>
            {products.map((product: any) => (
              <CartDetails product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
