const bcrypt = require("bcrypt");

const hashdPassword = async (password) => {
  try {
    const salt = 12;
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log("Error while hashing password", error);
  }
};
const comparePassword = async (password, hashed) => {
  try {
    const match = await bcrypt.compare(password, hashed);
    return match;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { hashdPassword, comparePassword };
