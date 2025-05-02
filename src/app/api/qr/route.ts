import QRCode from "qrcode";

export async function GET(
  req: Request,
) {
  const username = new URL(req.url).searchParams.get("username");

  if (typeof username !== "string") {
    return Response.json({ error: "Invalid username" }, { status: 400 });
  }

  const profileUrl = `https://yourdomain.com/profile/${username}`;

  try {
    const qr = await QRCode.toDataURL(profileUrl);
    Response.json({ qrCode: qr });
  } catch {
    Response.json({ error: "Failed to generate QR code" }, { status: 500 });
  }
}
