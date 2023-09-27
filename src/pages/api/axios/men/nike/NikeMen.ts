import axios from "axios";

const getAllNikeMen = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/men/nike`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllNikeMen());

const nikeMenApi = {
  getAllNikeMen,
};

export default nikeMenApi;
