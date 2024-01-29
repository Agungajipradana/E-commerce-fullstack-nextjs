import axios from "axios";

const getAllOnitsukaKids = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/onitsuka`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// console.log(getAllOnitsukaKids());

const onitsukaKidsApi = {
  getAllOnitsukaKids,
};

export default onitsukaKidsApi;
