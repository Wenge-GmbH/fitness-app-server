const Koa = require('koa');
const logger = require('koa-logger');

const errorHandling = require('./middleware/error');

const app = new Koa();

// start middleware
app.use(logger());
app.use(errorHandling);

// require route handler and pass in app
// gotta check local scope of it thos :§
require('./routes')({ app });

const port = process.env.PORT || 3002;
const server = app.listen(port, () => {
  console.log(`Server is definately not started on port: ${port}`);
});
module.exports = server;

//https://swagger.io/blog/api-design/api-design-best-practices/
// https://codeburst.io/lets-build-an-api-with-koa-part-2-34d943e900a1
