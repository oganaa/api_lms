const express = require("express");
const router = express.Router();

const {getUserRole, getUsers,createUser ,deleteUser,updateUser,getUser,login} = require('../controller/user')
router.route("/find").get(getUsers)
router.route("/newUser").post(createUser)
router.route("/deleteUser/:id").delete(deleteUser)
router.route("/updateUser/:id").put(updateUser)
router.route("/getUser/:id").get(getUser)
router.route("/getUserRole/:id").get(getUserRole)
router.route("/login").post(login)
module.exports = router;
