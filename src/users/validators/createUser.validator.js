const { body } = require("express-validator");

const createUserValidator = [
  body("firstName", "first name is required and a string")
    .isString()
    .notEmpty()
    .isLength({ max: 100 })
    .trim(),
  body("lastName", "last name is  a string")
    .isString()
    .optional()
    .isLength({ max: 100 })
    .trim(),
  body("email", "email is required and must be a valid email address")
    .isEmail()
    .notEmpty()
    .isLength({ max: 200 })
    .trim(),
  body(
    "password",
    "Password must include at least one  number, one uppercase letter, one lowercase letter, and one special character",
  )
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .notEmpty()
    .isLength({ min: 8 }),
];

module.exports = createUserValidator;
