const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  DOMAIN: process.env.DOMAIN,
  APIKEY: process.env.APIKEY,
  SHEETID: process.env.SHEETID,
  EMAIL: process.env.EMAIL,
};
