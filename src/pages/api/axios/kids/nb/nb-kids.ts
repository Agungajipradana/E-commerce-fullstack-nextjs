import axios from "axios";

const getAllNbKids = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/nb`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllNbKids());

const nbKidsApi = {
  getAllNbKids,
};

export default nbKidsApi;
