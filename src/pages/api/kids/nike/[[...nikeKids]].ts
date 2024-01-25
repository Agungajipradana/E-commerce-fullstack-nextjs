// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { DataProps } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataProps>) {
  if (req.query.nikeKids && req.query.nikeKids![1]) {
    const data = await retrieveDataById("nike-kids", req.query.nikeKids![1]);
    res.status(200).json({ status: true, statusCode: 200, data });
  } else {
    const data = await retrieveData("nike-kids");
    res.status(200).json({ status: true, statusCode: 200, data });
  }
}
