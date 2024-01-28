import axios from "axios";

const getAllJordanWoman = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/jordan`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllJordanWoman());

const jordanWomanApi = {
  getAllJordanWoman,
};

export default jordanWomanApi;
