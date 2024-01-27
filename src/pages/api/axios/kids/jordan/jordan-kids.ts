import axios from "axios";

const getAllJordanKids = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/jordan`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllJordanKids());

const jordanKidsApi = {
  getAllJordanKids,
};

export default jordanKidsApi;
