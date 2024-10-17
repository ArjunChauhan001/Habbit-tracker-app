const dotenv = require('dotenv');
dotenv.config();

const envVars = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
}

module.exports = envVars;