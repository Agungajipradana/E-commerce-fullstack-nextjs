import axios from "axios";

const getAllAdidas = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/adidas`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

console.log(getAllAdidas());

// (async () => {
//   try {
//     const adidasData = await getAllAdidas();
//     console.log(adidasData);
//   } catch (error) {
//     console.error(error);
//   }
// })();

const adidasApi = {
  getAllAdidas,
};

export default adidasApi;
