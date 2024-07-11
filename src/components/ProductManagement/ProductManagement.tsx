/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteProductMutation,
  useGetProductsAgainQuery,
} from "@/redux/api/api";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const ProductManagement = () => {
  const { data } = useGetProductsAgainQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  const handleProductDelete = (productId: string) => {
    const confirmPronPrompt = prompt("Write delete to remove product");
    if (confirmPronPrompt === "delete") {
      deleteProduct(productId);
      toast("Product is deleted successfully");
    } else {
      toast("Wrong Input");
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of Products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((product: any) => (
            <TableRow key={product?._id}>
              <TableCell>{product?.name}</TableCell>
              <TableCell>TK {product?.price}</TableCell>
              <TableCell>{product?.category}</TableCell>
              <TableCell>
                <Button className="bg-slate-600">Update</Button>
                <Button
                  variant="destructive"
                  onClick={() => handleProductDelete(product?._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductManagement;
