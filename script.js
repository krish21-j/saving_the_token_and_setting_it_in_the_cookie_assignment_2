const jwt = require("jsonwebtoken");


const encrypt = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};


const decrypt = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return { error: "Invalid or Expired Token" };
  }
};


if (require.main === module) {
  const secretKey = "my_secret_key";
  const payload = { user: "testUser", role: "admin" };

 
  const token = encrypt(payload, secretKey);
  console.log("Generated JWT:", token);

  
  const decoded = decrypt(token, secretKey);
  console.log("Decoded Payload:", decoded);
}


module.exports = { encrypt, decrypt };
