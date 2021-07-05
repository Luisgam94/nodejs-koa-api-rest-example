const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    description: Joi.string().required(),
});
/*const dataToValidate = {
    name: 'chris',
    birthyear: 1971
}
const result = Joi.validate(dataToValidate, schema);
*/

module.exports = { schema };
