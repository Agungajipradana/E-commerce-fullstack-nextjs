// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { DataProps } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse<DataProps>) {
//   if (req.query.product && req.query.product![1]) {
//     const data = await retrieveDataById("products", req.query.product![1]);
//     res.status(200).json({ status: true, statusCode: 200, data });
//   } else {
//     const data = await retrieveData("products");
//     res.status(200).json({ status: true, statusCode: 200, data });
//   }
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataProps>) {
  if (req.query.id) {
    const productId = req.query.id as string;
    const data = await retrieveDataById("products", productId);
    if (data) {
      res.status(200).json({ status: true, statusCode: 200, data });
    } else {
      res.status(404).json({ status: false, statusCode: 404, message: "Product not found" });
    }
  } else {
    const data = await retrieveData("products");
    res.status(200).json({ status: true, statusCode: 200, data });
  }
}
