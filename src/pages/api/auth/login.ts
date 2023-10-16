import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {
	const { email, password } = req.body;

	res.status(200).json({ name: "codedamn" });
}

