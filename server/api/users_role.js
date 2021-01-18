const express = require("express");
const router = express.Router();

const { getUserRoles,createUserRole ,deleteUserRole,updateUserRole,getUserRole} = require('../controller/users_role')
router.route("/find").get(getUserRoles)
router.route("/newUserRole").post(createUserRole)
router.route("/deleteUserRole/:id").delete(deleteUserRole)
router.route("/updateUserRole/:id").put(updateUserRole)
router.route("/getUserRole/:id").get(getUserRole)

module.exports = router;