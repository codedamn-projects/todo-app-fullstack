import { db } from "@/db/database";

export default async function handler(req, res) {
	const { email, password } = req.body;

	// Test Query 
	const users = await db.selectFrom('User').selectAll().execute()

	res.status(200).json({ name: "codedamn", users });
}

