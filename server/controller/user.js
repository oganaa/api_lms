var Bcrypt = require("bcrypt");
exports.getUsers = async(req, res, next) => {
    try {
        let users = await MODELS.users.findAll({
          attributes: {exclude: ['password']},
        })
        // res.send(users);
        res.status(200).send(
            users
        )
      } catch (err) {
        res.status(400).send({ message: err.message })
      }
}
exports.createUser = async(req, res, next) => {
    try {
        let {email,password,role}=req.body;
        let hashedPassword = Bcrypt.hashSync(password, 10);
        let userAdd = await MODELS.users.create({
          email:email,
          password:hashedPassword,
          role :role,
      })
        //delete userAdd["password"];
        delete userAdd.dataValues.password
        res.status(200).send(
          userAdd
        )
      } catch (err) {
        res.status(400).send({ message: err.message })
      }
}
exports.deleteUser = async(req, res, next) => {
    try {
        let findUser = await MODELS.users.findByPk(req.params.id);
        let deleteRole = await findUser.destroy()
        res.status(200).json({
            success: true,
            message: deleteRole,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.updateUser = async(req, res, next) => {
    try {
        let updateUser = await MODELS.users.findByPk(req.params.id);
        let updates = await updateUser.update(req.body)
        res.status(200).json({
            success: true,
            message: updates,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.getUser = async(req, res, next) => {
    try {
        let getUser = await MODELS.users.findByPk(req.params.id,{attributes: {exclude: ['password']},});
        res.status(200).json({
            success: true,
            message: getUser,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.getUserRole = async(req, res, next) => {
    try {
        let getUser = await MODELS.users.findByPk(req.params.id,{include:[
            {
                model:MODELS.role,
               
                through: {
                    attributes: [],
                }
            }
        ]});
        
        res.status(200).json({
            success: true,
            message: getUser,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}

