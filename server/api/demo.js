const express = require("express");
const router = express.Router();
router.post("/newDemo", async (req, res) => {
    try {
      console.log('------ tanii data',req.body);
      console.log(req.body)
      let {name}=req.body;
      let newDemo = await MODELS.Demo.create({
        name:name,
      })
      // res.send(users);
      res.status(200).send(
        newDemo,
      )
    } catch (err) {
      res.status(400).send({ message: err.message })
    }
  });
  router.get("/find", async (req, res) => {
    try {
      let demos = await MODELS.Demo.findAll({
      })
      // res.send(users);
      res.status(200).send(
        demos
      )
    } catch (err) {
      res.status(400).send({ message: err.message })
    }
  });

  module.exports = router;