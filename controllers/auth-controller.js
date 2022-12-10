const { addUser, authenticate } = require("../services/user-service");
const httpStatus = require("http-status");

const signUp = async (req, res) => {
  const { email, password } = req.body;

  // If either email or password is undefined|null, respond with bad request error
  if (!email || !password) return res.sendStatus(httpStatus.BAD_REQUEST);

  const result = await addUser(email, password);

  res.json(result);
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = {
  signUp,
  signIn,
};
