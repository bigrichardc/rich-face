const routes = (app) => {
  app.route('/testRoute)').get((res, req) => {
    res.send('Server is alive');
  });
};
console.log('I ran');

export default routes;
