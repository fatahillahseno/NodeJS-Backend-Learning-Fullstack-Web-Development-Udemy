const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const User = require("../../users/user.schema.js");
const getUserByEmailProvider = require("../../users/providers/getUserByEmail.provider.js");
const bycrpt = require("bcrypt");
const generateTokenProvider = require("./generateToken.provider.js");

async function loginProvider(req, res) {
  const validatedLoginData = matchedData(req);
  try {
    const user = await getUserByEmailProvider(validatedLoginData.email);

    const result = await bycrpt.compare(
      validatedLoginData.password,
      user.password,
    );

    if (!result) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please check your credentials" });
    }

    const token = await generateTokenProvider(user);

    return res.status(StatusCodes.OK).json({
      accessToken: token,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    errorLogger(`Error while trying to login ${error.message}`, req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later",
    });
  }
}

module.exports = loginProvider;
