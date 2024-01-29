import axios from "axios";

const getAllConverseMen = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/men/converse`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllConverseMen());

const converseMenApi = {
  getAllConverseMen,
};

export default converseMenApi;
