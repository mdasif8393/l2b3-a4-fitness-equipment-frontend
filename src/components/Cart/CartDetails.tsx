import { Button } from "../ui/button";

const CartDetails = ({ product }) => {
  console.log(product);
  return (
    <div className="h-20 bg-gray-100 rounded-xl shadow duration-300 hover:bg-white hover:shadow-xl m-3 p-2 flex">
      <div className="flex justify-center items-center mr-2">
        <img className="h-16 w-20 rounded" src={product?.image} alt="" />
      </div>
      <div>
        <h1>{product?.name}</h1>
        <p>Quantity: {product?.quantity}</p>
      </div>
      <div className="flex justify-center items-center">
        <Button variant="destructive">Remove</Button>
      </div>
    </div>
  );
};

export default CartDetails;
