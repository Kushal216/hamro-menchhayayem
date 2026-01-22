import jwt from 'jsonwebtoken';

export default function isLoggedIn(req) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) return null;

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    return payload.role || null;
  } catch (err) {
    return null;
  }
}

export function isAdmin(req) {
  return isLoggedIn(req) === 'admin';
}
