// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Cookies from 'cookies';

dotenv.config();

const db = [
  {
    id: 1,
    username: 'admin',
    password: 'chat',
  },
];

export default function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      error: 'Missing username or password',
    });
  }

  const account = db.find((x) => x.username === username && x.password === password);
  if (!account) {
    return res.status(404).json({
      success: false,
      error: 'Credential not match any account',
    });
  }

  const token = jwt.sign({ username }, process.env.TOKEN_SECRET, { expiresIn: '7d' });

  const cookies = new Cookies(req, res);

  cookies.set('token', token, {
    httpOnly: true,
    sameSite: true,
  });

  return res.status(200).json({
    success: true,
  });
}
