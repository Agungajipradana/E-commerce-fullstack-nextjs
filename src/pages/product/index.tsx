import { ProductsProps } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Product Page</h1>
        {products.map((product: ProductsProps) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
