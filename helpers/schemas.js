const Joi = require('joi');

module.exports = {
  userSchema: Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string().required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
  categorySchema: Joi.object({
    name: Joi.string().required(),
  }),
  blogPostSchema: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(), 
  }),
  updatePostSchema: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }),
};
