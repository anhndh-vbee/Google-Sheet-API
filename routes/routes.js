const express = require("express");
const {
  bulkCreateStoriesPBI,
  readSBController,
  bulkCreateSubtask,
} = require("../controllers");
const router = express.Router();

router.get("/PBI", bulkCreateStoriesPBI);
router.get("/SB", bulkCreateSubtask);
router.get("/read/sb", readSBController);

module.exports = router;
