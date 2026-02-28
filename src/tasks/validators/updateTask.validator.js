const { body } = require("express-validator");

const updateTaskValidator = [
  body("_id", "Valid document id is required").notEmpty().isMongoId(),

  body("title", "Title must be a string").optional().isString().trim(),
  body("title", "The length can not be more than 100 characters").isLength({
    max: 100,
  }),

  body(
    "description",
    "The description must be a string and needs to be a string",
  )
    .optional()
    .isString()
    .trim(),
  body(
    "description",
    "The description can not be more 500 characters",
  ).isLength({
    max: 500,
  }),

  body("status").isIn(["todo", "inProgress", "completed"]).optional(),

  body("priority").isIn(["low", "normal", "high"]).optional(),

  body("dueDate", "The dueDate needs to be a valid ISO8601 string")
    .optional()
    .isISO8601(),
];

module.exports = updateTaskValidator;
