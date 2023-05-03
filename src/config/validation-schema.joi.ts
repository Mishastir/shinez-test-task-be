import * as Joi from "joi";

export const validationSchema = Joi.object({
  PORT: Joi.number(),
  DB_URL: Joi.string()
});
