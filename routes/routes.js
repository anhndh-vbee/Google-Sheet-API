const express = require("express");
const { readController, createController } = require("../controllers");
const router = express.Router();

router.get("/read", readController);
router.get("/test", createController);

module.exports = router;
