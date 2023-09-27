import axios from "axios";

const getAllProducts = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllProducts());

const productApi = {
  getAllProducts,
};

export default productApi;
