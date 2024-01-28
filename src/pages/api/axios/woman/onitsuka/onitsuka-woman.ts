import axios from "axios";

const getAllOnitsukaWoman = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/onitsuka`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllOnitsukaWoman());

const nikeWomanApi = {
  getAllOnitsukaWoman,
};

export default nikeWomanApi;
