
exports.getRoles = async(req, res, next) => {
    try {
        let roles = await MODELS.role.findAll()
        // res.send(users);
        res.status(200).send(
            roles
        )
      } catch (err) {
        res.status(400).send({ message: err.message })
      }
}
exports.createRole = async(req, res, next) => {
    try {
        let {role_id,roll_name}=req.body;
        console.log(req.body)
        let createRoll = await MODELS.role.create({
            id:role_id,
            role_name:roll_name,
        })
        //delete userAdd["password"];
        res.status(200).send(
            createRoll
        )
      } catch (err) {
        res.status(400).send({ message: err.message })
      }
}
exports.deleteRole = async(req, res, next) => {
    try {
        let findRole = await MODELS.role.findByPk(req.params.id);
        let deleteRole = await findRole.destroy()
        res.status(200).json({
            success: true,
            message: deleteRole,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.updateRole = async(req, res, next) => {
  try {
        let updateRole = await MODELS.role.findByPk(req.params.id);
        let up = await updateRole.update(req.body);
        res.status(200).json({

            message: up,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.getRole = async(req, res, next) => {
    try {
        let getRole = await MODELS.role.findByPk(req.params.id);
        res.status(200).json({
            success: true,
            message: getRole,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}

