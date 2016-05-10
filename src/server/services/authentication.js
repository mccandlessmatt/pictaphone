import jwt from 'jsonwebtoken';
import Users from '../schemas/users';

function login(req, res) {
  console.log(`username is ${req.body.username}`);
  console.log(`password is ${req.body.password}`);
  const token = jwt.sign({ username: req.body.username }, process.env.secret);
  res.json({ token });
}

function register(req, res) {
  const { name, password, email } = req.body;
  
  new Users({ name, password, email }).save((err, user) => {
    if (err) {
      res.send('error');
    }

    res.send(user);
  });
}

export default {
  login,
  register
};
