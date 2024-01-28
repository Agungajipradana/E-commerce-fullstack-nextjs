import axios from "axios";

const getAllNbMen = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/men/nb`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllNbMen());

const nbMenApi = {
  getAllNbMen,
};

export default nbMenApi;
