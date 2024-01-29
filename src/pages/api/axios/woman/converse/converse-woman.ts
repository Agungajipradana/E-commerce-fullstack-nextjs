import axios from "axios";

const getAllConverseWoman = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/converse`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllConverseWoman());

const converseWomanApi = {
  getAllConverseWoman,
};

export default converseWomanApi;
