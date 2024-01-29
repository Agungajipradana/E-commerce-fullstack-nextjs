import axios from "axios";

const getAllPumaKids = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/puma`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllPumaKids());

const pumaKidsApi = {
  getAllPumaKids,
};

export default pumaKidsApi;
