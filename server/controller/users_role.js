

exports.getUserRoles = async(req, res, next) => {
    try {
        let roles = await MODELS.users_role.findAll()
        // res.send(users);
        res.status(200).send(
            roles
        )
      } catch (err) {
        res.status(400).send({ message: err.message })
      }
}
exports.createUserRole = async(req, res, next) => {
    try {
        let {role_id,user_id,id}=req.body;
        console.log(req.body)
        let createRoll = await MODELS.users_role.create({
            role_id:role_id,
            user_id:user_id,
            id:id,
        })
        //delete userAdd["password"];
        res.status(200).send(
            createRoll
        )
      } catch (err) {
        res.status(400).send({ message: err.message })
      }
}
exports.deleteUserRole = async(req, res, next) => {
    try {
        let findRole = await MODELS.users_role.findByPk(req.params.id);
        let deleteRole = await findRole.destroy()
        res.status(200).json({
            success: true,
            message: deleteRole,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.updateUserRole = async(req, res, next) => {
  try {
        let updateRole = await MODELS.users_role.findByPk(req.params.id);
        let up = await updateRole.update(req.body);
        res.status(200).json({

            message: up,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.getUserRole = async(req, res, next) => {
    try {
        let getRole = await MODELS.users_role.findByPk(req.params.id);
        res.status(200).json({
            success: true,
            message: getRole,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}

