// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { DataProps } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse<DataProps>) {
//   if (req.query.product && req.query.product![1]) {
//     const data = await retrieveDataById("nike-man", req.query.product![1]);
//     res.status(200).json({ status: true, statusCode: 200, data });
//   } else {
//     const data = await retrieveData("nike-man");
//     res.status(200).json({ status: true, statusCode: 200, data });
//   }
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataProps>) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  if (id) {
    const data = await retrieveDataById("nike-man", id);
    res.status(200).json({ status: true, statusCode: 200, data });
  } else {
    const data = await retrieveData("nike-man");
    res.status(200).json({ status: true, statusCode: 200, data });
  }
}
