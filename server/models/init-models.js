var DataTypes = require("sequelize").DataTypes;
var _Demo = require("./Demo");
var _event_log = require("./event_log");
var _role = require("./role");
var _users = require("./users");
var _users_role = require("./users_role");

function initModels(sequelize) {
  var Demo = _Demo(sequelize, DataTypes);
  var event_log = _event_log(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_role = _users_role(sequelize, DataTypes);

  event_log.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(event_log, { foreignKey: "user_id"});
  users_role.belongsTo(role, { foreignKey: "role_id"});
  role.hasMany(users_role, { foreignKey: "role_id"});
  users_role.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(users_role, { foreignKey: "user_id"});

  return {
    Demo,
    event_log,
    role,
    users,
    users_role,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
