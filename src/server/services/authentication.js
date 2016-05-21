import jwt from 'jsonwebtoken';
import Users from '../schemas/users';
import credential from 'credential';

const pw = credential();

function validateUser(req, res, err, user) {
  if (user) {
    pw.verify(user.password, req.body.password, (err, isvalid) => {
      if (isvalid) {
        const token = jwt.sign({ username: user.email }, process.env.secret);
        res.json({ token });
      } else {
        res.send('incorrect password');
      }
    });
  } else {
    res.send('can\'t find user');
  }
}

function login(req, res) {
  Users
    .findOne({ email: req.body.username })
    .exec(validateUser.bind(null, req, res));
}

function saveUser(userData, res) {
  new Users(userData).save((err, user) => {
    if (err) {
      res.send('error');
    }
    res.send(user);
  });
}

function register(req, res) {
  const { name, password, email } = req.body;

  pw.hash(password, (err, hash) => {
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
