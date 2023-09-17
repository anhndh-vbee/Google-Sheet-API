const express = require("express");
const { bulkCreateStoriesPBI, bulkCreateSubtask } = require("../controllers");
const router = express.Router();

router.get("/PBI", bulkCreateStoriesPBI);
router.get("/SB", bulkCreateSubtask);

module.exports = router;
