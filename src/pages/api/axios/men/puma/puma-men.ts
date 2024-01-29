import axios from "axios";

const getAllPumaMen = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/men/puma`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllPumaMen());

const pumaMenApi = {
  getAllPumaMen,
};

export default pumaMenApi;
