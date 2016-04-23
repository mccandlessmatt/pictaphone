import jwt from 'jsonwebtoken'

export function attachRoutes (app) {
  app
    .route('/login')
      .post((req, res) => {
        console.log(`username is ${req.body.username}`);
        console.log(`password is ${req.body.password}`);
        const token = jwt.sign({username: req.body.username}, process.env.secret);
        res.json({token});
      })

}
