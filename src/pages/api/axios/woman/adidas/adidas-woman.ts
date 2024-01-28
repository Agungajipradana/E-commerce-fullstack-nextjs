import axios from "axios";

const getAllAdidasWoman = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/adidas`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllAdidasWoman());

const adidasWomanApi = {
  getAllAdidasWoman,
};

export default adidasWomanApi;
