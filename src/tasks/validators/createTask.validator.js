const { body } = require("express-validator");

const createTaskValidator = [
  body("title", "The title must be a string").isString(),
  body("title", "The title can not be empty").notEmpty(),
  body("title").trim(),
  body("title", "The title cannot be more 100 characters").isLength({
    max: 100,
  }),

  body(
    "description",
    "The description must be a string and needs to be a string",
  )
    .isString()
    .notEmpty()
    .trim(),
  body(
    "description",
    "The description can not be more 500 characters",
  ).isLength({
    max: 500,
  }),

  body("status").isIn(["todo", "inProgress", "completed"]),

  body("priority").isIn(["low", "normal", "high"]),

  body("dueDate", "The dueDate needs to be a valid ISO8601 string")
    .notEmpty()
    .isISO8601(),
];

module.exports = createTaskValidator;
