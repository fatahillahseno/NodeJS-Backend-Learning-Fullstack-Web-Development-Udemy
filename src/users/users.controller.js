const { StatusCodes } = require("http-status-codes");
const createUserProvider = require("./providers/createUser.provider");

async function handleCreateUser(req, res) {
  const user = await createUserProvider(req);
  res.status(StatusCodes.CREATED).json(user);
}

module.exports = { handleCreateUser };
