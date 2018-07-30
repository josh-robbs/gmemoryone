const knex = require('knex')
const environment = process.env.NODE_ENV || "development"
const config = require('./knexfile')
const database = require('knex')(config[environment])



module.exports = database


// const CONFIG = require("./knexfile")[process.env.NODE_ENV || "development"];
// module.exports = require("knex")(CONFIG);