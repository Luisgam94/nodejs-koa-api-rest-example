const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(3).max(10)
    .required(),
  lastName: Joi.string().required(),
  age: Joi.number().integer(),
});

module.exports = { schema };
