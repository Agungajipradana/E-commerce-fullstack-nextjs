import axios from "axios";

const getAllOnitsukaMen = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/men/onitsuka`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllOnitsukaMen());

const onitsukaMenApi = {
  getAllOnitsukaMen,
};

export default onitsukaMenApi;
