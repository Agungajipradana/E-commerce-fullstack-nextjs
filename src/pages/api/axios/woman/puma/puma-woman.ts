import axios from "axios";

const getAllPumaWoman = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/puma`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllPumaWoman());

const pumaWomanApi = {
  getAllPumaWoman,
};

export default pumaWomanApi;
