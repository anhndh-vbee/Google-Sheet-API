const express = require("express");
const { readController, readSBController } = require("../controllers");
const router = express.Router();

router.get("/read", readController);
// router.get("/test", createController);
router.get("/read/sb", readSBController);
module.exports = router;
