import axios from "axios";

const getAllJordanMen = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/men/jordan`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllJordanMen());

const jordanMenApi = {
  getAllJordanMen,
};

export default jordanMenApi;
