/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductsAgainQuery } from "@/redux/api/api";
import Spinner from "@/utils/Spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ProductManagementContent from "./ProductManagementContent";

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsAgainQuery(undefined);
  // const [deleteProduct] = useDeleteProductMutation();

  // const handleProductDelete = (productId: string) => {
  //   const confirmPronPrompt = prompt("Write delete to remove product");
  //   if (confirmPronPrompt === "delete") {
  //     deleteProduct(productId);
  //     toast("Product is deleted successfully");
  //   } else {
  //     toast("Wrong Input");
  //   }
  // };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Table>
        <TableCaption>A list of Products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((product: any) => (
            <ProductManagementContent product={product} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductManagement;
