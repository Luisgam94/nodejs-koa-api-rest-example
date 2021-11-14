const { default: axios } = require('axios');
const { initLogger } = require('../config/logging');
const { schema } = require('../schemas/requestSchema');

const getApi = async (ctx) => {
  const log = initLogger();

  try {
    const resp = await axios.get('https://rickandmortyapi.com/api/character');

    log.info({ body: resp.data }, 'response received');

    ctx.response.status = 200;
    ctx.response.body = {
      message: 'message obtained',
      body: resp.data,
    };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: error.message,
    };
  }

  return ctx;
};

const postApi = async (ctx) => {
  const log = initLogger();
  log.info({ body: ctx.request.body }, 'request received');
  const { error, value } = schema.validate(ctx.request.body);

  try {
    if (!error) {
      log.info({ value }, 'schema valid');
      ctx.response.status = 200;
      ctx.response.body = {
        message: 'message obtained',
        body: value,
      };
    } else {
      log.error({ message: error.message }, 'schema valid with error');
      ctx.response.status = 400;
      ctx.body = {
        message: error.message,
      };
    }
  } catch (e) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: e.message,
    };
  }

  return ctx;
};

module.exports = {
  getApi,
  postApi,
};
