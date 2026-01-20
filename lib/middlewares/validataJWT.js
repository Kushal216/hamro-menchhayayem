import jwt from 'jsonwebtoken';
export default function validateJWT(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null; // invalid / expired
  }
}
