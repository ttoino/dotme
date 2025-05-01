import type { NextApiRequest, NextApiResponse } from "next";
import QRCode from "qrcode";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query;

  if (typeof username !== "string") {
    return res.status(400).json({ error: "Invalid username" });
  }

  const profileUrl = `https://yourdomain.com/profile/${username}`;

  try {
    const qr = await QRCode.toDataURL(profileUrl);
    res.status(200).json({ qrCode: qr });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate QR code" });
  }
}
