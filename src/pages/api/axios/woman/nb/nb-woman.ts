import axios from "axios";

const getAllNbWoman = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/nb`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllNbWoman());

const nbWomanApi = {
  getAllNbWoman,
};

export default nbWomanApi;
