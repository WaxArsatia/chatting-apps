// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const db = [
  {
    id: 1,
    username: 'admin',
    password: 'chat',
  },
];

export default function handler(req, res) {
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
  return res.status(200).json(account);
}