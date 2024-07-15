const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  console.log("Received Authorization header:", token); // Debugging line

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("Extracted JWT token:", jwtToken); // Debugging line

  try {
    // Verifying the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("Verified token:", isVerified); // Debugging line

    // Getting the complete user details & also we don't want password to be sent
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.token = token;
    req.user = userData;
    req.userID = userData._id; // Corrected the variable user to userData

    // Move on to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Token verification error:", error); // Debugging line
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
