const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const env = process.env.NODE_ENV || "development";

const config = {
  host: '192.168.17.210',
  development: {
    root: rootPath,
    app: {
      name: "nuxt-express-template"
    },
    port: process.env.PORT || 3000,
    db: "postgres://postgres:StrongAdminP@ssw0rd@192.168.17.210:5432/lms"
  },

  test: {
    root: rootPath,
    app: {
      name: "nuxt-express-template"
    },
    port: process.env.PORT || 3000,
    db: "postgres://postgres:StrongAdminP@ssw0rd@192.168.17.210:5432/lms"
  },

  production: {
    root: rootPath,
    app: {
      name: "nuxt-express-template"
    },
    port: process.env.PORT || 3000,
    db: "postgres://postgres:StrongAdminP@ssw0rd@192.168.17.210:5432/lms"
  }
};

module.exports = config[env];