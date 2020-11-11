const routes = (app) => {
  app.route('/testRoute)').get((res, req) => {
    res.send('Server is alive');
  });
};

export default routes;
