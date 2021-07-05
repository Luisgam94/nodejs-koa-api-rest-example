//const { useRoute } = require('./routes')
//const { createRouterStatus } = require('./routes/statusRoute
const { starServer } = require('./server');
const logger = require('pino')()
logger.info('hello world')


starServer();

//const koa = require('koa');
//const app = new koa();

//app.use(createRouterStatus().routes());
//app.use(createRouterStatus().allowedMethods());

/*app.use(function (){
    this.body = 'Hello world!';
});*/

//useRoute(app,createRouterStatus());

//app.listen(3000, function(){
  //  console.log('Server running on https://localhost:3000')
//});