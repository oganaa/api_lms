const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_role', {
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'role',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'users_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
