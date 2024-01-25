import axios from "axios";

const getAllNikeKids = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/nike`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllNikeKids());

const nikeKidsApi = {
  getAllNikeKids,
};

export default nikeKidsApi;
