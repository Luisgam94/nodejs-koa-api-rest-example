const Joi = require('joi');
const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    birthyear: Joi.number().integer().min(1970).max(2013),
});
const dataToValidate = {
    name: 'ch',
    birthyear: 1971
}
const {error, value} = schema.validate(dataToValidate);

console.log(error.message)