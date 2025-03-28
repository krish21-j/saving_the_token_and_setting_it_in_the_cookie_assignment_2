const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: "1h" }); 
};

module.exports = encrypt;
