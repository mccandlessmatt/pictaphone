import jwt from 'jsonwebtoken';
import Users from '../schemas/users';
import credential from 'credential';

function login(req, res) {
  console.log(`username is ${req.body.username}`);
  console.log(`password is ${req.body.password}`);
  const token = jwt.sign({ username: req.body.username }, process.env.secret);
  res.json({ token });
}

function saveUser(userData, res) {
  console.log('saving hash', typeof userData.hash);
  new Users(userData).save((err, user) => {
    if (err) {
      res.send('error');
    }
    res.send(user);
  });
}

function register(req, res) {
  const { name, password, email } = req.body;

  credential().hash(password, (err, hash) => {
    if (err) {
      res.send('error');
    } else {
      saveUser({ name, email, password: hash }, res);
    }
  });
}

export default {
  login,
  register
};
