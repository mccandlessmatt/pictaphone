export function attachRoutes (app) {
  app
    .route('/login')
      .post((req, res) => {
        console.log(`username is ${req.body.username}`);
        console.log(`password is ${req.body.password}`);
        res.json({status: 'good jorb'});
      })

}
