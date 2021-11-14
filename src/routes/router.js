const Router = require('koa-router');
const { getApi, postApi } = require('../services/serviceImpl');

const createRouterApp = () => {
  const router = new Router();
  router.get('/publisher-kafka/example', getApi);
  router.post('/publisher-kafka/save', postApi);
  return router;
};

module.exports = {
  createRouterApp,
};
