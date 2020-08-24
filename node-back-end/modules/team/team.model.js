const mongoose = require("mongoose");
Schema = mongoose.Schema;

const teamSchema = new mongoose.Schema({
  name: String,
  logo: String,
  color: String
});

module.exports = mongoose.model('Teams', teamSchema)