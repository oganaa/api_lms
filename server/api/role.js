const express = require("express");
const router = express.Router();

const { getRoles,createRole ,deleteRole,updateRole,getRole} = require('../controller/role')
router.route("/find").get(getRoles)
router.route("/newRole").post(createRole)
router.route("/deleteRole/:id").delete(deleteRole)
router.route("/updateRole/:id").put(updateRole)
router.route("/getRole/:id").get(getRole)

  module.exports = router;