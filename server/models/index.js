const fs = require('fs');
const Sequelize = require('sequelize');
const config = require('../../config/config');
const models = {};
const sequelizeConnection = new Sequelize(config.db);

fs.readdirSync(__dirname)
  //.filter(file => file.indexOf(".") !== 0 && file !== "index.js")
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== "index.js") && (file.slice(-3) === '.js');
})
  .forEach(file => {
    let model = require("./" + file)(sequelizeConnection, Sequelize);
    console.log('models name',file,file.substring(0,file.length-3))
    // models[model.name] = model.schema;
    models[file.substring(0,file.length-3)] = model;
  });



// PUT RELATIONSHIP MODELS HERE
// BelongsTo
// HasOne
// HasMany
// BelongsToMany
// for examples
//models.Order.belongsTo(models.User);


module.exports = models;
global.SEQUELIZECONNECTION = sequelizeConnection