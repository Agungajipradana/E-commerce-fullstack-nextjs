import axios from "axios";

const getAllConverseKids = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/converse`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllConverseKids());

const converseKidsApi = {
  getAllConverseKids,
};

export default converseKidsApi;
