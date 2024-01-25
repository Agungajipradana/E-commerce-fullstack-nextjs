import axios from "axios";

const getAllNikeWoman = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/nike`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

console.log(getAllNikeWoman());

const nikeWomanApi = {
  getAllNikeWoman,
};

export default nikeWomanApi;
