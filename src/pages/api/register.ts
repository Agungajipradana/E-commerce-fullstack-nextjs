// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/lib/firebase/service";
import { RegisterProps } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<RegisterProps>) {
  if (req.method === "POST") {
    await signUp(req.body, ({ status, message }: { status: boolean; message: string }) => {
      if (status) {
        res.status(200).json({ status, message });
      } else {
        res.status(400).json({ status, message });
      }
    });
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}
