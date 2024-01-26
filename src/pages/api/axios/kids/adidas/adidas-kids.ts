import axios from "axios";

const getAllAdidasKids = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/adidas`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllAdidasKids());

const nikeKidsApi = {
  getAllAdidasKids,
};

export default nikeKidsApi;
