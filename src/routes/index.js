const { Router } = require("express");
const router = Router();
const home = require("../components/home/routes");
const adausdt = require("../components/adausdt/routes");
const aaveusdt = require("../components/aaveusdt/routes");
const inchusdt = require("../components/inchusdt/routes");

router.use("/", home);
router.use("/inchusdt", inchusdt);
router.use("/aaveusdt", aaveusdt);
router.use("/adausdt", adausdt);

module.exports = router;
