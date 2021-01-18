const express = require("express");
const router = express.Router();

const { getUsers,createUser ,deleteUser,updateUser,getUser} = require('../controller/user')
router.route("/find").get(getUsers)
router.route("/newUser").post(createUser)
router.route("/deleteUser/:id").delete(deleteUser)
router.route("/updateUser/:id").put(updateUser)
router.route("/getUser/:id").get(getUser)
module.exports = router;
