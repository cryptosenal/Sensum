const { Router } = require("express");
const router = Router();
const {renderTime} = require("./controller");

router.get("/:time", renderTime);

module.exports = router;
