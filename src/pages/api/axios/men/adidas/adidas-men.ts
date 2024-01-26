import axios from "axios";

const getAllAdidasMen = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/men/adidas`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllAdidasMen());

const adidasMenApi = {
  getAllAdidasMen,
};

export default adidasMenApi;
