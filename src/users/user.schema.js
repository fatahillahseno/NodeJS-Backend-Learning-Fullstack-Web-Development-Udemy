const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    maxLength: [100, "first name can not be more than 100 characters"],
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxLength: [100, "last name can not be more than 100 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: () => `Please enter a valid email address`,
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "password can not lower than 8 characters"],
    validate: {
      validator: function (password) {
        return /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
          password,
        );
      },
      message: () => {
        `Password must include at least one  number, one uppercase letter, one lowercase letter, and one special character`;
      },
    },
  },
});

const User = model("User", userSchema);

module.exports = User;
