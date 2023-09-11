const express = require("express");
const { readController } = require("../controllers");
const router = express.Router();

router.get("/read", readController);

module.exports = router;
