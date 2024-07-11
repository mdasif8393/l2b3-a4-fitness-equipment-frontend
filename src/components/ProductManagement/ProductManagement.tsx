/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteProductMutation,
  useGetProductsAgainQuery,
} from "@/redux/api/api";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
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
                <Button
                  variant="destructive"
                  onClick={() => handleProductDelete(product?._id)}
                >
                  Delete
                </Button>
                <Sheet>
                  <SheetTrigger>
                    <Button className="bg-slate-600">Update</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        Update Information of {product?.name}
                      </SheetTitle>
                      <SheetDescription>
                        <form>
                          <Label htmlFor="name">Product Name</Label>
                          <Input
                            type="text"
                            placeholder="Product Name"
                            id="name"
                            name="name"
                            defaultValue={product?.name}
                          />
                          <Label htmlFor="price">Product Price</Label>
                          <Input
                            type="number"
                            placeholder="Product Price"
                            id="price"
                            name="price"
                            defaultValue={product?.price}
                          />
                          <Label htmlFor="stock">Product Stock</Label>
                          <Input
                            type="number"
                            placeholder="Product Stock"
                            id="stock"
                            name="stock"
                            defaultValue={product?.stockQuantity}
                          />
                          <Label htmlFor="stock">Product Description</Label>
                          <Input
                            type="string"
                            placeholder="Product Description"
                            id="description"
                            name="description"
                            defaultValue={product?.description}
                          />
                          <Label htmlFor="stock">Product Image</Label>
                          <Input
                            type="string"
                            placeholder="Product Image"
                            id="image"
                            name="image"
                            defaultValue={product?.image}
                          />
                          <Label htmlFor="stock">Product Category</Label>
                          <Input
                            type="string"
                            placeholder="Product Category"
                            id="category"
                            name="category"
                            defaultValue={product?.category}
                          />
                          <br />
                          <Button type="submit" className="w-full">
                            Update Product Info
                          </Button>
                        </form>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductManagement;
