const joi = require('joi');

module.exports = {
  userSchema: joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().length(6).required(),
    image: joi.string().required(),
  }),
  loginSchema: joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  }),
  categorySchema: joi.object({
    name: joi.string().required(),
  }),
  blogPostSchema: joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.array().items(joi.number()).required(),
  }),
  updatePostSchema: joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
  }),
};
