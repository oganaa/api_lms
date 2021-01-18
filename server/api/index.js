const express = require("express");
const router = express.Router();
router.use("/usersRole", require("./users_role.js"));
router.use("/user", require("./user.js"));
router.use("/role", require("./role.js"));
router.use("/demo", require("./demo.js"));
module.exports = router;