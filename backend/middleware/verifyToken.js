import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token; //as token was name of cookie
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET); //If the token was signed using the correct secret key,integrity and not expired

		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });

		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.log("Error in verifyToken ", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};