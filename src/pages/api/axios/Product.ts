import axios from "axios";

const getAllProducts = async ({ action }: { action: { product: string } }) => {
  console.log(getAllProducts);

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${action.product}`);

    console.log(res.data);
    return {
      props: {
        product: res.data,
      },
    };
  } catch (error) {
    throw error;
  }
};

const productApi = {
  getAllProducts,
};

export default productApi;
