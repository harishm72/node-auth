import Joi from "@hapi/joi";

import { BCRYPT_MAX_BYTES } from "../config";

const email = Joi.string()
  .email()
  .min(8)
  .max(254)
  .lowercase()
  .trim()
  .required();
const fullName = Joi.string().min(3).max(32).trim().required();
const password = Joi.string().min(8).max(BCRYPT_MAX_BYTES, "utf8").required();
const confirmPassword = Joi.valid(Joi.ref("password")).required();

export const registerSchema = Joi.object({
  email,
  fullName,
  password,
  confirmPassword,
});

export const loginSchema = Joi.object({
  email,
  password,
});
