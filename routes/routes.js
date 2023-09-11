const express = require("express");
const { readController, readSBController, createController } = require("../controllers");
const router = express.Router();

router.get("/read", readController);
router.get("/read/sb", readSBController);
// router.get("/test", createController);

module.exports = router;
