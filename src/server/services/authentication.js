import jwt from 'jsonwebtoken';

function login(req, res) {
  console.log(`username is ${req.body.username}`);
  console.log(`password is ${req.body.password}`);
  const token = jwt.sign({ username: req.body.username }, process.env.secret);
  res.json({ token });
}

function register(req, res) {
  console.log(`name is ${req.body.name}`);
  console.log(`password is ${req.body.password}`);
  console.log(`email is ${req.body.email}`);
  res.send('success');
}

export default {
  login,
  register
};
