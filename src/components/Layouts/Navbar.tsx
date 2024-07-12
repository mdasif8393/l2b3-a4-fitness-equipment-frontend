import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 h-16">
      <NavigationMenu>
        <Link to="/">
          <div className="flex items-center justify-center mx-2">
            <img
              src="https://img.freepik.com/premium-vector/fitness-workout-weight-sport-gym-tools-exercise-equipment-vector-image-gym-logo-fitness-tools_445443-47.jpg"
              alt=""
              className="w-14"
            />
            <h4 className="text-xl font-bold text-white ml-2">Gym Tools</h4>
          </div>
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/products">Products</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/product-management">Product Management</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/cart">Cart</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/checkout">Checkout</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
