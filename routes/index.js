const Router = require('koa-router');

module.exports = ({ app }) => {
  // instantiate Router
  const router = new Router();
  const dogRouter = new Router({
    prefix: '/dogs',
  })
  // require and pass Rotuer to external routes
  require('./basic')({ router });
  require('./dogs')({ dogRouter });

  app.use(router.routes());
  app.use(router.allowedMethods());

  app.use(dogRouter.routes());
  app.use(dogRouter.allowedMethods());
}
